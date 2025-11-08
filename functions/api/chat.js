// functions/api/chat.js

export const onRequest = async (context) => {

  const { request } = context;

  
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: '仅支持 POST 请求' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  try {
    let message = '';
    let file = null;

    const contentType = request.headers.get('Content-Type');

    if (contentType && contentType.includes('multipart/form-data')) {
      // 处理表单上传（含文件）
      const formData = await request.formData();
      message = formData.get('message')?.toString() || '';
      const uploadedFile = formData.get('file');

      if (uploadedFile && uploadedFile instanceof File) {
        // 读取文件内容（仅限文本文件！二进制文件需特殊处理）
        const arrayBuffer = await uploadedFile.arrayBuffer();
        const textDecoder = new TextDecoder('utf-8');
        let fileContent = '';
        try {
          fileContent = textDecoder.decode(arrayBuffer);
        } catch (e) {
          fileContent = '[无法解析为文本]';
        }
        file = {
          name: uploadedFile.name,
          contentType: uploadedFile.type || 'unknown',
          content: fileContent
        };
      }
    } else {
      // 处理 JSON 请求
      const json = await request.json();
      message = json.message || '';
    }

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: '需要提供有效的消息内容' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 构建发送给 DeepSeek 的内容
    let content = message;
    if (file) {
      content += `\n\n用户上传了文件: ${file.name}\n文件类型: ${file.contentType}\n文件内容摘要: ${file.content.substring(0, 200)}${file.content.length > 200 ? '...' : ''}`;
    }

    // 从环境变量获取 API Key（在 Cloudflare Dashboard 设置）
    const apiKey = context.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error('缺少 DEEPSEEK_API_KEY 环境变量');
      return new Response(JSON.stringify({ error: '服务器配置错误' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 调用 DeepSeek API
    const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content }],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('DeepSeek API 错误:', data);
      return new Response(JSON.stringify({ error: 'DeepSeek 服务异常', details: data }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const replyText = data.choices?.[0]?.message?.content?.trim();
    if (!replyText) {
      return new Response(JSON.stringify({ error: '未收到有效回复' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ reply: replyText }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('处理请求失败:', error);
    return new Response(JSON.stringify({ error: '服务器内部错误' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};