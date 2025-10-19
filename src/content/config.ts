import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			image: z.object({
				source: image(),
				alt: z.string(),
			}).optional(),
			tags: z.array(z.string()).optional(),
			author: z.object({
				name: z.string(),
				link: z.string().optional(),
			}),
		}),
});

const projects = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			link: z.string().url(),
			image: z.object({
				source: image(),
				alt: z.string(),
			}),
			author: z.object({
				name: z.string(),
				link: z.string().optional(),
			}),
		}),
});

const authors = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			image: z.object({
				source: image(),
				alt: z.string(),
			}).optional(),
		}),
});

export const collections = { posts, projects, authors };