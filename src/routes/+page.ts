import { buildCitiesFromStores } from '$lib/cities';
import type { Store } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/stores');
	const stores: Store[] = await response.json();

	return {
		cities: buildCitiesFromStores(stores)
	};
};
