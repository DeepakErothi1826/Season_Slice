import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.jfif'];

function processDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const baseName = entry.name.replace(ext, '');
        const webpPath = join(dir, `${baseName}.webp`);

        if (!existsSync(webpPath)) {
          sharp(fullPath)
            .webp({ quality: 70, lossless: false })
            .toFile(webpPath)
            .then(() => console.log(`  ✓ ${entry.name} -> ${baseName}.webp`))
            .catch(err => console.error(`  ✗ ${entry.name}: ${err.message}`));
        } else {
          console.log(`  - ${baseName}.webp already exists`);
        }

        // Create AVIF as well
        const avifPath = join(dir, `${baseName}.avif`);
        if (!existsSync(avifPath)) {
          sharp(fullPath)
            .avif({ quality: 60 })
            .toFile(avifPath)
            .then(() => console.log(`  ✓ ${entry.name} -> ${baseName}.avif`))
            .catch(() => {});
        }
      }
    }
  }
}

console.log('🖼️  Optimizing images...');
processDir(publicDir);
console.log('✅ Done!');
