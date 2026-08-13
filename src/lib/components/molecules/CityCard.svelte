<script lang="ts">
	import type { City } from '$lib/types';
	let { city }: { city: City } = $props();
</script>

<a
	href={`/stores?ciudad=${encodeURIComponent(city.name)}`}
	class="group relative flex aspect-[0.92] flex-col items-center justify-center overflow-hidden bg-brand-soft p-5 text-white no-underline transition-transform [clip-path:polygon(0_0,100%_0,92%_84%,50%_100%,8%_84%)] hover:-translate-y-1"
>
	<!-- Replace this SVG with the final pocket stitch asset when it is available. -->
	<img
		class="pointer-events-none absolute inset-[8%] h-[84%] w-[84%] object-contain"
		src="/svg/pocket-stitch.svg"
		alt=""
	/>
	<p class="relative m-0 text-base font-black md:text-lg">{city.name}</p>
	<p class="relative mt-2 mb-0 text-[0.65rem] font-bold text-white/0">{city.storeCount} tiendas</p>
</a>
