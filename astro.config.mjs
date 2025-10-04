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
					label: 'OTP (Erlang/Elixir)',
					items: [
						{ label: 'First taste of Elixir', slug: 'otp/first-taste-of-elixir' },
					],
				},
				{
					label: 'Go',
					items: [
						// { label: 'Installers with Embedding', slug: 'go/installers-with-embedding' },
					],
				},
				{
					label: '.NET',
					items: [
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
					label: 'Architecture',
					items: [
						{ label: 'Stoic', slug: 'architecture/stoic' },
						{ label: 'D2 Best Practices', slug: 'architecture/d2' },
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'Me', slug: 'about/me' },
						{ label: 'This Page', slug: 'about/this-page' },
						// { label: 'CV', slug: 'cv' },
					],
				},
			],
		}),
	],
});
