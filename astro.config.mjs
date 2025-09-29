// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Miroslav Matejovsky',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/miroslav-matejovsky' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/miroslav-matejovsky/' }
			],
			sidebar: [
				{
					label: 'Elixir',
					items: [
						{ label: 'First taste', slug: 'elixir/first-taste' },
					],
				},
				{
					label: 'Go',
					items: [
						// { label: 'Installers with Embedding', slug: 'go/installers-with-embedding' },
					],
				},
				{
					label: 'Windows',
					items: [
						{ label: 'PowerShell Profile', slug: 'windows/powershell-profile' },
						{ label: 'PowerShell Fortunes', slug: 'windows/powershell-fortunes' },
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'Me', slug: 'about/me' },
						{ label: 'This Page', slug: 'about/this-page' },

						// { label: 'Stoic', slug: 'about/about-stoic' },
						// { label: 'CV', slug: 'cv' },
					],
					// autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
