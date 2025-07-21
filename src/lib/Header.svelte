<script>
	import Navbar from './Navbar.svelte';
	import banner from '$lib/assets/image 4.png';

	let information = new Map([
		['Timezone', 'UTC +6'],
		['Location', 'Bangladesh'],
		['Experience', '1.5 years'],
		['Languages', 'Bangla, English, Hindi'],
		['Skills', 'Web Development']
	]);
</script>

<header>
	<Navbar activePage="home" />

	<section class="grid grid-cols-[1.35fr_1fr]">
		<section class="p-12">
			<div class="mb-9 inline-grid gap-2 text-sm/none font-normal">
				{#each information as [k, v]}
					<div class="flex items-center gap-2">
						<p class="text-content-intense w-32">{k}</p>
						<p class="text-content-default">{v}</p>
					</div>
				{/each}
			</div>

			<article>
				<p
					class="text-content-default border-stroke-subtle mb-3 inline-flex min-h-8 items-center gap-1.5 rounded-full border pr-3 pl-2 text-sm/none font-normal"
				>
					<span class="relative z-10 flex h-2 w-2 rounded-full bg-[var(--green-200)]">
						<span class="pulse absolute z-1 h-full w-full rounded-full bg-[var(--green-200)]"
						></span>
					</span>
					Available for Work
				</p>

				<h1
					class="text-content-default mb-5 max-w-[80%] text-5xl/tight font-semibold tracking-tighter"
				>
					I help businesses build world-class landing page & websites using Svelte, Framer, Webflow
				</h1>

				<a href="/" class="btn-accent">Work with me</a>
			</article>
		</section>

		<section class="border-stroke-default border-l">
			<div>
				<img src={banner} alt="Banner" class="min-h-118 object-cover" />
			</div>

			<article class="bg-surface-default border-stroke-default border-t px-3.5 py-4">
				<p class=" text-content-default font-mono text-sm/none font-normal">
					WORKED WITH 4+ BRANDS
				</p>
			</article>
		</section>
	</section>
</header>

<style>
	.pulse {
		animation: pulseAnimation 1.5s ease-out infinite;
	}

	@keyframes pulseAnimation {
		100% {
			scale: 2.25;
			opacity: 0;
		}
	}
</style>
