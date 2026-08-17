import { normalizeSearchValue } from '$lib/search';
import type { City, Store } from '$lib/types';

export function buildCitiesFromStores(stores: Store[], limit = 8): City[] {
	const cityMap = new Map<string, City>();

	for (const store of stores) {
		const cityName = store.city.trim();
		if (!cityName) continue;

		const key = normalizeSearchValue(cityName);
		const existing = cityMap.get(key);

		if (existing) {
			existing.storeCount += 1;
			continue;
		}

		cityMap.set(key, {
			name: cityName,
			storeCount: 1
		});
	}

	return [...cityMap.values()]
		.sort((a, b) => b.storeCount - a.storeCount || a.name.localeCompare(b.name))
		.slice(0, limit);
}
