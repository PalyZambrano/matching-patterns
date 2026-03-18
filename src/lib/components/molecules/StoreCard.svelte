<script lang="ts">
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { Store } from '$lib/types';

	let { store }: { store: Store } = $props();

	const fullAddress = `${store.address}, ${store.city}, ${store.province} - ${store.country}`;
</script>

<article class="border-[1.5px] border-brand/10 rounded-[4px] overflow-visible bg-neutral-50 flex flex-col relative ">
	<div class="relative">
		<figure class="mask-no-repeat w-full aspect-4/3 mask-[url(/image-store.png)] bg-[url(/test-image.png)] bg-cover   bg-no-repeat bg-center " aria-label="Foto de la tienda">
		</figure>
		{#if store.studentDiscount}
			<div class="absolute -top-6 right-2  z-[1]">
				<Badge />
			</div>
		{/if}
	</div>
	<div class="pt-3 px-[0.85rem] pb-[0.85rem] flex flex-col gap-[0.35rem]">
		<h2 class="font-barlow font-black text-base text-brand m-0 leading-tight uppercase">{store.name}</h2>
		<p class="text-[0.85rem] text-[#222] m-0 leading-[1.45]">{fullAddress}</p>
		<div class="flex flex-wrap gap-[0.4rem] mt-[0.2rem]">
			{#each store.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</article>
