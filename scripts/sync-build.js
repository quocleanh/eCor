import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');

console.log('🔄 Đang đồng bộ production bundle sang thư mục root cho GitHub Pages...');

// 1. Sao lưu index.html nguồn thành index.dev.html nếu chưa có
const rootIndex = path.join(rootDir, 'index.html');
const devIndex = path.join(rootDir, 'index.dev.html');

if (!fs.existsSync(devIndex) && fs.existsSync(rootIndex)) {
  const content = fs.readFileSync(rootIndex, 'utf-8');
  if (content.includes('/src/main.js')) {
    fs.writeFileSync(devIndex, content, 'utf-8');
    console.log('✅ Đã lưu template dev vào index.dev.html');
  }
}

// 2. Đồng bộ thư mục assets từ dist sang root
if (fs.existsSync(distAssetsDir)) {
  if (!fs.existsSync(rootAssetsDir)) {
    fs.mkdirSync(rootAssetsDir, { recursive: true });
  }

  // Xóa các file cũ trong root assets
  const oldFiles = fs.readdirSync(rootAssetsDir);
  for (const file of oldFiles) {
    fs.unlinkSync(path.join(rootAssetsDir, file));
  }

  // Copy các file mới từ dist/assets
  const distFiles = fs.readdirSync(distAssetsDir);
  for (const file of distFiles) {
    fs.copyFileSync(path.join(distAssetsDir, file), path.join(rootAssetsDir, file));
  }
  console.log(`✅ Đã đồng bộ ${distFiles.length} file sang thư mục /assets ở root`);
}

// 3. Copy dist/index.html ra root index.html
const distIndex = path.join(distDir, 'index.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✅ Đã cập nhật index.html tại root với bundle production');
}

// 4. Đảm bảo file 404.html và CNAME có ở root
const public404 = path.join(rootDir, 'public', '404.html');
const root404 = path.join(rootDir, '404.html');
if (fs.existsSync(public404)) {
  fs.copyFileSync(public404, root404);
  console.log('✅ Đã đồng bộ 404.html tại root');
}

const publicCname = path.join(rootDir, 'public', 'CNAME');
const rootCname = path.join(rootDir, 'CNAME');
if (fs.existsSync(publicCname)) {
  fs.copyFileSync(publicCname, rootCname);
  console.log('✅ Đã đồng bộ CNAME tại root');
}

console.log('🎉 Hoàn tất! Nhánh main hiện tại đã sẵn sàng để GitHub Pages phục vụ trực tiếp không lo trắng trang.');
