export function normalizeSearchValue(value: string) {
	return value
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, '')
		.toLowerCase()
		.trim();
}

export function includesNormalized(value: string, query: string) {
	return normalizeSearchValue(value).includes(normalizeSearchValue(query));
}
