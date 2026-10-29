import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const clases = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/clases' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		orden: z.number(),
		label: z.string(),
		duracion: z.string(),
		dificultad: z.enum(['facil', 'media', 'dificil']),
		recursos: z
			.array(
				z.object({
					titulo: z.string(),
					url: z.url()
				})
			)
			.optional(),
		draft: z.boolean().default(false)
	})
});

const ejercicios = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/ejercicios' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		clase: z.string(),
		badge: z.string(),
		link: z.string(),
		label: z.string().optional(),
		tipo: z.enum(['kahoot', 'targz', 'url']),
		orden: z.number(),
		draft: z.boolean().default(false)
	})
});

const certificados = defineCollection({
	loader: file('./src/content/certificados/certificados.json'),
	schema: z.object({
		name: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		hours: z.number(),
		instructor: z.string(),
		certifierUrl: z.url()
	})
});

export const collections = { clases, ejercicios, certificados };
