// pages/api/chat.js
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const MODEL_NAME = 'deepseek-chat'; // 或 deepseek-coder，看你买了哪个

// 为了支持文件上传，我们需要配置API路由
// 由于我们不会实际保存文件，只是读取文件内容，可以使用Node.js内置的流处理

// 配置Next.js API路由以接收二进制数据
export const config = {
  api: {
    bodyParser: false, // 禁用默认的bodyParser，因为我们需要处理multipart/form-data
  },
};

// 简单的multipart/form-data解析函数
async function parseFormData(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let message = '';
    let fileName = '';
    let fileContent = null;
    let isFile = false;
    let contentType = null;
    
    req.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const bufferString = buffer.toString();
      
      // 简单检测是否为JSON
      if (bufferString.startsWith('{') && bufferString.endsWith('}')) {
        try {
          const jsonData = JSON.parse(bufferString);
          resolve({ message: jsonData.message, file: null });
        } catch (e) {
          // 不是有效的JSON，可能是form-data
        }
      }
      
      // 尝试从form-data中提取消息
      // 这是一个非常简化的解析，实际生产环境中应该使用formidable等库
      const lines = bufferString.split('\r\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('name="message"')) {
          message = lines[i + 2];
        } else if (lines[i].includes('name="file"')) {
          isFile = true;
          // 尝试提取文件名
          const filenameMatch = lines[i].match(/filename="([^"]+)"/);
          if (filenameMatch) {
            fileName = filenameMatch[1];
          }
          // 尝试提取content-type
          const contentTypeMatch = lines[i + 1].match(/Content-Type: ([^;]+)/);
          if (contentTypeMatch) {
            contentType = contentTypeMatch[1];
          }
          // 内容开始于下一行
          let contentStart = i + 3;
          let contentEnd = contentStart;
          while (contentEnd < lines.length && !lines[contentEnd].startsWith('--')) {
            contentEnd++;
          }
          // 提取文件内容（这只是文本内容，二进制文件需要更复杂的处理）
          if (contentStart < contentEnd) {
            fileContent = lines.slice(contentStart, contentEnd).join('\r\n');
          }
        }
      }
      
      resolve({
        message,
        file: fileContent ? {
          name: fileName,
          content: fileContent,
          contentType
        } : null
      });
    });
    
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '仅支持 POST 请求' });
  }

  try {
    // 解析请求体（支持JSON和form-data）
    const { message, file } = await parseFormData(req);
    
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: '需要提供有效的消息内容' });
    }
    
    // 构建发送给DeepSeek API的消息内容
    let content = message;
    if (file) {
      // 如果有文件，在消息中添加文件信息
      content += `\n\n用户上传了文件: ${file.name}\n文件类型: ${file.contentType || 'unknown'}\n文件内容摘要: ${file.content.substring(0, 200)}${file.content.length > 200 ? '...' : ''}`;
    }

  const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error('缺少 DEEPSEEK_API_KEY 环境变量');
      return res.status(500).json({ error: '服务器配置错误' });
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [{ role: 'user', content }], // 使用构建好的content变量
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('DeepSeek API 错误:', data);
      return res.status(500).json({ error: 'DeepSeek 服务异常', details: data });
    }

    const replyText = data.choices?.[0]?.message?.content?.trim();
    if (!replyText) {
      return res.status(500).json({ error: '未收到有效回复' });
    }

    res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error('解析请求体失败:', error);
    res.status(500).json({ error: '服务器内部错误' });
  }
}