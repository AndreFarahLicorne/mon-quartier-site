// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mon-quartier-site-r8e7h5bgn-andrefarah-9351s-projects.vercel.app',
    integrations: [sitemap()],
    compressHTML: true,
});
