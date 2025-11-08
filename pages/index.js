import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // 用于存储当前选择的文件
  let selectedFile = null;

  // 处理文件选择
  const handleFileChange = (e) => {
    selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileNameDisplay = document.getElementById('fileName');
      fileNameDisplay.textContent = selectedFile.name;
    }
  };

  // 清除选择的文件
  const clearFile = () => {
    selectedFile = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('fileName').textContent = '';
  };

  // 发送消息（支持文本和文件）
  const handleSendMessage = (message) => {
    sendMessage(message, selectedFile);
    // 清除输入和选择的文件
    document.querySelector(`.${styles.input}`).value = '';
    clearFile();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DeepSeek 聊天助手</title>
        <meta name="description" content="基于 DeepSeek 的 AI 聊天机器人" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DeepSeek 聊天助手</h1>
        <p className={styles.description}>
          输入你的问题或上传文件，AI 将为你回答。
        </p>

        <div className={styles.chatBox}>
          {/* 文件上传区域 */}
          <div className={styles.fileUploadContainer}>
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
              选择文件
              <input
                id="fileInput"
                type="file"
                className={styles.fileInput}
                onChange={handleFileChange}
              />
            </label>
            <span id="fileName" className={styles.fileName}></span>
            <button 
              className={styles.clearFileBtn}
              onClick={clearFile}
            >
              清除
            </button>
          </div>
          
          {/* 文本输入区域 */}
          <input
            type="text"
            placeholder="请输入问题..."
            className={styles.input}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(e.target.value);
              }
            }}
          />
          
          {/* 消息显示区域 */}
          <div id="messages" className={styles.messages}></div>
        </div>
      </main>
    </div>
  );
}

async function sendMessage(message, file = null) {
  const messages = document.getElementById('messages');
  
  // 显示用户消息
  let userMessageHtml = `<div><strong>你：</strong> ${message}`;
  if (file) {
    userMessageHtml += ` <em>(上传了文件: ${file.name})</em>`;
  }
  userMessageHtml += `</div>`;
  messages.innerHTML += userMessageHtml;
  
  try {
    // 根据是否有文件选择不同的请求方式
    if (file) {
      // 有文件时使用FormData
      const formData = new FormData();
      formData.append('message', message);
      formData.append('file', file);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      messages.innerHTML += `<div><strong>AI：</strong> ${data.reply || '发生错误，请重试'}</div>`;
    } else {
      // 只有文本时使用JSON
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      messages.innerHTML += `<div><strong>AI：</strong> ${data.reply || '发生错误，请重试'}</div>`;
    }
  } catch (error) {
    messages.innerHTML += `<div><strong>AI：</strong> 发送失败，请重试</div>`;
    console.error('发送消息失败:', error);
  }
  
  // 滚动到底部
  messages.scrollTop = messages.scrollHeight;
}
