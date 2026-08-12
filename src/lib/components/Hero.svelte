<script lang="ts">
	const illustrations = [
		{ src: '/svg/tijeras.svg', class: 'right-[10%] top-[8%] h-28 rotate-12 md:h-52' },
		{ src: '/svg/bobina.svg', class: 'right-[32%] top-[37%] h-12 rotate-12 md:h-18' },
		{ src: '/svg/bobina.svg', class: 'right-[3%] top-[34%] h-10 -rotate-12 md:h-16' },
		{ src: '/svg/tela.svg', class: 'right-[21%] top-[31%] h-20 rotate-6 md:h-28' },
		{ src: '/svg/maniqui.svg', class: 'right-[7%] bottom-[4%] h-36 rotate-6 md:h-56' },
		{ src: '/svg/boton.svg', class: 'right-[16%] top-[47%] h-8 md:h-12' },
		{ src: '/svg/boton.svg', class: 'right-[21%] top-[55%] h-6 md:h-9' },
		{ src: '/svg/enhebrador.svg', class: 'right-[39%] bottom-[30%] h-7 -rotate-12 md:h-12' },
		{ src: '/svg/desenhebrador.svg', class: 'right-[34%] bottom-[15%] h-10 -rotate-45 md:h-18' },
		{ src: '/svg/alfiletero.svg', class: 'right-[28%] bottom-[8%] h-14 -rotate-12 md:h-24' },
		{ src: '/svg/gancho.svg', class: 'right-[18%] bottom-[25%] h-10 rotate-12 md:h-16' }
	];
</script>

<section class="relative isolate overflow-hidden bg-brand-soft px-5 py-14 text-white md:min-h-[500px] md:px-10 md:py-16">
	{#each illustrations as illustration}
		<img
			src={illustration.src}
			alt=""
			class="pointer-events-none absolute hidden brightness-0 invert md:block {illustration.class}"
		/>
	{/each}
	<div class="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start text-left">
		<p class="mb-5 rounded-full border border-white/70 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em]">DISCOVER FABRIC STORES</p>
		<h1 class="m-0 max-w-3xl font-display text-[clamp(4rem,9vw,9rem)] leading-[0.78] uppercase">
			Matching<br />Patterns
		</h1>
		<p class="mt-5 max-w-xl text-xs leading-relaxed text-white/90 md:text-sm">
			Explora tiendas de telas selectas en ciudades de todo el mundo. Conecta con artesanos, descubre materiales únicos y da vida a tu visión creativa.
		</p>
		<div class="mt-7 flex flex-wrap gap-4">
			<a class="relative block h-15 w-37.5 bg-white text-sm font-bold text-brand no-underline [mask-image:url('/svg/bttn-manga.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%]" href="#tiendas"><span class="absolute inset-x-0 bottom-3 text-center">⟵　Explorar　⟶</span></a>
			<a class="relative block h-15 w-37.5 bg-brand/35 text-sm font-bold text-white no-underline [mask-image:url('/svg/bttn-manga.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%]" href="#ciudades"><span class="absolute inset-x-0 bottom-3 text-center">⟵　Ciudades　⟶</span></a>
		</div>
	</div>
</section>
