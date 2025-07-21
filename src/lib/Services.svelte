<script lang="ts">
	const services = [
		'Product Design',
		'User Research',
		'Prototyping',
		'Usability Testing',
		'Visual Design',
		'Interaction Design'
	];
	const industries = [
		'Healthcare',
		'Finance',
		'Education',
		'Retail',
		'Technology',
		'Transportation',
		'Hospitality',
		'Real Estate',
		'Entertainment'
	];
	const stacks = [
		'Figma',
		'Svelte',
		'Sveltekit',
		'Webflow',
		'Framer',
		'Motion.dev',
		'GSAP',
		'Slack',
		'Notion',
		'Javscript'
	];
</script>

<section>
	<div class="border-stroke-default h-16 border-y font-mono">
		<h3
			class="bg-stroke-default inline-flex h-full items-center gap-2.5 px-12 text-base/none font-normal tracking-wider text-[var(--white)]"
		>
			SERVICES
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
	</div>

	<section class="mx-auto max-w-4xl py-16">
		<p class="text-content-intense mb-8 text-base font-normal">
			We design with intent - sharp, functional, and user-first. No fluff, just digital experiences
			that feel right and work fast. From startups to market leaders, we've done this for over 10
			years for companies in a wide range of categories, using the best and latest tools.
		</p>

		<div class="grid gap-10">
			<article>
				<p class="text-content-intense mb-4 text-sm/none font-normal">FOCUS</p>

				<div
					class="text-content-default grid grid-cols-3 justify-start justify-items-start gap-x-1 gap-y-6 text-base/none font-normal"
				>
					{#each services as service}
						<p class="flex items-center gap-1.5">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 2.91667V11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.91663 7H11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{service}
						</p>
					{/each}
				</div>
			</article>

			<article>
				<p class="text-content-intense mb-4 text-sm/none font-normal">INDUSTRIES</p>

				<div class="text-content-default grid grid-cols-3 gap-y-6 text-base/none font-normal">
					{#each industries as industry}
						<p class="flex items-center gap-1.5">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 2.91667V11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.91663 7H11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{industry}
						</p>
					{/each}
				</div>
			</article>

			<article>
				<p class="text-content-intense mb-4 text-sm/none font-normal">TOOLS & STACK</p>

				<div class="text-content-default grid grid-cols-3 gap-y-6 text-base/none font-normal">
					{#each stacks as stack}
						<p class="flex items-center gap-1.5">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 2.91667V11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.91663 7H11.0833"
									stroke="#737373"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{stack}
						</p>
					{/each}
				</div>
			</article>
		</div>
	</section>
</section>
