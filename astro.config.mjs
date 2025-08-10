import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://brenoalcantara.github.io",
  base: 'brenoalcantara.dev.br',
  integrations: [tailwind(), icon({customIconsDir: 'src/icons',}), mdx(), sitemap()]
});