<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import faq_banner from '$lib/assets/faq.png';
	import { slide } from 'svelte/transition';

	let questions = $state([
		{
			question: 'What is Remotin ?',
			answer: 'The quick brown fox jumps over the lazy dog.',
			isActive: false
		},
		{
			question: 'How do you vet remote workers ?',
			answer: 'The quick brown fox jumps over the lazy dog.',
			isActive: false
		},
		{
			question: 'What types of roles can I hire for through Remotin ?',
			answer: 'The quick brown fox jumps over the lazy dog.',
			isActive: false
		},
		{
			question: 'How quickly can I hire a remote worker ?',
			answer:
				'Yes, absolutely! Hiring remote workers on a part-time or project basis is a very common and often advantageous practice. It offers flexibility for both the employer and the employee.',
			isActive: true
		},
		{
			question: 'Can I hire on a part-time or project basis ?',
			answer: 'The quick brown fox jumps over the lazy dog.',
			isActive: false
		},
		{
			question: 'What if I’m not satisfied with the remote worker?',
			answer: 'The quick brown fox jumps over the lazy dog.',
			isActive: false
		},
		{
			question: 'Is there any ongoing support for managing remote workers ?',
			answer: 'The quick brown fox jumps over the lazy dog.',
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
