import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync, readdirSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';

const isImage = f => /\.(jfif|png|jpg|jpeg)$/i.test(f);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (isImage(entry.name)) yield full;
  }
}

const results = [];
for (const file of walk('public/images')) {
  const webp = file.replace(/\.(jfif|png|jpg|jpeg)$/i, '.webp');
  try {
    const img = sharp(readFileSync(file));
    const meta = await img.metadata();
    const max = Math.max(meta.width, meta.height);
    const resizeOpts = max > 1200 ? { width: 1200, withoutEnlargement: true } : {};
    await img.resize(resizeOpts).webp({ quality: 80, effort: 4 }).toFile(webp);
    const oldSize = statSync(file).size;
    const newSize = statSync(webp).size;
    const pct = ((1 - newSize / oldSize) * 100).toFixed(1);
    results.push({ file: file.replace('public/', ''), saved: pct });
    process.stdout.write('.');
  } catch (e) {
    console.error(`\nFAIL: ${file} — ${e.message}`);
  }
}

console.log(`\n\nConverted ${results.length} images:`);
for (const r of results) {
  console.log(`  ${r.saved}%  ${r.file}`);
}
