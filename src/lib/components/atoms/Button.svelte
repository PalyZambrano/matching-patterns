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

<button {type} {onclick} class={variant}>
	{@render children?.()}
</button>

<style>
	button {
		font-family: system-ui, sans-serif;
		font-size: 0.9rem;
		font-weight: 600;
		padding: 0.55rem 1.4rem;
		border-radius: 3px;
		cursor: pointer;
		border: none;
		white-space: nowrap;
		transition: opacity 0.15s;
	}

	button:hover {
		opacity: 0.88;
	}

	.filled {
		background-color: #c1001c;
		color: white;
	}

	.outlined {
		background-color: transparent;
		color: #c1001c;
		border: 1.5px solid #c1001c;
	}
</style>
