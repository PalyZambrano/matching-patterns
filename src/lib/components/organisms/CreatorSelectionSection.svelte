<script lang="ts">
	import CreatorFeature from '$lib/components/molecules/CreatorFeature.svelte';

	const features = [
		{
			title: 'Cobertura global',
			description: 'Descubre tiendas en los principales centros textiles del mundo.',
			class: 'left-[0%] top-[18%]',
			lineClass: 'left-[16%] top-[21%] w-[6rem]'
		},
		{
			title: 'Calidad verificada',
			description: 'Todas las tiendas han sido evaluadas por su experiencia y selección.',
			class: 'right-[4%] top-[2%]',
			lineClass: 'right-[30%] top-[6%] w-[6rem]',
			align: 'left'
		},
		{
			title: 'Comparte con la comunidad',
			description: 'Diseñadores de todo el mundo pueden contribuir con recursos.',
			class: 'left-[8%] bottom-[8%]',
			lineClass: 'left-[30%] bottom-[22%] w-[5rem]'
		},
		{
			title: 'Siempre actualizado',
			description: 'Nuevos listados e información precisa.',
			class: 'right-[2%] bottom-[21%]',
			lineClass: 'right-[26%] bottom-[29%] w-[5rem]'
		}
	] satisfies {
		title: string;
		description: string;
		class: string;
		lineClass: string;
		align?: 'left' | 'right';
	}[];
</script>

<section id="recursos" class="overflow-hidden bg-brand-pale px-5 py-14 md:px-10 md:py-20">
	<div class="relative mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center">
		{#each features as feature}
			<div
				class="absolute hidden w-36 border-t border-brand-soft/50 md:block {feature.lineClass}"
			></div>
			<div class="absolute hidden md:block {feature.class}">
				<CreatorFeature
					title={feature.title}
					description={feature.description}
					align={feature.align ?? 'left'}
				/>
			</div>
		{/each}
		<div class="relative flex max-w-xl flex-col content-center items-center text-center">
			<p
				class="mb-5 rounded-full border bg-brand-soft px-3 py-1.5 text-center text-xs font-bold tracking-[0.16em] text-white"
			>
				SELECCIÓN PARA CREADORES
			</p>
			<h2 class="m-0 text-[clamp(1.9rem,3.5vw,2.65rem)] leading-tight font-black text-black">
				Selección para creadores
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/60">
				Cada tienda en nuestra plataforma ha sido cuidadosamente seleccionada por su calidad,
				experiencia y oferta única.<br /><br />Ya seas diseñador/a de moda, aficionado/a al
				patchwork o decorador/a de interiores, encuentra los materiales perfectos para tu próximo
				proyecto.
			</p>
			<a
				href="#contribuir"
				class="relative mt-8 block h-20 w-56 bg-brand-soft [mask-image:url('/svg/bttn-manga.svg')] [mask-size:100%_100%] [mask-position:center] [mask-repeat:no-repeat] text-sm font-bold text-white no-underline"
				><span class="absolute inset-x-0 bottom-3 text-center">⟵　Contribuir　⟶</span></a
			>
		</div>
		<div class="mt-12 grid w-full max-w-xl gap-7 md:hidden">
			{#each features as feature}
				<CreatorFeature title={feature.title} description={feature.description} />
			{/each}
		</div>
	</div>
</section>
