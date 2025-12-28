// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://miroslav-matejovsky.github.io',
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
					label: 'Architecture',
					items: [
						{ label: 'Complexity', slug: 'architecture/complexity' },
						{ label: 'Coupling', slug: 'architecture/coupling' },
						{ label: 'Backlog', slug: 'architecture/backlog' },
						{ label: 'Koans', slug: 'architecture/koans' },
						{ label: 'D2', slug: 'architecture/d2' },
					],
				},
				{
					label: 'OTP (Erlang/Elixir)',
					items: [
						{ label: 'First taste of Elixir', slug: 'otp/first-taste-of-elixir' },
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
						{ label: 'Me', slug: 'index' },
						{ label: 'Stoicism', slug: 'about/stoicism' },
						{ label: 'LLMs', slug: 'about/llms' },
						{ label: 'This Page', slug: 'about/this-page' },
					],
				},
			],
		}),
	],
});
