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

<button class="tab" class:active {onclick} aria-pressed={active}>
	<!-- Icon placeholder (replaces illustration) -->
	<span class="icon-placeholder" aria-hidden="true"></span>
	<span class="label">{label}</span>
</button>

<style>
	.tab {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.45rem 1.4rem 0.45rem 0.45rem;
		border-radius: 999px;
		border: 2px solid #c1001c;
		background: white;
		color: #c1001c;
		cursor: pointer;
		transition:
			background 0.15s,
			color 0.15s;
	}

	.tab.active {
		background: #c1001c;
		color: white;
	}

	.icon-placeholder {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #e8c0c6;
		flex-shrink: 0;
	}

	.tab.active .icon-placeholder {
		background: rgba(255 255 255 / 0.3);
	}

	.label {
		font-family: 'Barlow Condensed', Impact, 'Arial Narrow', sans-serif;
		font-weight: 900;
		font-size: 1rem;
		letter-spacing: 0.03em;
	}
</style>
