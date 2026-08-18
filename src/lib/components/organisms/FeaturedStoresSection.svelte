<script lang="ts">
	import SectionHeading from '$lib/components/molecules/SectionHeading.svelte';
	import StoreMedia from '$lib/components/molecules/StoreMedia.svelte';
	import { featuredStores } from '$lib/data/home';
	let active = $state('All Materials');
	const filters = ['All Materials', 'Denim', 'Velvet', 'Cotton'];
	let filteredStores = $derived(
		active === 'All Materials'
			? featuredStores
			: featuredStores.filter((store) => store.materials?.includes(active))
	);
</script>

<section id="tiendas" class="scroll-mt-20 bg-white px-5 py-18 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1440px]">
		<SectionHeading
			title="Tiendas destacadas"
			description="Destinos textiles cuidadosamente seleccionados, conocidos por su calidad, experiencia y selección única."
		/>
		<div class="mt-8 flex flex-wrap gap-3">
			{#each filters as filter}
				<button
					onclick={() => (active = filter)}
					aria-pressed={active === filter}
					class="min-h-9 rounded-full border border-black px-5 py-2 text-xs font-bold {active ===
					filter
						? 'border-transparent bg-brand-soft text-white shadow-md'
						: 'bg-white text-black'}">{filter}</button
				>
			{/each}
		</div>
		<div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
			{#each filteredStores.slice(0, 3) as store}
				<a
					href={`/stores/${store.id}`}
					class="block text-black no-underline outline-none transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-soft"
				>
					<StoreMedia name={store.name} img={store.img} aspectClass="aspect-[1.35]" />
					<h3 class="mt-5 mb-1 text-base font-black text-black">{store.name}</h3>
					<p class="m-0 text-sm text-black">{store.city}, {store.province} - {store.country}</p>
				</a>
			{/each}
			{#if filteredStores.length === 0}
				<p class="col-span-full m-0 text-base text-black/55">
					No hay tiendas destacadas para este material todavía.
				</p>
			{/if}
		</div>
	</div>
</section>
