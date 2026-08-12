<script lang="ts">
	let { eyebrow, title, description, centered = false }: { eyebrow?: string; title: string; description?: string; centered?: boolean } = $props();
</script>

<div class:max-w-2xl={!centered} class:mx-auto={centered} class:text-center={centered}>
	{#if eyebrow}<p class="mb-3 text-xs font-bold text-brand uppercase">{eyebrow}</p>{/if}
	<h2 class="m-0 text-[clamp(1.9rem,3vw,2.5rem)] leading-tight font-black text-black">{title}</h2>
	{#if description}<p class="mt-2 mb-0 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">{description}</p>{/if}
</div>
