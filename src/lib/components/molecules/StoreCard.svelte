<script lang="ts">
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { Store } from '$lib/types';

	let { store }: { store: Store } = $props();

	const fullAddress = `${store.address}, ${store.city}, ${store.province} - ${store.country}`;
</script>

<article
	class="relative flex flex-col overflow-visible rounded-[4px] border-[1.5px] border-brand/10 bg-neutral-50"
>
	<div class="relative">
		<figure
			class="aspect-4/3 w-full mask-[url(/image-store.png)] bg-cover bg-center bg-no-repeat mask-no-repeat"
			style="background-image: url({store.img})"
			aria-label="Foto de la tienda"
		></figure>
		{#if store.studentDiscount}
			<div class="absolute -top-6 right-2 z-[1]">
				<Badge />
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-[0.35rem] px-[0.85rem] pt-3 pb-[0.85rem]">
		<h2 class="m-0 font-barlow text-base leading-tight font-black text-brand uppercase">
			{store.name}
		</h2>
		<p class="m-0 text-[0.85rem] leading-[1.45] text-[#222]">{fullAddress}</p>
		<div class="mt-[0.2rem] flex flex-wrap gap-[0.4rem]">
			{#each store.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</article>
