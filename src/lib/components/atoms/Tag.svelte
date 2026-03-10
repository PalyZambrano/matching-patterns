<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span class="tag">{label}</span>

<style>
	.tag {
		display: inline-block;
		background-color: #c1001c;
		color: white;
		font-family: system-ui, sans-serif;
		font-size: 0.8rem;
		padding: 0.2rem 0.85rem;
		border-radius: 999px;
		white-space: nowrap;
	}
</style>
