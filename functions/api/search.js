// functions/api/search.js

export const onRequest = async (context) => {

  const { request } = context;

  
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: '仅支持 POST 请求' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  try {
    const data = await request.json();
    const { query } = data;

    if (!query || typeof query !== 'string') {
      return new Response(JSON.stringify({ error: '需要提供有效的搜索查询' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 模拟搜索结果（和你原来的一样）
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

    // 模拟延迟（可选，生产环境可删）
    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Response(JSON.stringify({
      query,
      results: searchResults,
      totalResults: searchResults.length
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('搜索出错:', error);
    return new Response(JSON.stringify({ error: '搜索服务异常' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};