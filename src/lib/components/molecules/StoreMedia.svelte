<script lang="ts">
	let {
		name,
		img,
		aspectClass = 'aspect-4/3'
	}: {
		name: string;
		img?: string | null;
		aspectClass?: string;
	} = $props();

	let hasPhoto = $derived(Boolean(img && img !== '/test-image.png'));
</script>

{#if hasPhoto}
	<figure
		class="{aspectClass} m-0 w-full overflow-hidden mask-[url(/image-store.png)] bg-cover bg-center bg-no-repeat mask-no-repeat [mask-size:100%_100%]"
		style="background-image: url({img})"
		aria-label={`Foto de ${name}`}
	></figure>
{:else}
	<figure
		class="{aspectClass} m-0 flex w-full items-center justify-center overflow-hidden mask-[url(/image-store.png)] bg-brand-soft px-8 pt-16 pr-20 text-center mask-no-repeat [mask-size:100%_100%]"
		aria-label={`Sin foto de ${name}`}
	>
		<span class="max-w-[16rem] text-base leading-tight font-black text-white md:text-lg">{name}</span>
	</figure>
{/if}
