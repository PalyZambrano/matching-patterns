<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import CategoryBadge from '$lib/components/atoms/CategoryBadge.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import StoreCard from '$lib/components/molecules/StoreCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let displayName = $derived(data.store.name.replace(' Tejidos', ''));
	let addressQuery = $derived(
		`${data.store.name}, ${data.store.address}, ${data.store.city}, ${data.store.province}, ${data.store.country}`
	);
	let mapsUrl = $derived(
		data.store.mapUrl ??
			`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`
	);
	let hasPhoto = $derived(Boolean(data.store.img && data.store.img !== '/test-image.png'));
	let contactLines = $derived([data.store.phone, data.store.email].filter(Boolean));
	let services = $derived(data.store.services ?? []);
	let contributorText = $derived(
		data.store.contributor?.urlLabel
			? `${data.store.contributor.name}  |  ${data.store.contributor.urlLabel}`
			: data.store.contributor?.name
	);
	const categoryLabels = {
		telas: 'Telas',
		merceria: 'Mercería',
		estampacion: 'Estampación'
	};
</script>

{#snippet storePhoto()}
	<div class="relative mx-auto w-full max-w-[43rem] rotate-2 bg-white p-4 shadow-xl">
		<span
			class="absolute -top-16 right-[20%] z-10 h-28 w-20 rotate-12 bg-[#5278dc] [mask-image:url('/svg/gancho.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
			aria-hidden="true"
		></span>
		{#if hasPhoto}
			<img
				src={data.store.img}
				alt={`Foto de ${data.store.name}`}
				class="aspect-[1.25] w-full object-cover"
			/>
		{:else}
			<div class="flex aspect-[1.25] w-full items-center justify-center bg-brand-soft px-8 text-center">
				<p class="m-0 max-w-lg text-2xl leading-tight font-black text-white">
					{data.store.name}
				</p>
			</div>
		{/if}
	</div>
{/snippet}

<svelte:head><title>{data.store.name} - Matching Patterns</title></svelte:head>

<Header variant="light" />

<main class="relative overflow-hidden bg-white px-5 py-14 md:px-10 md:py-10">
	<div class="relative mx-auto max-w-[1440px]">
		<div
			class="pointer-events-none absolute inset-0 hidden -rotate-2 border border-black/15 bg-paper md:block"
		></div>
		<section class="relative border border-black/15 bg-white p-5 md:p-4 lg:p-4">
		<h1 class="my-4 ml-2 text-base leading-tight font-black text-black  md:text-base">FICHA TÉCNICA</h1>
		<div class="border border-black/20 px-5 py-10 lg:hidden">
			{@render storePhoto()}
		</div>
		<div class="grid border border-black/20 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="border-black/20 lg:border-r">

				<div class="border-b border-black/20 px-4 py-2">
					<p class="text-base text-black/40">Tienda</p>
					<h2 class="pt-2 mb-4 text-2xl leading-none font-light text-black">
						{displayName}
					</h2>
				</div>

				<div class="border-b border-black/20 px-4 py-2">
					<h3 class="text-base text-black/40">Categoría</h3>
					<div class="mt-2 mb-4 flex flex-wrap gap-3">
						{#each data.store.categories as category}
							<CategoryBadge label={categoryLabels[category]} {category} />
						{/each}
					</div>
				</div>

				<div class="border-b border-black/20 px-4 py-2">
					<h3 class="text-base text-black/40">Características</h3>
					<div class="mt-2  mb-4 flex flex-wrap gap-3">
						{#each data.store.tags.slice(0, 3) as tag}
							<Tag label={tag} />
						{/each}
					</div>
				</div>

				<div class="grid border-b border-black/20 md:grid-cols-2">
					<div class="border-black/20 px-4 pt-2 pb-8 md:border-r ">
						<h3 class="m-0 pb-2 text-base text-black/40">Horario</h3>
						{#if data.store.hours?.length}
							<p class="text-base leading-relaxed whitespace-pre-line text-black/80">
								{data.store.hours.join('\n')}
							</p>
						{:else}
							<p class="mb-0 text-base leading-relaxed text-black/80">Horario por confirmar.</p>
						{/if}
					</div>
					<div class="border-t border-black/20 px-4 pt-2 pb-8 md:border-t-0">
						<h3 class="m-0 text-base pb-2 text-black/40">Contacto</h3>
						{#if contactLines.length}
							<p class="mb-0 text-base leading-relaxed text-black/80">
								{#if data.store.phone}{data.store.phone}{/if}
								{#if data.store.phone && data.store.email}<br />{/if}
								{#if data.store.email}
									<a
										href={`mailto:${data.store.email}`}
										class="text-black/80 no-underline hover:text-brand"
									>
										{data.store.email}
									</a>
								{/if}
							</p>
						{:else}
							<p class="mb-0 text-lg leading-relaxed text-black/80">Contacto por confirmar.</p>
						{/if}
					</div>
				</div>

				<div class="grid items-center border-b border-black/20 px-4 py-4 md:grid-cols-[12rem_1fr]">
					<h3 class="m-0 text-base text-black/40">Dirección</h3>
					<a
						href={mapsUrl}
						target="_blank"
						rel="noreferrer"
						class="text-base leading-relaxed text-black/80 no-underline hover:text-brand md:mt-0"
					>
						{data.store.address}<br />{data.store.city}, {data.store.province} - {data.store.country}
					</a>
				</div>

				<div class="grid items-center gap-3 px-4 py-4 md:grid-cols-[12rem_1fr] md:py-3">
					<h3 class="m-0 text-base text-black/40">Servicios</h3>
					{#if services.length}
						<div class="flex flex-wrap gap-3">
							{#each services as service}
								<span class="rounded-full border border-black px-3 py-2 text-[0.70rem] font-bold uppercase ">
									{service}
								</span>
							{/each}
						</div>
					{:else}
						<p class="m-0 text-base leading-relaxed text-black/45">
							Información de servicios por confirmar.
						</p>
					{/if}
				</div>
			</div>

			<div class="relative hidden border-b border-black/20 lg:grid lg:border-b-0 lg:border-t-0">
				<div class="min-h-[30rem] border-b border-black/20 px-5 py-10 md:px-8 lg:min-h-[30rem]">
					<div class="lg:-mt-16">
						{@render storePhoto()}
					</div>
				</div>

				<div class="px-4 py-4">
					<h3 class="m-0 text-base text-black/40">Contribuidor</h3>
					{#if data.store.contributor && contributorText}
						{#if data.store.contributor.url}
							<a
								href={data.store.contributor.url}
								target="_blank"
								rel="noreferrer"
								class="mt-5 ml-4 inline-block w-fit max-w-full -rotate-2 bg-brand-soft px-6 py-3 text-base leading-tight text-black no-underline hover:bg-brand hover:text-white md:px-8 md:py-4"
							>
								{contributorText}
							</a>
						{:else}
							<p class="mt-5 mb-0 inline-block w-fit max-w-full -rotate-2 bg-brand-soft px-6 py-3 text-base leading-tight text-black md:px-8 md:py-4">
								{contributorText}
							</p>
						{/if}
					{:else}
						<p class="mt-5 mb-0 text-base text-black/45">Sin contribuidor asignado.</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="border-x border-b border-black/20 px-4 py-4 lg:hidden">
			<h3 class="m-0 text-base text-black/40">Contribuidor</h3>
			{#if data.store.contributor && contributorText}
				{#if data.store.contributor.url}
					<a
						href={data.store.contributor.url}
						target="_blank"
						rel="noreferrer"
						class="mt-5 inline-block w-fit max-w-full -rotate-2 bg-brand-soft px-6 py-3 text-base leading-tight text-black no-underline hover:bg-brand hover:text-white"
					>
						{contributorText}
					</a>
				{:else}
					<p class="mt-5 mb-0 inline-block w-fit max-w-full -rotate-2 bg-brand-soft px-6 py-3 text-base leading-tight text-black">
						{contributorText}
					</p>
				{/if}
			{:else}
				<p class="mt-5 mb-0 text-base text-black/45">Sin contribuidor asignado.</p>
			{/if}
		</div>
		</section>
	</div>

	{#if data.relatedStores.length}
		<section class="relative mx-auto mt-14 max-w-[1440px] md:mt-20">
			<div class="mb-10">
				<h2 class="m-0 text-[clamp(1.9rem,3vw,2.5rem)] leading-tight font-black text-black">
					Tiendas destacadas en {data.store.city}
				</h2>
				<p class="mt-2 mb-0 text-lg text-black/55">
					Otros proveedores textiles disponibles en la misma ciudad.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
				{#each data.relatedStores as relatedStore}
					<StoreCard store={relatedStore} />
				{/each}
			</div>
		</section>
	{/if}
</main>

<Footer />
