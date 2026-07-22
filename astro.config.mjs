import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.qoppersas.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
