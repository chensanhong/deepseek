// pages/api/search.js

// 模拟搜索API，实际生产环境中可以使用真实的搜索引擎API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '仅支持 POST 请求' });
  }

  try {
    const { query } = req.body;
    
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: '需要提供有效的搜索查询' });
    }

    // 模拟搜索结果，实际项目中可以调用百度搜索API或其他搜索引擎API
    // 这里使用模拟数据展示功能
    const searchResults = [
      {
        title: `关于"${query}"的信息 - 示例搜索结果`,
        url: 'https://example.com/result1',
        snippet: `这是关于"${query}"的详细信息。搜索结果提供了相关的内容摘要，帮助用户快速了解主题。`
      },
      {
        title: `"${query}"的最新研究进展`,
        url: 'https://example.com/result2',
        snippet: `最新的研究表明，${query}在多个领域都有广泛的应用。本文将详细介绍这些应用场景和未来发展趋势。`
      },
      {
        title: `如何有效利用${query}解决实际问题`,
        url: 'https://example.com/result3',
        snippet: `本指南提供了详细的步骤，帮助您快速掌握${query}的核心概念和实践方法，提升工作效率。`
      }
    ];

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({
      query,
      results: searchResults,
      totalResults: searchResults.length
    });
  } catch (error) {
    console.error('搜索出错:', error);
    res.status(500).json({ error: '搜索服务异常' });
  }
}