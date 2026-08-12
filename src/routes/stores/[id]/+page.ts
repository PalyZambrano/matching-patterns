import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Store } from '$lib/types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch('/stores');
	const stores: Store[] = await response.json();
	const store = stores.find((candidate) => candidate.id === Number(params.id));
	if (!store) error(404, 'Tienda no encontrada');
	return { store };
};
