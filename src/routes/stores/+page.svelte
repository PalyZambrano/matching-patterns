<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import CategoryFilter from '$lib/components/organisms/CategoryFilter.svelte';
	import SearchBar from '$lib/components/organisms/SearchBar.svelte';
	import StoreGrid from '$lib/components/organisms/StoreGrid.svelte';
	import Pagination from '$lib/components/molecules/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';
	import type { Category, Store } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const PAGE_SIZE = 4;

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
			if (s.category !== activeCategory) return false;
			if (searchTerm && !`${s.country} ${s.province} ${s.city}`.toLowerCase().includes(searchTerm.toLowerCase())) return false;
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

<main class="mx-auto flex min-h-[calc(100vh-108px)] max-w-[1440px] flex-col gap-8 bg-white px-5 pt-12 pb-12 md:px-10 md:pt-18">
	<section>
		<h1 class="m-0 text-[clamp(2.4rem,4vw,3.45rem)] leading-none font-black text-black">Explorar Tiendas</h1>
		<p class="mt-2 mb-5 text-lg text-black/55">Este atlas reúne proveedores recomendados por la comunidad.</p>
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
