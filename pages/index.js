// pages/index.js
export default function Home() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>みなさんこんにちは</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>欢迎来到散虹的网页</p>
      </header>
      
      <section>
        <h2 style={{ fontSize: '1.8rem', color: '#333', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', marginBottom: '30px' }}>网站功能目录</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px'
        }}>
          {/* AI 工具汇总 */}
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
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>AI工具汇总</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>各种AI工具的集合，提供智能对话、信息查询等多种功能。</p>
            <a 
              href="https://chensanhong.top/AIinstrument" 
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
              详细信息
            </a>
          </div>
          
          {/* 其他功能占位 */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>即将推出</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>更多功能正在开发中，敬请期待！</p>
          </div>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '10px' }}>即将推出</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>更多功能正在开发中，敬请期待！</p>
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
        <p>© {new Date().getFullYear()} chensanhong.top - 个人网站</p>
      </footer>
    </div>
  );
}