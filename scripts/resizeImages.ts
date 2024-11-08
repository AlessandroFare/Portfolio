import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'public/projects');

async function resizeImages() {
  const files = fs.readdirSync(projectsDir);

  for (const file of files) {
    // Ignora le cartelle
    if (!file.includes('.')) continue;
    
    const inputPath = path.join(projectsDir, file);
    const outputPath = path.join(projectsDir, `resized-${file}`);
    
    try {
      if (file.includes('hero')) {
        // Ridimensiona hero images a 1920x1080
        await sharp(inputPath)
          .resize(1920, 1080, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath);
        console.log(`✅ Ridimensionata immagine hero: ${file}`);
      }
      else if (file.includes('preview')) {
        // Ridimensiona preview images a 800x600
        await sharp(inputPath)
          .resize(800, 600, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath);
        console.log(`✅ Ridimensionata immagine preview: ${file}`);
      }
      else if (file.includes('gallery')) {
        // Ridimensiona gallery images a 1920x1080
        await sharp(inputPath)
          .resize(1920, 1080, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath);
        console.log(`✅ Ridimensionata immagine gallery: ${file}`);
      }
    } catch (error) {
      console.error(`❌ Errore nel ridimensionamento di ${file}:`, error);
    }
  }

  console.log('\nProcesso completato! Per ogni immagine originale è stata creata una versione "resized-".');
  console.log('Ora puoi manualmente sostituire le immagini originali con quelle ridimensionate se sei soddisfatto del risultato.');
}

resizeImages().catch(console.error); 