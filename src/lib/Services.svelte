<script lang="ts">
	import {
		claude,
		figma,
		framer,
		ga,
		javascript,
		motion,
		notion,
		slack,
		stripe,
		svelteIcon,
		webflow
	} from './TechLogos.svelte';

	const services = [
		'Landing Page Development',
		'Framer Development',
		'Webflow Development',
		'Svelte & Sveltekit Development',
		'Figma to HTML, Svelte etc.'
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
		{ icon: figma, name: 'Figma' },
		{ icon: svelteIcon, name: 'Svelte & Sveltekit' },
		{ icon: webflow, name: 'Webflow' },
		{ icon: framer, name: 'Framer' },
		{ icon: motion, name: 'Motion.dev' },
		{ icon: slack, name: 'Slack' },
		{ icon: notion, name: 'Notion' },
		{ icon: javascript, name: 'Javascript' },
		{ icon: stripe, name: 'Stripe' },
		{ icon: claude, name: 'Claude' },
		{ icon: ga, name: 'Google Analytics' }
	];
</script>

<section>
	<div class="border-stroke-default h-16 border-y font-mono">
		<h3
			class="bg-stroke-default laptop:px-12 laptop:text-base/none laptop:tracking-wider inline-flex h-full items-center gap-2.5 px-4 text-sm/none font-normal tracking-tighter text-white"
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

	<section class="desktop:max-w-6xl mx-auto max-w-4xl px-4 py-16">
		<p class="text-content-intense mb-8 text-base font-normal">
			I design with intent that is - sharp, functional, and user-first. No fluff, just digital experiences
			that feel right and work fast. From startups to market leaders, I've done this for over 1
			years for companies in a wide range of categories, using the best and latest tools.
		</p>

		<div class="laptop:gap-10 grid gap-16">
			<article>
				<p class="text-content-intense mb-4 text-sm/none font-normal">FOCUS</p>

				<div
					class="text-content-default laptop:grid-cols-3 grid grid-cols-2 justify-start justify-items-start gap-x-1 gap-y-6 text-base/none font-normal"
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

				<div
					class="text-content-default laptop:grid-cols-3 grid grid-cols-2 gap-y-6 text-base/none font-normal"
				>
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
									d="M11.6667 3.5L5.25004 9.91667L2.33337 7"
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

				<div
					class="text-content-default laptop:grid-cols-3 grid grid-cols-2 gap-y-6 text-base/none font-normal"
				>
					{#each stacks as stack}
						<p class="flex items-center gap-1.5">
							{@render stack.icon()}
							{stack.name}
						</p>
					{/each}
				</div>
			</article>
		</div>
	</section>
</section>
