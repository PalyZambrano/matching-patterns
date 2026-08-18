import { error } from '@sveltejs/kit';
import { normalizeSearchValue } from '$lib/search';
import type { PageLoad } from './$types';
import type { Store } from '$lib/types';

const RELATED_STORES_LIMIT = 4;

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch('/stores');
	const stores: Store[] = await response.json();
	const store = stores.find((candidate) => candidate.id === Number(params.id));
	if (!store) error(404, 'Tienda no encontrada');
	const relatedStores = stores
		.filter(
			(candidate) =>
				candidate.id !== store.id &&
				normalizeSearchValue(candidate.city) === normalizeSearchValue(store.city)
		)
		.slice(0, RELATED_STORES_LIMIT);

	return { store, relatedStores };
};
