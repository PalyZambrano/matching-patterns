<script lang="ts">
	import StoreCard from '$lib/components/molecules/StoreCard.svelte';
	import type { Store } from '$lib/types';

	let { stores }: { stores: Store[] } = $props();
</script>

<div class="grid grid-cols-4 gap-6">
	{#each stores as store (store.id)}
		<StoreCard {store} />
	{/each}
	{#if stores.length === 0}
		<p class="col-span-full text-center text-[#666] font-sans py-8">No se encontraron tiendas.</p>
	{/if}
</div>
