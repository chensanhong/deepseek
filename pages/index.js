import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeepSeek 聊天助手</title>
        <meta name="description" content="基于 DeepSeek 的 AI 聊天机器人" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DeepSeek 聊天助手</h1>
        <p className={styles.description}>
          输入你的问题，AI 将为你回答。
        </p>

        <div className={styles.chatBox}>
          <input
            type="text"
            placeholder="请输入问题..."
            className={styles.input}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <div id="messages" className={styles.messages}></div>
        </div>
      </main>
    </div>
  );
}

async function sendMessage(message) {
  const response = await fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  const messages = document.getElementById('messages');
  messages.innerHTML += `<div><strong>你：</strong> ${message}</div>`;
  messages.innerHTML += `<div><strong>AI：</strong> ${data.reply}</div>`;
}
ajsdi