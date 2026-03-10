<script lang="ts">
	import StoreCard from '$lib/components/molecules/StoreCard.svelte';
	import type { Store } from '$lib/types';

	let { stores }: { stores: Store[] } = $props();
</script>

<div class="grid">
	{#each stores as store (store.id)}
		<StoreCard {store} />
	{/each}
	{#if stores.length === 0}
		<p class="empty">No se encontraron tiendas.</p>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.empty {
		grid-column: 1 / -1;
		text-align: center;
		color: #666;
		font-family: system-ui, sans-serif;
		padding: 2rem 0;
	}
</style>
