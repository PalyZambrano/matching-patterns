<script lang="ts">
	let { variant = 'blue' }: { variant?: 'blue' | 'light' } = $props();
</script>

<header
	class="sticky top-0 z-50 border-b px-5 py-2.5 md:px-10 {variant === 'blue'
		? 'border-white/15 bg-brand-soft'
		: 'border-black/5 bg-white shadow-sm'}"
>
	<div class="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
		<a
			href="/"
			class="flex items-center gap-2 uppercase no-underline {variant === 'blue'
				? 'text-white'
				: 'text-brand'}"
			aria-label="Matching Patterns"
		>
			<span
				class="h-8 w-6 {variant === 'blue'
					? 'bg-white'
					: 'bg-brand'} [mask-image:url('/svg/logo.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
			></span>
			<span class="hidden font-display text-[1.7rem] leading-none sm:inline">Matching Patterns</span
			>
		</a>
		<nav class="flex items-center gap-4 font-display text-[1.5rem] font-normal uppercase md:gap-9" aria-label="Main navigation">
			<a href="/stores" class="no-underline {variant === 'blue' ? 'text-white' : 'text-brand'}"
				>Explorar</a
			>
			<a href="/contribuir" class="bg-brand px-5 py-2.5 text-white no-underline">Contribuir</a>
		</nav>
	</div>
</header>
