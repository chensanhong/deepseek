// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setReply('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (res.ok) {
        setReply(data.reply);
      } else {
        setReply('❌ 出错了：' + (data.error || '未知错误'));
      }
    } catch (err) {
      setReply('❌ 网络连接失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>🤖 我的 DeepSeek 助手</h1>
      <form onSubmit={sendMessage}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="请输入你的问题..."
          rows="4"
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: loading ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? '思考中...' : '发送'}
        </button>
      </form>

      {reply && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9f9f9', border: '1px solid #eee', borderRadius: '4px' }}>
          <strong>回答：</strong>
          <div style={{ whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>{reply}</div>
        </div>
      )}
    </div>
  );
}