// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Miroslav Matejovsky',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/miroslav-matejovsky' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/miroslav-matejovsky/' }
			],
			sidebar: [
				{
					label: 'Elixir',
					items: [
						// { label: 'First taste', slug: 'elixir/first-taste' },
					],
				},
				{ label: 'Go',
					items: [
						// { label: 'Installers with Embedding', slug: 'go/installers-with-embedding' },
					],
				},
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About Me', slug: 'about/me' },
						// { label: 'Stoic', slug: 'about/about-stoic' },
						// { label: 'This Page', slug: 'about/this-page' },
						// { label: 'CV', slug: 'cv' },
					],
					// autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
