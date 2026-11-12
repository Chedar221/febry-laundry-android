import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('assets', { recursive: true });
await sharp('assets/icon.svg')
  .resize(1024, 1024, { fit: 'contain' })
  .png()
  .toFile('assets/icon.png');
console.log('Generated assets/icon.png');
