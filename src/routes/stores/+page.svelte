<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import CategoryFilter from '$lib/components/organisms/CategoryFilter.svelte';
	import SearchBar from '$lib/components/organisms/SearchBar.svelte';
	import StoreGrid from '$lib/components/organisms/StoreGrid.svelte';
	import Pagination from '$lib/components/molecules/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { includesNormalized } from '$lib/search';
	import type { PageData } from './$types';
	import type { Category, Store } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const PAGE_SIZE = 16;

	let activeCategory = $state<Category>('telas');
	let filterPais = $state('');
	let filterProvincia = $state('');
	let filterCiudad = $state('');
	let searchTerm = $state('');
	let currentPage = $state(1);

	$effect(() => {
		filterCiudad = data.initialCiudad;
	});

	let filtered = $derived(
		(data.stores as Store[]).filter((s) => {
			if (!s.categories.includes(activeCategory)) return false;
			if (
				searchTerm &&
				!includesNormalized(`${s.country} ${s.province} ${s.city}`, searchTerm)
			)
				return false;
			if (filterPais && !includesNormalized(s.country, filterPais)) return false;
			if (filterProvincia && !includesNormalized(s.province, filterProvincia)) return false;
			if (filterCiudad && !includesNormalized(s.city, filterCiudad)) return false;
			return true;
		})
	);

	let totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)));

	let paginated = $derived(filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE));

	function setCategory(cat: Category) {
		activeCategory = cat;
		currentPage = 1;
	}

	function handleSearch(query: string) {
		searchTerm = query;
		filterPais = '';
		filterProvincia = '';
		filterCiudad = '';
		currentPage = 1;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet" />
	<title>Explorar Tiendas — Matching Patterns</title>
</svelte:head>

<Header variant="light" />

<main
	class="mx-auto flex min-h-[calc(100vh-108px)] max-w-[1440px] flex-col gap-8 bg-white px-5 pt-12 pb-12 md:px-10 md:pt-18"
>
	<section>
		<h1 class="m-0 text-[clamp(1.9rem,3vw,2.5rem)] leading-tight font-black text-black">
			Explorar Tiendas
		</h1>
		<p class="mt-2 mb-2 text-base  text-black/55">
			Este atlas reúne proveedores recomendados por la comunidad.
		</p>
	</section>

	<section class="flex w-full flex-col gap-4">
		<SearchBar onsearch={handleSearch} />
		<CategoryFilter active={activeCategory} onchange={setCategory} />
	</section>

	<section class="flex-1 pt-16 md:pt-20">
		<StoreGrid stores={paginated} />
	</section>

	<Pagination
		current={currentPage}
		total={totalPages}
		onprev={() => (currentPage -= 1)}
		onnext={() => (currentPage += 1)}
	/>
</main>
<Footer />
