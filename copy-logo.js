import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = '/Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Assets/ardictech-logo.png';
const dstDir = __dirname + '/src/assets';
const dst = dstDir + '/ardictech-logo.png';

try {
  mkdirSync(dstDir, { recursive: true });
  copyFileSync(src, dst);
  console.log('✅ Logo file copied successfully!');
  console.log(`   From: ${src}`);
  console.log(`   To: ${dst}`);
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  process.exit(1);
}
