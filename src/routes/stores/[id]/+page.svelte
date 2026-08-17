<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const services = ['Clases', 'Workshops', 'Asesoría'];
	let addressQuery = $derived(
		`${data.store.name}, ${data.store.address}, ${data.store.city}, ${data.store.province}, ${data.store.country}`
	);
	let mapsUrl = $derived(
		data.store.mapUrl ??
			`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`
	);
	let hasContact = $derived(Boolean(data.store.phone || data.store.email));
	let hasOnlineLinks = $derived(Boolean(data.store.website || data.store.socials?.length));
</script>

<svelte:head><title>{data.store.name} — Matching Patterns</title></svelte:head>

<Header variant="light" />

<main
	class="mx-auto grid min-h-[calc(100vh-108px)] max-w-[1440px] grid-cols-1 gap-10 bg-white px-5 pt-12 pb-18 md:px-10 md:pt-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16"
>
	<section class="max-w-md pt-2">
		<h1 class="m-0 text-[clamp(2rem,4vw,3rem)] leading-[0.95] font-black text-black">
			{data.store.name.replace(' Tejidos', '')}
		</h1>
		<div class="mt-3 flex flex-wrap gap-2.5">
			{#each data.store.tags as tag}<Tag label={tag} />{/each}
			<Tag label="Fiesta" />
		</div>

		<div class="mt-11 space-y-8 text-black">
			<section>
				<h2 class="m-0 text-[1.45rem] leading-tight font-black">Dirección</h2>
				<p class="mt-1 mb-3 text-[1.15rem] leading-[1.45] text-black/55">
					{data.store.address}<br />{data.store.city}, {data.store.province} - {data.store.country}
				</p>
				<a
					href={mapsUrl}
					target="_blank"
					rel="noreferrer"
					class="inline-flex rounded-full border border-brand px-4 py-2 text-sm font-bold text-brand no-underline transition-colors hover:bg-brand hover:text-white"
				>
					Ver en Google Maps
				</a>
			</section>
			<section>
				<h2 class="m-0 text-[1.45rem] leading-tight font-black">Horario</h2>
				{#if data.store.hours?.length}
					<p class="mt-1 mb-0 text-[1.15rem] leading-[1.45] whitespace-pre-line text-black/55">
						{data.store.hours.join('\n')}
					</p>
				{:else}
					<p class="mt-1 mb-0 text-[1.15rem] leading-[1.45] text-black/45">
						Horario por confirmar.
					</p>
				{/if}
			</section>
			{#if hasContact}
				<section>
					<h2 class="m-0 text-[1.45rem] leading-tight font-black">Contacto</h2>
					<p class="mt-1 mb-0 text-[1.15rem] leading-[1.45] text-black/55">
						{#if data.store.phone}{data.store.phone}{/if}
						{#if data.store.phone && data.store.email}<br />{/if}
						{#if data.store.email}<a
								href={`mailto:${data.store.email}`}
								class="text-black/55 no-underline hover:text-brand">{data.store.email}</a
							>{/if}
					</p>
				</section>
			{/if}
			{#if hasOnlineLinks}
				<section>
					<h2 class="m-0 text-[1.45rem] leading-tight font-black">Web y redes</h2>
					<div class="mt-3 flex flex-wrap gap-2.5">
						{#if data.store.website}
							<a
								href={data.store.website}
								target="_blank"
								rel="noreferrer"
								class="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white no-underline"
								>Página web</a
							>
						{/if}
						{#each data.store.socials ?? [] as social}
							<a
								href={social.url}
								target="_blank"
								rel="noreferrer"
								class="rounded-full border border-brand px-4 py-2 text-sm font-bold text-brand no-underline hover:bg-brand hover:text-white"
								>{social.label}</a
							>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</section>

	<section class="pt-2">
		{#if data.store.img && data.store.img !== '/test-image.png'}
			<img
				src={data.store.img}
				alt={`Foto de ${data.store.name}`}
				class="aspect-[1.7] w-full object-cover"
			/>
		{:else}
			<div class="flex aspect-[1.7] w-full items-center justify-center bg-brand-soft px-8 text-center">
				<p class="m-0 max-w-lg text-2xl leading-tight font-black text-white">{data.store.name}</p>
			</div>
		{/if}
		<h2 class="mt-8 mb-5 text-[1.45rem] font-black text-black">Servicios</h2>
		<div class="flex flex-wrap gap-3">
			{#each services as service}<span
					class="rounded-full border border-black px-8 py-3 text-sm font-bold shadow-sm md:px-10"
					>{service}</span
				>{/each}
		</div>
	</section>
</main>

<Footer />
