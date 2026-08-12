import type { PageLoad } from './$types';
import type { Store } from '$lib/types';

export const load: PageLoad = async ({ fetch, url }) => {
	const res = await fetch('/stores');
	const stores: Store[] = await res.json();
	return { stores, initialCiudad: url.searchParams.get('ciudad') ?? '' };
};
