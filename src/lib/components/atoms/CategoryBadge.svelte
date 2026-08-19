<script lang="ts">
	import type { Category } from '$lib/types';

	let { label, category }: { label: string; category: Category } = $props();

	const categoryClasses: Record<Category, string> = {
		telas: 'bg-brand-soft/70 text-[#173B64]',
		merceria: 'bg-[#173B64] text-brand-soft',
		estampados: 'bg-[#FFDE7070] text-brand'
	};
</script>

<span
	class="rounded-full items-center px-4 py-2  text-[0.70rem] font-bold uppercase {categoryClasses[
		category
	]}"
>
	{label}
</span>
