<script lang="ts">
	import SectionHeading from '$lib/components/molecules/SectionHeading.svelte';
	import CityGrid from '$lib/components/organisms/CityGrid.svelte';
	import type { City } from '$lib/types';

	let { cities }: { cities: City[] } = $props();
</script>

<section id="ciudades" class="scroll-mt-20 bg-white px-5 py-22 md:px-10 md:py-28">
	<div class="mx-auto max-w-[1440px]">
		<SectionHeading
			centered
			eyebrow="La comunidad se cose localmente"
			title="Explora por ciudad"
			description="Descubre las tiendas y recursos que tienes más cerca."
		/>
		<div class="mt-12"><CityGrid {cities} /></div>
	</div>
</section>
