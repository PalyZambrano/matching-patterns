<script lang="ts">
	import TextInput from '$lib/components/atoms/TextInput.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	let {
		onsearch
	}: {
		onsearch: (filters: { pais: string; provincia: string; ciudad: string }) => void;
	} = $props();

	let pais = $state('');
	let provincia = $state('');
	let ciudad = $state('');

	function handleSearch() {
		onsearch({ pais, provincia, ciudad });
	}
</script>

<form class="searchbar" onsubmit={(e) => { e.preventDefault(); handleSearch(); }}>
	<div class="field"><TextInput placeholder="País" bind:value={pais} /></div>
	<div class="field"><TextInput placeholder="Provincia / Región" bind:value={provincia} /></div>
	<div class="field"><TextInput placeholder="Ciudad / Localidad" bind:value={ciudad} /></div>
	<Button type="submit">Buscar tiendas</Button>
</form>

<style>
	.searchbar {
		display: flex;
		gap: 0.6rem;
		align-items: center;
	}

	.field {
		flex: 1;
	}
</style>
