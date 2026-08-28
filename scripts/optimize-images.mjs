import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dir = path.resolve('src/assets/images');

const large = new Set(['about-chapa.jpg', 'gallery-ambiente.jpg', 'gallery-preparo.jpg']);
const skip = new Set(['hero-burger.jpg']);

const files = readdirSync(dir).filter((f) => /\.(jpg|jpeg)$/i.test(f));

for (const file of files) {
  if (skip.has(file)) continue;
  const full = path.join(dir, file);
  const before = statSync(full).size;
  const maxWidth = large.has(file) ? 1400 : 900;
  const buffer = await sharp(full)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();
  const { default: fs } = await import('node:fs/promises');
  const tmp = `${full}.tmp`;
  await fs.writeFile(tmp, buffer);
  await fs.rm(full);
  await fs.rename(tmp, full);
  const after = statSync(full).size;
  console.log(
    `${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  );
}
