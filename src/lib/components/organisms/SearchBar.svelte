<script lang="ts">
	import TextInput from '$lib/components/atoms/TextInput.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	let {
		onsearch
	}: {
		onsearch: (query: string) => void;
	} = $props();

	let query = $state('');

	function handleSearch() {
		onsearch(query);
	}
</script>

<form
	class="flex w-full md:max-w-[820px] flex-col gap-2 md:flex-row md:items-center"
	onsubmit={(e) => {
		e.preventDefault();
		handleSearch();
	}}
>
	<div class="flex-1"><TextInput placeholder="Buscar por ciudad o País" bind:value={query} /></div>
	<Button type="submit">Buscar tiendas</Button>
</form>
