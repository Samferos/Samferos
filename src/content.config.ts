import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/pages/projects" }),
})

export const collections = { projects }