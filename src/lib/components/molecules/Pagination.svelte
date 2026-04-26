<script lang="ts">
	let {
		current,
		total,
		onprev,
		onnext
	}: {
		current: number;
		total: number;
		onprev: () => void;
		onnext: () => void;
	} = $props();
</script>

<nav class="flex justify-center" aria-label="Paginación">
	<div
		class="inline-flex items-center gap-[0.6rem] rounded-full border-[1.5px] border-brand px-4 py-[0.35rem]"
	>
		<button
			onclick={onprev}
			disabled={current <= 1}
			aria-label="Página anterior"
			class="flex cursor-pointer items-center border-none bg-transparent px-[0.1rem] text-[1.4rem] leading-none text-brand disabled:cursor-default disabled:opacity-30"
		>
			&#8249;
		</button>
		<span class="min-w-10 text-center font-sans text-[0.9rem] text-[#333]">{current}/{total}</span>
		<button
			onclick={onnext}
			disabled={current >= total}
			aria-label="Página siguiente"
			class="flex cursor-pointer items-center border-none bg-transparent px-[0.1rem] text-[1.4rem] leading-none text-brand disabled:cursor-default disabled:opacity-30"
		>
			&#8250;
		</button>
	</div>
</nav>
