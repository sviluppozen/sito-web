import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	site: "https://sviluppozen.it",
	i18n: {
		defaultLocale: "it",
		locales: ["it", "en"],
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			wrap: true,
			theme: "css-variables",
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		icon(),
	],
});
