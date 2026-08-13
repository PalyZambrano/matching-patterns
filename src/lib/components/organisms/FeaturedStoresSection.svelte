<script lang="ts">
	import SectionHeading from '$lib/components/molecules/SectionHeading.svelte';
	import { featuredStores } from '$lib/data/home';
	let active = $state('All Materials');
	const filters = ['All Materials', 'Denim', 'Velvet', 'Cotton'];
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
					class="min-h-9 rounded-full border border-black px-5 py-2 text-xs font-bold {active ===
					filter
						? 'border-transparent bg-brand-soft text-white shadow-md'
						: 'bg-white text-black'}">{filter}</button
				>
			{/each}
		</div>
		<div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
			{#each featuredStores.slice(0, 3) as store}
				<article>
					<div
						class="aspect-[1.35] w-full [mask-image:url('/image-store.png')] bg-cover bg-center [mask-size:100%_100%] [mask-repeat:no-repeat]"
						style={`background-image:url(${store.img})`}
					></div>
					<h3 class="mt-5 mb-1 text-base font-black text-black">{store.name}</h3>
					<p class="m-0 text-sm text-black">{store.city}, {store.province} - {store.country}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
