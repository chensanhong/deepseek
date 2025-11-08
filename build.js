const { execSync } = require('child_process');
try {
  console.log('尝试构建项目...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('构建成功!');
} catch (error) {
  console.error('构建失败:', error.message);
  process.exit(1);
}