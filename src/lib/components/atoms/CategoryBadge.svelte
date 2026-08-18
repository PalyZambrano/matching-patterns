<script lang="ts">
	import type { Category } from '$lib/types';

	let { label, category }: { label: string; category: Category } = $props();

	const categoryClasses: Record<Category, string> = {
		telas: 'border-brand-soft bg-brand-soft text-white',
		merceria: 'border-[#5278dc] bg-[#5278dc] text-white',
		estampados: 'border-[#d84a6f] bg-[#d84a6f] text-white'
	};
</script>

<span
	class="inline-flex min-h-7 items-center border px-3.5 py-1 text-[0.78rem] leading-none font-black whitespace-nowrap uppercase {categoryClasses[
		category
	]}"
>
	{label}
</span>
