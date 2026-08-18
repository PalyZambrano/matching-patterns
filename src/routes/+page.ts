import { buildCitiesFromStores } from '$lib/cities';
import type { Store } from '$lib/types';
import type { PageLoad } from './$types';

const FEATURED_STORE_IDS = [9, 4, 11, 26];

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/stores');
	const stores: Store[] = await response.json();
	const featuredStores = FEATURED_STORE_IDS.map((id) => stores.find((store) => store.id === id)).filter(
		(store): store is Store => Boolean(store)
	);

	return {
		cities: buildCitiesFromStores(stores),
		featuredStores
	};
};
