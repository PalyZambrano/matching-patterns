<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const services = ['Clases', 'Workshops'];

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
	let contributorText = $derived(
		data.store.contributor?.urlLabel
			? `${data.store.contributor.name}  |  ${data.store.contributor.urlLabel}`
			: data.store.contributor?.name
	);
</script>

<svelte:head><title>{data.store.name} - Matching Patterns</title></svelte:head>

<Header variant="light" />

<main class="relative overflow-hidden bg-white px-5 py-14 md:px-10 md:py-20">
	<div
		class="pointer-events-none absolute top-28 left-10 hidden h-[78%] w-[86%] -rotate-2 border border-black/15 bg-paper md:block"
	></div>

	<section
		class="relative mx-auto max-w-[1440px] border border-black/15 bg-white p-5 md:p-8 lg:p-10"
	>
		<div class="grid border border-black/20 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="border-black/20 lg:border-r">
				<div class="border-b border-black/20 px-5 py-6 md:px-8">
					<h1 class="m-0 text-xl leading-tight font-black text-black md:text-2xl">FICHA TÉCNICA</h1>
				</div>

				<div class="border-b border-black/20 px-5 py-8 md:px-8 md:py-4">
					<p class="m-0 text-lg text-black/40">Tienda</p>
					<h2 class="mt-4 mb-0 text-4xl leading-none font-light  text-black">
						{displayName}
					</h2>
				</div>

				<div class="border-b border-black/20 px-5 py-4 md:px-8">
					<h3 class="m-0 text-lg text-black/40">Características</h3>
					<div class="mt-5 flex flex-wrap gap-3">
						{#each data.store.tags.slice(0, 3) as tag}
							<Tag label={tag} />
						{/each}
					</div>
				</div>

				<div class="grid border-b border-black/20 md:grid-cols-2">
					<div class="border-black/20 px-5 py-4 md:border-r md:px-8">
						<h3 class="m-0 text-lg text-black/40">Horario</h3>
						{#if data.store.hours?.length}
							<p class="mt-4 mb-0 text-xl leading-relaxed whitespace-pre-line text-black/80">
								{data.store.hours.join('\n')}
							</p>
						{:else}
							<p class="mt-4 mb-0 text-xl leading-relaxed text-black/80">Horario por confirmar.</p>
						{/if}
					</div>
					<div class="border-t border-black/20 px-5 py-4 md:border-t-0 md:px-8">
						<h3 class="m-0 text-lg text-black/40">Contacto</h3>
						{#if contactLines.length}
							<p class="mt-4 mb-0 text-xl leading-relaxed text-black/80">
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
							<p class="mt-4 mb-0 text-xl leading-relaxed text-black/80">Contacto por confirmar.</p>
						{/if}
					</div>
				</div>

				<div class="grid items-center border-b border-black/20 px-5 py-4 md:grid-cols-[12rem_1fr] md:px-8">
					<h3 class="m-0 text-lg text-black/40">Dirección</h3>
					<a
						href={mapsUrl}
						target="_blank"
						rel="noreferrer"
						class="mt-4 text-xl leading-relaxed text-black/80 no-underline hover:text-brand md:mt-0"
					>
						{data.store.address}<br />{data.store.city}, {data.store.province} - {data.store.country}
					</a>
				</div>

				<div class="grid min-h-40 items-center px-5 py-4 md:grid-cols-[12rem_1fr] md:px-8">
					<h3 class="m-0 text-lg text-black/40">Contribuidor</h3>
					{#if data.store.contributor && contributorText}
						{#if data.store.contributor.url}
							<a
								href={data.store.contributor.url}
								target="_blank"
								rel="noreferrer"
								class="mt-5 inline-block w-fit -rotate-3 bg-brand-soft px-12 py-6 text-xl text-black no-underline hover:bg-brand hover:text-white md:mt-0"
							>
								{contributorText}
							</a>
						{:else}
							<p class="mt-5 mb-0 inline-block w-fit -rotate-3 bg-brand-soft px-12 py-6 text-xl text-black md:mt-0">
								{contributorText}
							</p>
						{/if}
					{:else}
						<p class="mt-5 mb-0 text-xl text-black/45 md:mt-0">Sin contribuidor asignado.</p>
					{/if}
				</div>
			</div>

			<div class="relative grid border-t border-black/20 lg:border-t-0">
				<div class="min-h-[30rem] border-b border-black/20 px-5 py-10 md:px-8 lg:min-h-[43rem]">
					<div class="relative mx-auto w-full max-w-[43rem] rotate-2 bg-white p-4 shadow-xl lg:-mt-16">
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
								<p class="m-0 max-w-lg text-3xl leading-tight font-black text-white">
									{data.store.name}
								</p>
							</div>
						{/if}
					</div>
				</div>

				<div class="px-5 py-4 md:px-8">
					<h3 class="m-0 text-lg text-black/40">Servicios</h3>
					<div class="mt-7 flex flex-wrap gap-4">
						{#each services as service}
							<span class="rounded-full border border-black px-14 py-2 text-base font-black shadow-md">
								{service}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
