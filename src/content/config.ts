// @ts-ignore
import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const pages = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
	schema: z.object({
		name: z.string(),
		title: z.string(),
		description: z.string(),
		slug: z.string(),
		badges: z.array(z.string()).optional(),
		author: z.string().optional()
	})
})

export const collections = { pages }
