// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Introverted Rebel',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/miroslav-matejovsky' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/miroslav-matejovsky/' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
