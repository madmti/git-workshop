import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const clases = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/clases' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		clase: z.number(),
		duracion: z.string(),
		dificultad: z.enum(['facil', 'media', 'dificil']),
		recursos: z
			.array(
				z.object({
					titulo: z.string(),
					url: z.url(),
				})
			)
			.optional(),
		draft: z.boolean().default(false)
	})
});

export const collections = { clases };
