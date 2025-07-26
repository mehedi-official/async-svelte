<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import faq_banner from '$lib/assets/faq.png';
	import { slide } from 'svelte/transition';

	let questions = $state([
		{
			question: 'What kind of work do you do?',
			answer:
				'I specialize in converting any web design(figma, penpot, sketch etc) to webpages using svelte, webflow & framer',
			isActive: false
		},
		{
			question: 'What are your key skills?',
			answer:
				'I have front-end skills like svelte, webflow, framer, deployment to netlify, cloudflare pages, vps etc',
			isActive: false
		},
		{
			question: 'What is your experience level?',
			answer: 'I have 1 year of experience in above skills.',
			isActive: false
		},
		{
			question: 'What is your development process?',
			answer: `My development process for turning a Figma landing page design into a Svelte application is generally breaks down to five phases: 
				Design Analysis & Planning, Component Development & Integration, Interactivity & Animation, Testing, Deoployment / Handover`,
			isActive: true
		},
		{
			question: 'Do you offer revision?',
			answer:
				'Yes, I absolutely offer revisions as a standard part of my development process. But extra charges may apply after 2nd revision.',
			isActive: false
		},
		{
			question: 'What are your rates/fees/pricing?',
			answer:
				'My rates are typically project-based, as I find this provides the most clarity and value for my clients.The project pricing is depending on complexity, unique animations, responsiveness requirements, and the number of sections.',
			isActive: false
		},
		{
			question: 'What technologies or tools do you use?',
			answer:
				'My tools & stacks are Figma, Framer, Notion, Claude, Svelte & Sveltekit, Motion.dev, Javascript, Google Analytics, Webflow, Slack, Stripe',
			isActive: false
		}
	]);

	function handleAccordian(idx: number, isActive: boolean): void {
		questions[idx].isActive = !isActive;
	}
</script>

<header>
	<Navbar activePage="faq" />

	<section
		class="border-stroke-default laptop:h-[calc(100dvh-64px)] laptop:grid-cols-2 grid overflow-hidden border-b"
	>
		<section class="relative">
			<div class="h-full"><img src={faq_banner} class="h-full" alt="FAQ Banner" /></div>

			<h1
				class="bg-primary laptop:ml-9 absolute top-0 left-0 mt-5 ml-4 inline-flex p-2 text-sm/none font-medium tracking-wider text-[var(--text-btn)]"
			>
				FREQUENTLY ASKED QUESTIONS
			</h1>
		</section>

		<section class="border-stroke-default overflow-y-scroll border-l">
			<div class="laptop:px-6 grid gap-2 px-4 py-12">
				{#each questions as { question, answer, isActive }, idx}
					<button class="contents" onclick={() => handleAccordian(idx, isActive)}>
						<article
							class={[
								'hover:border-stroke-default cursor-pointer border px-3 py-4',
								isActive ? 'bg-primary border-stroke-default' : 'border-stroke-subtle'
							]}
						>
							<div class="flex items-center justify-between">
								<h2
									class={[
										'text-left text-base tracking-tight underline-offset-2',
										isActive
											? 'font-medium text-[var(--text-btn)] underline'
											: 'text-content-default font-normal'
									]}
								>
									{question}
								</h2>
								<svg
									width="16"
									height="17"
									viewBox="0 0 16 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.28 6.46667L8.9333 10.8133C8.41997 11.3267 7.57997 11.3267 7.06664 10.8133L2.71997 6.46667"
										stroke="#242424"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>

							{#if isActive}
								<p
									transition:slide
									class={[
										'mt-2.5 text-left text-base font-normal tracking-tight',
										isActive ? 'text-[var(--text-btn)]' : 'text-content-default'
									]}
								>
									{answer}
								</p>
							{/if}
						</article>
					</button>
				{/each}
			</div>
		</section>
	</section>
</header>
