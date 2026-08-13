<script lang="ts">
	const illustrations = [
		{ src: '/svg/tijeras.svg', class: 'right-[10%] top-[8%] h-28 rotate-12 md:h-52', delay: '0ms' },
		{
			src: '/svg/bobina.svg',
			class: 'right-[32%] top-[25%] h-12 rotate-12 md:h-18',
			delay: '420ms'
		},
		{
			src: '/svg/bobina.svg',
			class: 'right-[3%] top-[34%] h-10 -rotate-12 md:h-16',
			delay: '760ms'
		},
		{ src: '/svg/tela.svg', class: 'right-[25%] top-[38%] h-20  rotate-6 md:h-36', delay: '220ms' },
		{
			src: '/svg/maniqui.svg',
			class: 'right-[7%] bottom-[4%] h-36 rotate-6 md:h-56',
			delay: '560ms'
		},
		{ src: '/svg/boton.svg', class: 'right-[16%] top-[47%] h-8 md:h-12', delay: '940ms' },
		{ src: '/svg/boton.svg', class: 'right-[21%] top-[55%] h-6 md:h-9', delay: '1160ms' },
		{
			src: '/svg/enhebrador.svg',
			class: 'right-[39%] bottom-[30%] h-7 -rotate-12 md:h-12',
			delay: '680ms'
		},
		{
			src: '/svg/desenhebrador.svg',
			class: 'right-[40%] bottom-[15%] h-10 -rotate-45 md:h-18',
			delay: '840ms'
		},
		{
			src: '/svg/alfiletero.svg',
			class: 'right-[28%] bottom-[8%] h-14 -rotate-12 md:h-24',
			delay: '1040ms'
		},
		{
			src: '/svg/gancho.svg',
			class: 'right-[18%] bottom-[25%] h-10 rotate-12 md:h-16',
			delay: '1280ms'
		}
	];
</script>

<section
	class="relative isolate overflow-hidden bg-brand-soft px-5 py-14 text-white md:min-h-[500px] md:px-10 md:py-16"
>
	{#each illustrations as illustration}
		<img
			src={illustration.src}
			alt=""
			style={`--fall-delay: ${illustration.delay}`}
			class="hero-illustration pointer-events-none absolute hidden brightness-0 invert md:block {illustration.class}"
		/>
	{/each}
	<div class="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start text-left">
		<p
			class="mb-5 rounded-full border border-white/70 px-3 py-1.5 text-xs font-bold tracking-[0.16em]"
		>
			DISCOVER FABRIC STORES
		</p>
		<h1
			class="m-0 max-w-3xl font-display text-[clamp(4rem,100vw,7rem)] leading-[0.78] uppercase md:text-[clamp(4rem,20vw,12rem)]"
		>
			Matching<br />Patterns
		</h1>
		<p class="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-base">
			Explora tiendas de telas selectas en ciudades de todo el mundo. Conecta con artesanos,
			descubre materiales únicos y da vida a tu visión creativa.
		</p>
		<div class="mt-7 flex flex-wrap gap-4">
			<a
				class="relative block h-20 w-56 bg-white [mask-image:url('/svg/bttn-manga.svg')] [mask-size:100%_100%] [mask-position:center] [mask-repeat:no-repeat] text-sm font-bold text-brand-soft no-underline"
				href="#tiendas"
				><span class="absolute inset-x-0 bottom-3 text-center">⟵　Explorar　⟶</span></a
			>
			<a
				class="relative block h-20 w-56 bg-brand/35 [mask-image:url('/svg/bttn-manga.svg')] [mask-size:100%_100%] [mask-position:center] [mask-repeat:no-repeat] text-sm font-bold text-white no-underline"
				href="#ciudades"
				><span class="absolute inset-x-0 bottom-3 text-center">⟵　Ciudades　⟶</span></a
			>
		</div>
	</div>
</section>

<style>
	.hero-illustration {
		animation: fall-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
		animation-delay: var(--fall-delay);
		transform-origin: center;
	}

	@keyframes fall-in {
		from {
			opacity: 0;
			translate: 0 -140px;
		}

		70% {
			opacity: 1;
			translate: 0 8px;
		}

		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-illustration {
			animation: none;
		}
	}
</style>
