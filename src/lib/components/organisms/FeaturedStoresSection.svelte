<script lang="ts">
	import SectionHeading from '$lib/components/molecules/SectionHeading.svelte';
	import StoreMedia from '$lib/components/molecules/StoreMedia.svelte';
	import type { Store } from '$lib/types';

	let { stores }: { stores: Store[] } = $props();
</script>

<section id="tiendas" class="scroll-mt-20 bg-white px-5 py-18 md:px-10 md:py-24">
	<div class="mx-auto max-w-[1440px]">
		<SectionHeading
			title="Tiendas destacadas"
			description="Destinos textiles cuidadosamente seleccionados, conocidos por su calidad, experiencia y selección única."
		/>
		<div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-14">
			{#each stores as store}
				<a
					href={`/stores/${store.id}`}
					class="block text-black no-underline outline-none transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-soft"
				>
					<StoreMedia name={store.name} img={store.img} aspectClass="aspect-[1.35]" />
					<h3 class="mt-5 mb-1 text-base font-black text-black">{store.name}</h3>
					<p class="m-0 text-sm text-black">{store.city}, {store.province} - {store.country}</p>
				</a>
			{/each}
			{#if stores.length === 0}
				<p class="col-span-full m-0 text-base text-black/55">
					No hay tiendas destacadas configuradas todavía.
				</p>
			{/if}
		</div>
	</div>
</section>
