<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		variant = 'filled',
		type = 'button',
		onclick,
		children
	}: {
		variant?: 'filled' | 'outlined' | 'light';
		type?: 'button' | 'submit';
		onclick?: () => void;
		children?: Snippet;
	} = $props();
</script>

<button
	{type}
	{onclick}
	class="min-h-11 cursor-pointer rounded-full px-6 py-2.5 font-sans text-sm font-bold whitespace-nowrap transition-opacity duration-150 hover:opacity-[0.88] {variant ===
	'filled'
		? 'border-none bg-brand-soft text-white'
		: variant === 'light'
			? 'border border-white bg-white text-brand'
			: 'border-[1.5px] border-brand bg-transparent text-brand'}"
>
	{@render children?.()}
</button>
