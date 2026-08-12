<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import FeaturedStoresSection from '$lib/components/organisms/FeaturedStoresSection.svelte';
	import CreatorSelectionSection from '$lib/components/organisms/CreatorSelectionSection.svelte';
	import CitiesSection from '$lib/components/organisms/CitiesSection.svelte';
</script>

<Header />
<main>
	<Hero />
	<FeaturedStoresSection />
	<CreatorSelectionSection />
	<CitiesSection />
</main>
<Footer />
