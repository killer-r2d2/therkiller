import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*',
			schema: z.object({
				title: z.string().optional(),
				description: z.string().optional(),

				// Home page (content/index.md)
				profileImage: z.string().optional(),

				// Blog posts (content/blog/*.md)
				image: z.string().optional(),
				author: z.string().optional(),
				dates: z
					.object({
						published: z.string().optional(),
					})
					.optional(),
				tags: z.string().optional(),

				// Projects (content/projects/*.md)
				url: z.string().url().optional(),
				technologies: z.array(z.string()).optional(),
				projectOrder: z.number().int().positive().optional(),
			}),
		}),
	},
});

