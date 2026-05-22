// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://madmti.github.io',
	base: '/git-workshop',
	compressHTML: true,
	trailingSlash: 'always',
	integrations: [sitemap(), mdx()],
	vite: {
		plugins: [tailwindcss()]
	}
});
