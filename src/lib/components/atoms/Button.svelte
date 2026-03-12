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
	class="font-sans text-[0.9rem] font-semibold px-[1.4rem] py-[0.55rem] rounded-[3px] cursor-pointer whitespace-nowrap transition-opacity duration-150 hover:opacity-[0.88] {variant === 'filled'
		? 'bg-brand text-white border-none'
		: 'bg-transparent text-brand border-[1.5px] border-brand'}"
>
	{@render children?.()}
</button>
