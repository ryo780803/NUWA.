import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/ryo780803/NUWA..git',
  base: '/nuwa-site/',
  integrations: [tailwind()]
});