<script lang="ts">
	import StoreCard from '$lib/components/molecules/StoreCard.svelte';
	import type { Store } from '$lib/types';

	let { stores }: { stores: Store[] } = $props();
</script>

<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
	{#each stores as store (store.id)}
		<StoreCard {store} />
	{/each}
	{#if stores.length === 0}
		<p class="col-span-full py-8 text-center font-sans text-[#666]">No se encontraron tiendas.</p>
	{/if}
</div>
