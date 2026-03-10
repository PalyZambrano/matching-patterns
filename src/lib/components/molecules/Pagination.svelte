<script lang="ts">
	let {
		current,
		total,
		onprev,
		onnext
	}: {
		current: number;
		total: number;
		onprev: () => void;
		onnext: () => void;
	} = $props();
</script>

<nav class="pagination" aria-label="Paginación">
	<div class="pill">
		<button onclick={onprev} disabled={current <= 1} aria-label="Página anterior">
			&#8249;
		</button>
		<span class="indicator">{current}/{total}</span>
		<button onclick={onnext} disabled={current >= total} aria-label="Página siguiente">
			&#8250;
		</button>
	</div>
</nav>

<style>
	.pagination {
		display: flex;
		justify-content: center;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		border: 1.5px solid #c1001c;
		border-radius: 999px;
		padding: 0.35rem 1rem;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
		color: #c1001c;
		font-size: 1.4rem;
		line-height: 1;
		padding: 0 0.1rem;
		display: flex;
		align-items: center;
	}

	button:disabled {
		opacity: 0.3;
		cursor: default;
	}

	.indicator {
		font-family: system-ui, sans-serif;
		font-size: 0.9rem;
		color: #333;
		min-width: 2.5rem;
		text-align: center;
	}
</style>
