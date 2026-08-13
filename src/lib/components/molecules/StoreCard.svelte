<script lang="ts">
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { Store } from '$lib/types';

	let { store }: { store: Store } = $props();

	let fullAddress = $derived(
		`${store.address}, ${store.city}, ${store.province} - ${store.country}`
	);
</script>

<a
	href={`/stores/${store.id}`}
	class="relative flex min-h-[390px] flex-col overflow-visible border border-black/6 bg-white p-3 no-underline transition-shadow hover:shadow-md"
>
	<div class="relative">
		<figure
			class="aspect-4/3 w-full mask-[url(/image-store.png)] bg-cover bg-center bg-no-repeat mask-no-repeat"
			style="background-image: url({store.img ?? '/test-image.png'})"
			aria-label="Foto de la tienda"
		></figure>
		{#if store.studentDiscount}
			<div class="absolute -top-6 right-2 z-[1]">
				<Badge />
			</div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col gap-1 px-2 pt-4 pb-3">
		<h2 class="m-0 text-[1rem] leading-tight font-black text-black">
			{store.name}
		</h2>
		<p class="m-0 text-[0.86rem] leading-[1.45] text-[#222]">{fullAddress}</p>
		<div class="mt-auto flex flex-wrap gap-2 pt-6">
			{#each store.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</a>
