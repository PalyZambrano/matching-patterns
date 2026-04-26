<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		variant = 'filled',
		type = 'button',
		onclick,
		children
	}: {
		variant?: 'filled' | 'outlined';
		type?: 'button' | 'submit';
		onclick?: () => void;
		children?: Snippet;
	} = $props();
</script>

<button
	{type}
	{onclick}
	class="cursor-pointer rounded-[3px] px-[1.4rem] py-[0.55rem] font-sans text-[0.9rem] font-semibold whitespace-nowrap transition-opacity duration-150 hover:opacity-[0.88] {variant ===
	'filled'
		? 'border-none bg-brand text-white'
		: 'border-[1.5px] border-brand bg-transparent text-brand'}"
>
	{@render children?.()}
</button>
