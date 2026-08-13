<script lang="ts">
	let {
		title,
		description,
		align = 'left'
	}: {
		title: string;
		description: string;
		align?: 'left' | 'right';
	} = $props();
</script>

<article class="flex max-w-[20rem] gap-4 text-left {align === 'right' ? 'md:text-right' : ''}">
	<div
		class="grid h-9 w-9 shrink-0 place-items-center rounded-full {align === 'right'
			? 'md:order-2'
			: ''}"
		aria-hidden="true"
	>
		<span
			class="h-6 w-6 bg-brand-soft [mask-image:url('/svg/boton.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
		></span>
	</div>
	<div>
		<h3 class="m-0 mt-1 text-base leading-tight font-black text-black md:text-base">{title}</h3>
		<p class="mt-2 mb-0 text-[0.95rem] leading-relaxed text-black/70 md:text-sm">{description}</p>
	</div>
</article>
