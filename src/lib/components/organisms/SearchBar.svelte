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

<form
	class="flex items-center gap-[0.6rem]"
	onsubmit={(e) => {
		e.preventDefault();
		handleSearch();
	}}
>
	<div class="flex-1"><TextInput placeholder="País" bind:value={pais} /></div>
	<div class="flex-1"><TextInput placeholder="Provincia / Región" bind:value={provincia} /></div>
	<div class="flex-1"><TextInput placeholder="Ciudad / Localidad" bind:value={ciudad} /></div>
	<Button type="submit">Buscar tiendas</Button>
</form>
