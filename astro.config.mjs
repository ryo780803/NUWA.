import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ryo780803.github.io',
  base: '/NUWA/',
  integrations: [tailwind()]
});