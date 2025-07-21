<script lang="ts">
	import projects from '$lib/assets/project.png';
</script>

<section>
	<div class="border-stroke-default flex h-16 items-center justify-between border-y font-mono">
		<h3
			class="bg-stroke-default inline-flex h-full items-center gap-2.5 px-12 text-base/none font-normal tracking-wider text-[var(--white)]"
		>
			BEST PROJECTS
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 5V19"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M19 12L12 19L5 12"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</h3>

		<a
			href="/"
			class="text-content-default inline-flex h-full items-center gap-2.5 px-12 text-base/none font-normal tracking-wider underline-offset-2 hover:underline"
			>SEE ALL PROJECTS</a
		>
	</div>

	<section class="grid grid-cols-[1fr_1.6fr] items-center gap-36 px-12 py-20">
		<section>
			<article>
				<h2 class="text-content-default py-4 text-[2rem]/none font-medium tracking-tight">
					01 Remotin
				</h2>
				<p class="text-content-intense mb-4 text-sm font-normal">
					Find talented professionals from around the world who are ready to help your business grow
					without geographical boundaries.
				</p>

				<div class="mb-6 inline-flex items-center gap-6">
					<a href="/" class="btn-accent">Live Website</a>
					<a
						href="/"
						class="text-content-default text-sm/none font-semibold tracking-tight underline-offset-2 hover:underline"
						>Design link</a
					>
				</div>

				<div class="bg-stroke-subtle relative flex h-[1.5px] overflow-hidden">
					<div class="bg-stroke-default flex w-1/3"></div>
				</div>
			</article>

			<article>
				<h2 class="text-content-subtle py-4 text-[2rem]/none font-medium tracking-tight">
					02 Qether
				</h2>
			</article>
			<article>
				<h2 class="text-content-subtle py-4 text-[2rem]/none font-medium tracking-tight">
					03 Ascone
				</h2>
			</article>
			<article>
				<h2 class="text-content-subtle py-4 text-[2rem]/none font-medium tracking-tight">
					04 Oram
				</h2>
			</article>
		</section>

		<section>
			<div class="flex justify-end">
				<img src={projects} alt="projects" />
			</div>
		</section>
	</section>
</section>
