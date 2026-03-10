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

	let paginated = $derived(
		filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
	);

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
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap"
		rel="stylesheet"
	/>
	<title>Explorar Tiendas — Matching Patterns</title>
</svelte:head>

<Header />

<main>
	<h1>Explorar Tiendas</h1>

	<section class="controls">
		<CategoryFilter active={activeCategory} onchange={setCategory} />
		<SearchBar onsearch={handleSearch} />
	</section>

	<section class="results">
		<StoreGrid stores={paginated} />
	</section>

	<Pagination
		current={currentPage}
		total={totalPages}
		onprev={() => (currentPage -= 1)}
		onnext={() => (currentPage += 1)}
	/>
</main>

<style>
	main {
		background-color: #f0ebe5;
		min-height: calc(100vh - 56px);
		padding: 3rem 4rem 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		font-family: 'Barlow Condensed', Impact, 'Arial Narrow', sans-serif;
		font-weight: 900;
		font-size: clamp(2.5rem, 5vw, 4rem);
		color: #c1001c;
		text-align: center;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: -0.01em;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 860px;
		margin: 0 auto;
		width: 100%;
	}

	.results {
		flex: 1;
	}
</style>
