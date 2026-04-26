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

<button
	class="inline-flex cursor-pointer items-center gap-[0.6rem] rounded-full border-2 border-brand py-[0.45rem] pr-[1.4rem] pl-[0.45rem] transition-colors duration-150 {active
		? 'bg-brand text-white'
		: 'bg-white text-brand'}"
	{onclick}
	aria-pressed={active}
>
	<span
		class="h-9 w-9 shrink-0 rounded-full {active ? 'bg-white/30' : 'bg-[#e8c0c6]'}"
		aria-hidden="true"
	></span>
	<span class="font-barlow text-base font-black tracking-[0.03em]">{label}</span>
</button>
