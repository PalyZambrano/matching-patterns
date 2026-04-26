<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import CategoryFilter from '$lib/components/organisms/CategoryFilter.svelte';
	import SearchBar from '$lib/components/organisms/SearchBar.svelte';
	import StoreGrid from '$lib/components/organisms/StoreGrid.svelte';
	import Pagination from '$lib/components/molecules/Pagination.svelte';
	import type { PageData } from './$types';
	import type { Category, Store } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const PAGE_SIZE = 4;

	let activeCategory = $state<Category>('telas');
	let filterPais = $state('');
	let filterProvincia = $state('');
	let filterCiudad = $state('');
	let currentPage = $state(1);

	let filtered = $derived(
		(data.stores as Store[]).filter((s) => {
			if (s.category !== activeCategory) return false;
			if (filterPais && !s.country.toLowerCase().includes(filterPais.toLowerCase())) return false;
			if (filterProvincia && !s.province.toLowerCase().includes(filterProvincia.toLowerCase()))
				return false;
			if (filterCiudad && !s.city.toLowerCase().includes(filterCiudad.toLowerCase())) return false;
			return true;
		})
	);

	let totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)));

	let paginated = $derived(filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE));

	function setCategory(cat: Category) {
		activeCategory = cat;
		currentPage = 1;
	}

	function handleSearch(filters: { pais: string; provincia: string; ciudad: string }) {
		filterPais = filters.pais;
		filterProvincia = filters.provincia;
		filterCiudad = filters.ciudad;
		currentPage = 1;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet" />
	<title>Explorar Tiendas — Matching Patterns</title>
</svelte:head>

<Header />

<main class="flex min-h-[calc(100vh-56px)] flex-col gap-8 bg-neutral-50 px-16 pt-12 pb-16">
	<h1
		class="m-0 text-center font-barlow text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.01em] text-brand uppercase"
	>
		Explorar Tiendas
	</h1>

	<section class="mx-auto flex w-full max-w-[860px] flex-col gap-4">
		<CategoryFilter active={activeCategory} onchange={setCategory} />
		<SearchBar onsearch={handleSearch} />
	</section>

	<section class="flex-1">
		<StoreGrid stores={paginated} />
	</section>

	<Pagination
		current={currentPage}
		total={totalPages}
		onprev={() => (currentPage -= 1)}
		onnext={() => (currentPage += 1)}
	/>
</main>
