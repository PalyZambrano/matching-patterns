<script lang="ts">
	let {
		placeholder = '',
		value = $bindable('')
	}: {
		placeholder?: string;
		value?: string;
	} = $props();
</script>

<input type="text" {placeholder} bind:value />

<style>
	input {
		width: 100%;
		padding: 0.55rem 0.9rem;
		border: 1px solid #c1001c;
		border-radius: 3px;
		font-family: system-ui, sans-serif;
		font-size: 0.9rem;
		color: #111;
		background: white;
		outline: none;
	}

	input::placeholder {
		color: #aaa;
	}

	input:focus {
		box-shadow: 0 0 0 2px #c1001c33;
	}
</style>
