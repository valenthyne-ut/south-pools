import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'South Pools',
	tagline: 'Piscinas Sempre Cristalinas',
	favicon: 'img/favicon.ico',
	
	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},
	
	// Set the production url of your site here
	url: 'https://github.com/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/south-pools',
	
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'valenthyne-ut', // Usually your GitHub org/user name.
	projectName: 'south-pools', // Usually your repo name.
	deploymentBranch: "gh-pages",
	trailingSlash: false,

	onBrokenLinks: 'throw',
	
	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'pt-PT',
		locales: ['pt-PT'],
	},
	
	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],
	
	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: 'South Pools',
			logo: {
				alt: 'South Pools Logo',
				src: 'img/logo.svg',
			},
			items: [
				{to: '/blog', label: 'Blog', position: 'left'},
				{
					href: 'https://valenthyne-ut.github.io/south-pools/blog',
					label: 'South Pools',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/valenthyne-ut/south-pools/',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} South Pools, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
