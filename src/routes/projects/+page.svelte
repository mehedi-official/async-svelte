<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import projectImg from '$lib/assets/project.png';
</script>

<header>
	<Navbar activePage="projects" />

	<section class="laptop:px-6 px-4 pt-12 pb-24">
		<div class="mb-10">
			<h1 class="text-content-default mb-2 text-5xl font-medium tracking-tight">Projects</h1>
			<p class="text-content-intense max-w-108 text-base font-normal">
				Dive into a showcase of our latest work, meticulously crafted to inspire and elevate.
			</p>
		</div>

		<section class="laptop:grid-cols-2 grid gap-x-4 gap-y-8">
			{#each { length: 4 }}
				<article class="grid gap-4">
					<header><img class="h-88 object-cover" src={projectImg} alt="Project" /></header>
					<div class="laptop:flex-row laptop:items-center flex flex-col justify-between gap-4">
						<div class="grid gap-1.5">
							<h2 class="text-content-default text-2xl/none font-medium tracking-tight">Remotin</h2>
							<p class="text-content-subtle text-sm">Landing Page & Svelte development</p>
						</div>

						<footer
							class="laptop:flex-row inline-flex flex-row-reverse items-center justify-end gap-6"
						>
							<a
								href="/"
								class="text-content-default text-sm/none font-semibold tracking-tight underline-offset-2 hover:underline"
								>Design link</a
							>
							<a href="/" class="btn-accent">Live Website</a>
						</footer>
					</div>
				</article>
			{/each}
		</section>
	</section>
</header>
<Footer />
