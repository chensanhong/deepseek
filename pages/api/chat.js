// pages/api/chat.js
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const MODEL_NAME = 'deepseek-chat'; // 或 deepseek-coder，看你买了哪个

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '仅支持 POST 请求' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: '需要提供有效的消息内容' });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.error('缺少 DEEPSEEK_API_KEY 环境变量');
    return res.status(500).json({ error: '服务器配置错误' });
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [{ role: 'user', content: message }],
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
    console.error('服务器内部错误:', error);
    res.status(500).json({ error: '服务器内部错误' });
  }
}