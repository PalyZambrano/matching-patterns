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
	class="w-full px-[0.9rem] py-[0.55rem] border border-brand rounded-[3px] font-sans text-[0.9rem] text-[#111] bg-white outline-none placeholder:text-[#aaa] focus:shadow-[0_0_0_2px_#c1001c33]"
/>
