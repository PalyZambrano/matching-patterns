<script lang="ts">
	let {
		placeholder = '',
		value = $bindable('')
	}: {
		placeholder?: string;
		value?: string;
	} = $props();
</script>

<input
	type="text"
	{placeholder}
	bind:value
	class="min-h-11 w-full rounded-[3px] border border-brand-soft bg-white px-4 py-2.5 font-sans text-sm text-[#111] outline-none placeholder:text-[#999] focus:shadow-[0_0_0_2px_#aec5f2]"
/>
