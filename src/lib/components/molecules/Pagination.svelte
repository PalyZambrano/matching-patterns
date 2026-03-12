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
	<div class="inline-flex items-center gap-[0.6rem] border-[1.5px] border-brand rounded-full px-4 py-[0.35rem]">
		<button
			onclick={onprev}
			disabled={current <= 1}
			aria-label="Página anterior"
			class="bg-transparent border-none cursor-pointer text-brand text-[1.4rem] leading-none px-[0.1rem] flex items-center disabled:opacity-30 disabled:cursor-default"
		>
			&#8249;
		</button>
		<span class="font-sans text-[0.9rem] text-[#333] min-w-10 text-center">{current}/{total}</span>
		<button
			onclick={onnext}
			disabled={current >= total}
			aria-label="Página siguiente"
			class="bg-transparent border-none cursor-pointer text-brand text-[1.4rem] leading-none px-[0.1rem] flex items-center disabled:opacity-30 disabled:cursor-default"
		>
			&#8250;
		</button>
	</div>
</nav>
