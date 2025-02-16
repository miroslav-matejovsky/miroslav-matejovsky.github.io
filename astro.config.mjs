// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://miroslav-matejovsky.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [markdoc()],
});