import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // 发送消息（仅支持文本）
  const handleSendMessage = (message) => {
    sendMessage(message);
    // 清除输入
    document.querySelector(`.${styles.input}`).value = '';
  };

  // 执行搜索
  const handleSearch = async (query) => {
    const messages = document.getElementById('messages');
    const searchResultsContainer = document.getElementById('searchResults');
    
    // 显示搜索请求
    messages.innerHTML += `<div><strong>你：</strong> [搜索] ${query}</div>`;
    
    // 显示搜索中提示
    searchResultsContainer.innerHTML = '<div class="searching">搜索中...</div>';
    searchResultsContainer.style.display = 'block';
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        // 显示搜索结果
        let resultsHtml = '<div class="search-results-title">搜索结果：</div>';
        data.results.forEach(result => {
          resultsHtml += `
            <div class="search-result">
              <h4>${result.title}</h4>
              <p>${result.snippet}</p>
              <a href="${result.url}" target="_blank" rel="noopener noreferrer">${result.url}</a>
            </div>
          `;
        });
        searchResultsContainer.innerHTML = resultsHtml;
        
        // 将搜索结果整合到AI对话中
        sendMessage(`根据搜索结果，请基于以下信息回答关于"${query}"的问题：\n\n${data.results.map(r => `标题：${r.title}\n摘要：${r.snippet}`).join('\n\n')}`, true);
      } else {
        searchResultsContainer.innerHTML = '<div class="no-results">未找到相关结果</div>';
      }
    } catch (error) {
      searchResultsContainer.innerHTML = '<div class="search-error">搜索失败，请重试</div>';
      console.error('搜索失败:', error);
    }
    
    // 滚动到底部
    messages.scrollTop = messages.scrollHeight;
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
          {/* 简化版界面 - 仅支持文本输入 */}
          
          {/* 文本输入区域和按钮 */}
          <div className={styles.inputContainer}>
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
            <button 
              className={styles.sendMessageBtn}
              onClick={() => {
                const input = document.querySelector(`.${styles.input}`);
                handleSendMessage(input.value);
              }}
            >
              发送
            </button>
            <button 
              className={styles.searchBtn}
              onClick={() => {
                const input = document.querySelector(`.${styles.input}`);
                if (input.value.trim()) {
                  handleSearch(input.value.trim());
                  input.value = '';
                }
              }}
            >
              搜索
            </button>
          </div>
          
          {/* 搜索结果区域 */}
          <div id="searchResults" className={styles.searchResults}></div>
          
          {/* 消息显示区域 */}
          <div id="messages" className={styles.messages}></div>
        </div>
      </main>
    </div>
  );
}

async function sendMessage(message, isSearchRelated = false) {
  const messages = document.getElementById('messages');
  
  // 仅在非搜索相关消息时显示用户消息
  if (!isSearchRelated) {
    let userMessageHtml = `<div><strong>你：</strong> ${message}</div>`;
    messages.innerHTML += userMessageHtml;
  } else {
    // 搜索相关消息时，显示系统消息
    messages.innerHTML += `<div class="system-message">正在根据搜索结果生成回答...</div>`;
  }
  
  try {
    // 统一使用JSON格式发送请求
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    messages.innerHTML += `<div><strong>AI：</strong> ${data.reply || '发生错误，请重试'}</div>`;
  } catch (error) {
    messages.innerHTML += `<div><strong>AI：</strong> 发送失败，请重试</div>`;
    console.error('发送消息失败:', error);
  }
  
  // 滚动到底部
  messages.scrollTop = messages.scrollHeight;
}
