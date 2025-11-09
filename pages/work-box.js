import React from 'react';
import styles from '../styles/Home.module.css';

const WorkBox = () => {
  const tools = [
    {
      id: 1,
      name: 'Ollama官网',
      url: 'https://ollama.com/',
      description: '开源大语言模型本地运行平台，支持多种模型部署与使用。'
    },
    {
      id: 2,
      name: 'MSVC 工具集',
      url: 'https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/',
      description: '微软Visual C++构建工具，用于C/C++程序开发与编译。'
    },
    {
      id: 3,
      name: 'Anaconda',
      url: 'www.anaconda.com/download/',
      description: '数据科学与机器学习平台，包含Python环境与常用库。'
    },
    {
      id: 4,
      name: 'Pycharm',
      url: 'https://pycharm.asiagi.net.cn/',
      description: '专业Python集成开发环境，提供智能代码补全与调试功能。'
    },
    {
      id: 5,
      name: '清华大学开源软件镜像站',
      url: 'https://mirrors.tuna.tsinghua.edu.cn/',
      description: '提供各类开源软件的国内镜像下载服务，加速获取资源。'
    },
    {
      id: 6,
      name: '下载免费书的网站',
      url: 'https://xmsoushu.com/',
      description: '提供各类电子书籍免费下载，满足学习与阅读需求。'
    },
    {
      id: 7,
      name: '在线图片转.ico图标',
      url: 'https://www.aconvert.com/cn/icon/',
      description: '在线图片格式转换工具，支持多种格式转为.ico图标文件。'
    },
    {
      id: 8,
      name: 'cloudflare',
      url: 'https://dash.cloudflare.com',
      description: '提供网络安全与加速服务，保护网站并提升访问速度。'
    },
    {
      id: 9,
      name: 'vercel',
      url: 'https://vercel.com',
      description: '前端部署与托管平台，支持快速构建和部署现代化网站。'
    },
    {
      id: 10,
      name: '360智图',
      url: 'https://pic.360.com/home',
      description: '在线图片编辑与处理工具，提供多种实用图片功能。'
    }
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          工具箱
        </h1>
        <p className={styles.description}>
          收集各类实用工具和资源，方便日常工作和学习
        </p>
        <div className={styles.grid}>
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>{tool.name} →</h2>
              <p className={styles.cardDescription}>{tool.description}</p>
            </a>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          工具箱 © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
};

export default WorkBox;