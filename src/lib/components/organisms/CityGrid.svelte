<script lang="ts">
	import CityCard from '$lib/components/molecules/CityCard.svelte';
	import type { City } from '$lib/types';
	let { cities }: { cities: City[] } = $props();
</script>

<div class="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-x-14 md:gap-y-10">
	{#each cities as city (`${city.name}-${city.storeCount}`)}<CityCard {city} />{/each}
</div>
