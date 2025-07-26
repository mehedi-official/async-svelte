<script>
	import Navbar from './Navbar.svelte';
	import banner from '$lib/assets/image 4.png';
	import InfiniteScroll from './InfiniteScroll.svelte';
	import { ascone, oram, qether, remotin } from './Logos.svelte';

	let information = new Map([
		['Timezone', 'UTC +6'],
		['Location', 'International'],
		['Experience', '1 year'],
		['Languages', 'Bangla, English, Hindi'],
		['Skills', 'Web Development']
	]);

	const brands = [ascone, qether, oram, remotin];

	function handleClick() {
		const project_section = document.getElementById('project');
		project_section?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header>
	<Navbar activePage="home" />
	<!-- <div class="fixed top-0 bg-surface-default">
		<Navbar activePage="home" />
	</div> -->

	<section class="laptop:grid-cols-[1.35fr_1fr] grid">
		<section class="laptop:p-12 px-4 py-12">
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
					class="text-content-default laptop:max-w-[80%] laptop:text-5xl/tight mb-5 text-4xl/snug font-semibold tracking-tighter"
				>
					I help businesses build world-class landing page & websites using Svelte, Framer, Webflow
				</h1>

				<a href="/contact" class="btn-accent">Work with me</a>
			</article>
		</section>

		<section class="border-stroke-default border-l">
			<div>
				<img src={banner} alt="Banner" class="min-h-118 object-cover" />
			</div>

			<article
				class="bg-surface-default border-stroke-default laptop:py-4 border-t px-3.5 pt-4 pb-8"
			>
				<p class=" text-content-default font-mono text-sm/none font-normal">
					WORKED WITH 4+ BRANDS
				</p>

				<InfiniteScroll gap={32} direction="normal">
					<div class="mt-6 flex w-fit items-center gap-8">
						{#each brands as brand}
							<button onclick={() => handleClick()} class="hover:cursor-pointer"
								>{@render brand()}</button
							>
						{/each}
					</div>
				</InfiniteScroll>
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
