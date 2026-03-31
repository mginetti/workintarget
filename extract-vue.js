import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalHtmlPath = path.join(__dirname, 'stitch_index.html');
const appVuePath = path.join(__dirname, 'src', 'App.vue');

try {
  const htmlContent = fs.readFileSync(originalHtmlPath, 'utf8');
  
  const bodyStartIdx = htmlContent.indexOf('<body');
  const bodyTagCloseIdx = htmlContent.indexOf('>', bodyStartIdx);
  const bodyEndIdx = htmlContent.lastIndexOf('</body>');
  
  if (bodyStartIdx !== -1 && bodyEndIdx !== -1) {
    const innerBody = htmlContent.substring(bodyTagCloseIdx + 1, bodyEndIdx).trim();
    
    const vueTemplate = `<template>
  <div>
${innerBody}
  </div>
</template>

<script setup>
</script>
`;
    fs.mkdirSync(path.join(__dirname, 'src'), { recursive: true });
    fs.writeFileSync(appVuePath, vueTemplate, 'utf8');
    console.log('App.vue generated successfully.');
  } else {
    console.error('Could not find <body> tags in stitch_index.html');
  }
} catch (e) {
  console.error(e);
}
