import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const clases = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/clases' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		clase: z.number(),

		// Metadata del taller
		duracion: z.string(),
		dificultad: z.enum(['baja', 'media', 'alta']),
		riesgo: z.enum(['bajo', 'medio', 'alto']),
		enfoque: z.enum(['conceptual', 'practico', 'teorico-practico']),

		// Recursos asociados
		recursos: z
			.array(
				z.object({
					titulo: z.string(),
					url: z.url(),
					tipo: z.enum(['libro', 'articulo', 'video', 'ejercicio'])
				})
			)
			.optional(),

		// Navegación
		draft: z.boolean().default(false)
	})
});

export const collections = { clases };
