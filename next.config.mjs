/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export', // 关键：生成静态 HTML
  distDir: 'out',   // 构建输出目录
};

export default nextConfig;
