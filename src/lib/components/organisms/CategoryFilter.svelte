<script lang="ts">
	import CategoryTab from '$lib/components/molecules/CategoryTab.svelte';
	import type { Category } from '$lib/types';

	let {
		active,
		onchange
	}: {
		active: Category;
		onchange: (cat: Category) => void;
	} = $props();

	const categories: { id: Category; label: string }[] = [
		{ id: 'telas', label: 'Telas' },
		{ id: 'merceria', label: 'Mercería' },
		{ id: 'estampados', label: 'Estampados' }
	];
</script>

<div class="flex flex-wrap justify-start gap-4" role="group" aria-label="Categoría de tienda">
	{#each categories as cat}
		<CategoryTab
			id={cat.id}
			label={cat.label}
			active={active === cat.id}
			onclick={() => onchange(cat.id)}
		/>
	{/each}
</div>
