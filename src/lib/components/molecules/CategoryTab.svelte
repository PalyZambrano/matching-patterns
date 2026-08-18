<script lang="ts">
	import type { Category } from '$lib/types';

	let {
		id,
		label,
		active = false,
		onclick
	}: {
		id: Category;
		label: string;
		active?: boolean;
		onclick?: () => void;
	} = $props();
</script>

<button
	class="inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-full border border-brand-soft py-1 pr-6 pl-3 transition-colors duration-150 {active
		? 'bg-brand-soft text-white'
		: 'bg-white text-black'}"
	{onclick}
	aria-pressed={active}
>
	<span
		class="h-8 w-8 shrink-0 bg-brand-soft {active
			? 'bg-white'
			: 'bg-brand-soft'} [mask-image:var(--category-icon)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
		style="--category-icon: url('/svg/{id === 'telas'
			? 'tela'
			: id === 'merceria'
				? 'alfiletero'
				: 'estampa'}.svg')"
		aria-hidden="true"
	></span>
	<span class="text-[0.95rem] font-black">{label}</span>
</button>
