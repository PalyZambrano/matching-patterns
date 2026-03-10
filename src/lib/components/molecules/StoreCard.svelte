<script lang="ts">
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { Store } from '$lib/types';

	let { store }: { store: Store } = $props();

	const fullAddress = `${store.address}, ${store.city}, ${store.province} - ${store.country}`;
</script>

<article class="card">
	<div class="image-wrap">
		<!-- Image placeholder (replaces store illustration) -->
		<div class="image-placeholder" aria-label="Foto de la tienda"></div>
		{#if store.studentDiscount}
			<div class="badge-anchor">
				<Badge />
			</div>
		{/if}
	</div>
	<div class="body">
		<h2 class="name">{store.name}</h2>
		<p class="address">{fullAddress}</p>
		<div class="tags">
			{#each store.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</article>

<style>
	.card {
		border: 1.5px solid #c1001c;
		border-radius: 4px;
		overflow: visible;
		background: white;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.image-wrap {
		position: relative;
	}

	.image-placeholder {
		width: 100%;
		aspect-ratio: 4 / 3;
		background-color: #e0dbd5;
	}

	.badge-anchor {
		position: absolute;
		top: -16px;
		right: -16px;
		z-index: 1;
	}

	.body {
		padding: 0.75rem 0.85rem 0.85rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.name {
		font-family: 'Barlow Condensed', Impact, 'Arial Narrow', sans-serif;
		font-weight: 900;
		font-size: 1rem;
		color: #c1001c;
		margin: 0;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.address {
		font-family: system-ui, sans-serif;
		font-size: 0.85rem;
		color: #222;
		margin: 0;
		line-height: 1.45;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 0.2rem;
	}
</style>
