// Uso: node scripts/sync-certifier.js <export.csv> [--date YYYY-MM-DD] [--hours N] [--year YYYY] [--instructor NOMBRE]
// Lee un CSV exportado desde app.certifier.io y regenera src/content/certificados/certificados.json.
// Conserva los ids de credenciales ya existentes (match por certifierUrl) y NO guarda emails.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'src/content/certificados/certificados.json');

const args = process.argv.slice(2);
const flag = (name, fallback) => {
	const i = args.indexOf(`--${name}`);
	return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const csvPath = args.find((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));

if (!csvPath) {
	console.error('Uso: node scripts/sync-certifier.js <export.csv> [--date YYYY-MM-DD] [--hours N]');
	process.exit(1);
}

const date = flag('date', new Date().toISOString().slice(0, 10));
const hours = Number(flag('hours', '20'));
const instructor = flag('instructor', 'madmti');
const year = flag('year', date.slice(0, 4));

if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(hours)) {
	console.error('--date debe ser YYYY-MM-DD y --hours un número');
	process.exit(1);
}

// Parser CSV mínimo con soporte de comillas, comas y saltos de línea dentro de comillas
function parseCsv(text) {
	const rows = [];
	let row = [];
	let field = '';
	let quoted = false;
	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		if (quoted) {
			if (c === '"' && text[i + 1] === '"') {
				field += '"';
				i++;
			} else if (c === '"') quoted = false;
			else field += c;
		} else if (c === '"') quoted = true;
		else if (c === ',') {
			row.push(field);
			field = '';
		} else if (c === '\n' || c === '\r') {
			if (c === '\r' && text[i + 1] === '\n') i++;
			row.push(field);
			field = '';
			if (row.some((v) => v.trim() !== '')) rows.push(row);
			row = [];
		} else field += c;
	}
	row.push(field);
	if (row.some((v) => v.trim() !== '')) rows.push(row);
	return rows;
}

const [header, ...rows] = parseCsv(readFileSync(resolve(csvPath), 'utf8').replace(/^﻿/, ''));
const col = (...needles) =>
	header.findIndex((h) => needles.some((n) => h.trim().toLowerCase().includes(n)));

const nameCol = col('name', 'nombre');
const urlCol = col('url', 'link', 'credential');

if (nameCol === -1 || urlCol === -1) {
	console.error(`No se encontraron columnas de nombre/URL. Encabezados: ${header.join(', ')}`);
	process.exit(1);
}

const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : [];
const idByUrl = new Map(previous.map((c) => [c.certifierUrl, c.id]));
const prefix = `LYOSS-GIT-${year}-`;
const used = new Set(previous.map((c) => c.id));
let next = 1;
const nextId = () => {
	let id;
	do id = `${prefix}${String(next++).padStart(3, '0')}`;
	while (used.has(id));
	used.add(id);
	return id;
};

const result = rows.map((r) => {
	const certifierUrl = r[urlCol].trim();
	const old = previous.find((c) => c.certifierUrl === certifierUrl);
	return {
		id: idByUrl.get(certifierUrl) ?? nextId(),
		name: r[nameCol].trim(),
		date: old?.date ?? date,
		hours: old?.hours ?? hours,
		instructor: old?.instructor ?? instructor,
		certifierUrl
	};
});

writeFileSync(OUT, JSON.stringify(result, null, '\t') + '\n');
console.log(
	`[OK] ${result.length} certificados escritos en src/content/certificados/certificados.json`
);
