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
	class="w-full rounded-[3px] border border-brand bg-white px-[0.9rem] py-[0.55rem] font-sans text-[0.9rem] text-[#111] outline-none placeholder:text-[#aaa] focus:shadow-[0_0_0_2px_#c1001c33]"
/>
