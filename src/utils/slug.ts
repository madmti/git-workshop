export function slugify(str: string): string {
	return str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // elimina diacríticos (tildes, ñ, etc)
		.replace(/[^a-z0-9\s-]/g, '') // elimina caracteres especiales
		.trim()
		.replace(/\s+/g, '-') // espacios a guiones
		.replace(/-+/g, '-'); // colapsa guiones múltiples
}
