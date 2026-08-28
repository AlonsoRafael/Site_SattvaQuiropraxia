import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagensDir = path.resolve('public/imagens');
const googleDir = path.join(imagensDir, 'google');

async function processImages() {
  console.log('--- Otimização Ultra-Precisa de Imagens para PageSpeed 100 ---');

  // 1. ft_principal.png -> ft_principal.webp (Hero LCP)
  const heroSrc = path.join(imagensDir, 'ft_principal.png');
  const heroDest = path.join(imagensDir, 'ft_principal.webp');
  if (fs.existsSync(heroSrc)) {
    await sharp(heroSrc)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(heroDest);
    const oldSize = fs.statSync(heroSrc).size;
    const newSize = fs.statSync(heroDest).size;
    console.log(`ft_principal: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${Math.round((1 - newSize / oldSize) * 100)}% redução)`);
  }

  // 2. beto.png -> beto.webp (ajustado para visualização em telas móveis e desktop)
  const betoSrc = path.join(imagensDir, 'beto.png');
  const betoDest = path.join(imagensDir, 'beto.webp');
  if (fs.existsSync(betoSrc)) {
    await sharp(betoSrc)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(betoDest);
    const oldSize = fs.statSync(betoSrc).size;
    const newSize = fs.statSync(betoDest).size;
    console.log(`beto: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${Math.round((1 - newSize / oldSize) * 100)}% redução)`);
  }

  // 3. logo.png -> logo.webp (dimensão ideal para 88px navbar)
  const logoSrc = path.join(imagensDir, 'logo.png');
  const logoDest = path.join(imagensDir, 'logo.webp');
  if (fs.existsSync(logoSrc)) {
    await sharp(logoSrc)
      .resize({ width: 90, height: 90, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 80, effort: 6 })
      .toFile(logoDest);
    const oldSize = fs.statSync(logoSrc).size;
    const newSize = fs.statSync(logoDest).size;
    console.log(`logo: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${Math.round((1 - newSize / oldSize) * 100)}% redução)`);
  }

  // 4. Galeria e ícones de serviços
  const standardImages = [
    { name: 'portaClinica.jpg', maxW: 800, quality: 75 },
    { name: 'sala1.jpg', maxW: 800, quality: 75 },
    { name: 'sala2.jpg', maxW: 800, quality: 75 },
    { name: 'sala3.jpg', maxW: 800, quality: 75 },
    { name: 'ajuste.png', maxW: 80, quality: 75 },
    { name: 'alivio.png', maxW: 80, quality: 75 },
    { name: 'correcao.png', maxW: 80, quality: 75 },
    { name: 'logo1.png', maxW: 150, quality: 80 }
  ];

  for (const item of standardImages) {
    const src = path.join(imagensDir, item.name);
    const destName = item.name.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const dest = path.join(imagensDir, destName);
    if (fs.existsSync(src)) {
      await sharp(src)
        .resize({ width: item.maxW, withoutEnlargement: true })
        .webp({ quality: item.quality, effort: 6 })
        .toFile(dest);
      const oldSize = fs.statSync(src).size;
      const newSize = fs.statSync(dest).size;
      console.log(`${item.name}: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${Math.round((1 - newSize / oldSize) * 100)}% redução)`);
    }
  }

  // 5. Imagens do Google Reviews
  if (fs.existsSync(googleDir)) {
    const files = fs.readdirSync(googleDir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        const src = path.join(googleDir, file);
        const dest = path.join(googleDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        await sharp(src)
          .resize({ width: 64, height: 64, fit: 'cover' })
          .webp({ quality: 75, effort: 6 })
          .toFile(dest);
        const oldSize = fs.statSync(src).size;
        const newSize = fs.statSync(dest).size;
        console.log(`google/${file}: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
      }
    }
  }

  console.log('--- Otimização Ultra-Precisa Concluída! ---');
}

processImages().catch(console.error);
