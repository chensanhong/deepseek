// pages/AIinstrument.js
export default function AIInstrument() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>AI工具汇总</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>各种AI工具的集合页面</p>
      </header>
      
      <section>
        <h2 style={{ fontSize: '1.8rem', color: '#333', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', marginBottom: '30px' }}>工具列表</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px'
        }}>
          {/* deepseek API调用 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>deepseek——API调用</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>这是散虹さん自己做的API调用，还正在完善，目前可以进行智能回答</p>
            <a 
              href="https://chensanhong.top/deepseek" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 月之暗面（Kimi） */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>月之暗面（Kimi）</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>智能对话助手，提供多轮对话、信息检索和创意生成服务</p>
            <a 
              href="http://www.moonshot.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* deepseek */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>deepseek</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>功能强大的AI探索工具，提供多样化的智能服务</p>
            <a 
              href="https://www.deepseek.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 阿里通义千问 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>阿里通义千问</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>阿里云推出的智能对话助手，支持多轮对话和任务处理</p>
            <a 
              href="https://tongyi.aliyun.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 百度智能云千帆大模型 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>百度智能云千帆大模型</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供丰富的AI模型服务，支持图文识别等功能</p>
            <a 
              href="https://cloud.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 腾讯云语音合成 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>腾讯云语音合成</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>将文本转化为超拟人化的语音，支持丰富的平台音色选择和自定义音色</p>
            <a 
              href="https://cloud.tencent.com/product/tts" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 纳米AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>纳米AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>专注于纳米搜索片等AI技术应用，提供创新服务</p>
            <a 
              href="https://deepseek.n.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* sora2（网页版） */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>sora2（网页版）</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>先进的AI视频生成工具，可创建高质量视频内容</p>
            <a 
              href="https://sora.chatgpt.com/explore" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 夸克 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>夸克</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>图片生成、视频生成和数字人制作工具，功能丰富</p>
            <a 
              href="https://www.quark.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 即梦AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>即梦AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>支持图片生成和AI创作，为创意工作提供助力</p>
            <a 
              href="https://jimeng.jianying.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* VIDU */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>VIDU</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>参考生成视频模型，尤其在儿童室内内容创作中表现优秀</p>
            <a 
              href="https://www.vidu.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 可灵AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>可灵AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>快手旗下全球领先的AI视频生成模型，专注儿童内容创作</p>
            <a 
              href="https://app.klingai.com/cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 白日梦AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>白日梦AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>专注儿童故事视觉生成，支持多种绘画风格</p>
            <a 
              href="https://aibrm.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 鬼手剪辑 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>鬼手剪辑</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>全自动视频翻译和配音工具，支持多语言转换</p>
            <a 
              href="https://cj.jollytoday.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 腾讯云语音合成 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>腾讯云语音合成</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供高质量的语音合成服务，支持多种音色选择</p>
            <a 
              href="https://cloud.tencent.com/product/tts" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 喜马拉雅AI小说 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>喜马拉雅AI小说</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>AI驱动的智能小说创作平台，提供个性化阅读体验</p>
            <a 
              href="https://aigc.ximalaya.com/accreat" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 百度文心一言 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>百度文心一言</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供创意写作、阅读分析等多种智能服务</p>
            <a 
              href="https://yiyan.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 文心智能体平台 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>文心智能体平台</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>百度推出的智能体开发平台，支持多场景应用</p>
            <a 
              href="https://agents.baidu.com/center" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 扣子 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>扣子</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>字节跳动AI对话平台，支持多种智能交互场景</p>
            <a 
              href="https://www.coze.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 影刀 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>影刀</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供创意视频制作功能，支持多种视频编辑效果</p>
            <a 
              href="https://www.yingdao.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 通义万相 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>通义万相</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>阿里云AI模型服务平台，提供多种AI能力接入</p>
            <a 
              href="https://tongyi.aliyun.com/wan/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 网易天音 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>网易天音</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>网易AI音乐生成平台，支持多种音乐风格创作</p>
            <a 
              href="https://tianyin.music.163.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 通义灵码 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>通义灵码</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>智能编程助手，提供代码生成和优化功能</p>
            <a 
              href="https://lingma.aliyun.com/lingma" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 米可智能 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>米可智能</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供专业的AI智能服务，支持多种应用场景</p>
            <a 
              href="https://minecho.com/zh" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          
          {/* 文心助手 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>文心助手</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>百度推出的智能对话助手，提供全方位AI服务</p>
            <a 
              href="https://chat.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          
          {/* liblib AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>liblib AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供搜索模型和AI应用工作流，支持AI换脸等功能</p>
            <a 
              href="https://www.liblib.art/inspiration" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* Midjourney */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>Midjourney</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>强大的AI图像生成工具，支持创建高质量艺术作品</p>
            <a 
              href="https://app.midjourney.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* Claude */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>Claude</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Anthropic开发的AI助手，支持长文本处理和分析</p>
            <a 
              href="https://claude.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* Trae */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>Trae</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>国内AI编程助手，提供代码生成和智能开发功能</p>
            <a 
              href="https://www.trae.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 讯飞星火 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>讯飞星火</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>科大讯飞推出的认知智能大模型，支持多模态交互</p>
            <a 
              href="https://xinghuo.xfyun.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 豆包 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>豆包</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>字节跳动AI对话助手，支持多轮对话和创意生成</p>
            <a 
              href="https://www.doubao.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 通义 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>通义</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>阿里云推出的智能对话助手，目前国内最强AI，支持多领域知识问答</p>
            <a 
              href="https://tongyi.aliyun.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 文心一言 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>文心一言</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>百度推出的智能对话助手，支持多模态交互</p>
            <a 
              href="https://yiyan.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 智谱AI */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>智谱AI</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>提供AI模型服务和开发工具，支持企业级应用</p>
            <a 
              href="https://www.zhipuai.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 智源研究院 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>智源研究院</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>专注于人工智能基础研究和技术创新</p>
            <a 
              href="https://www.baai.ac.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 百度千帆大模型平台 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>百度千帆大模型平台</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>百度大模型服务平台，提供模型调用和应用开发</p>
            <a 
              href="https://qianfan.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 百度智能云 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>百度智能云</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>百度云服务平台，提供AI、云计算等多种服务</p>
            <a 
              href="https://cloud.baidu.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 腾讯元宝 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>腾讯元宝</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>腾讯元宝AI助手，提供智能对话和内容创作服务</p>
            <a 
              href="https://yuanbao.tencent.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          

          

          

          

          
          {/* 快手AI平台 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>快手AI平台</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>快手AI技术平台，专注于短视频智能分析和理解</p>
            <a 
              href="https://ai.kuaishou.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          

          
          {/* 火山引擎 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>火山引擎</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>火山引擎是字节跳动旗下AI云平台，提供丰富的AI模型和服务</p>
            <a 
              href="https://www.volcengine.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* 讯飞星火 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>讯飞星火</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>讯飞星火大模型，专注于多轮对话、知识问答和生成能力</p>
            <a 
              href="https://xinghuo.xfyun.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          {/* 腾讯混元大模型 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>腾讯混元大模型</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>腾讯混元大模型，支持多模态交互和智能对话能力</p>
            <a 
              href="https://hunyuan.tencent.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          

          
          {/* Google Gemini */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>Google Gemini</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Google Gemini大模型，支持多模态交互和高级推理能力</p>
            <a 
              href="https://gemini.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          
          {/* OpenAI ChatGPT */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>OpenAI ChatGPT</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>OpenAI开发的ChatGPT，强大的对话和内容生成AI助手</p>
            <a 
              href="https://chat.openai.com/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051bb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            >
              前往使用
            </a>
          </div>
          </div>
      </section>
      
      <footer style={{ 
        marginTop: '60px', 
        paddingTop: '20px', 
        borderTop: '1px solid #eee', 
        textAlign: 'center', 
        color: '#888', 
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} chensanhong.top - AI工具汇总</p>
      </footer>
    </div>
  );
}