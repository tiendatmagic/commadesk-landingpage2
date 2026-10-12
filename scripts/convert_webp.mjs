import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDirs = [
  './public/showcase',
  './public/avatars',
  './public/commadesk',
];

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const base = path.basename(file, ext);
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, `${base}.webp`);
      
      const statBefore = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 90, effort: 6 })
        .toFile(outputPath);
      const statAfter = fs.statSync(outputPath);
      
      const savedPercent = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(1);
      console.log(`Converted: ${file} (${(statBefore.size / 1024).toFixed(0)} KB) -> ${base}.webp (${(statAfter.size / 1024).toFixed(0)} KB) [Saved ${savedPercent}%]`);
    }
  }
}

async function run() {
  for (const dir of targetDirs) {
    console.log(`\nProcessing directory: ${dir}`);
    await convertDir(dir);
  }
  console.log('\nAll images successfully converted to WebP!');
}

run().catch(console.error);
