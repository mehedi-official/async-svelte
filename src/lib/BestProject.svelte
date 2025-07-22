<script lang="ts">
	import project_0 from '$lib/assets/project.png';
	import project_1 from '$lib/assets/project_1.png';
	import project_2 from '$lib/assets/project_2.png';
	import project_3 from '$lib/assets/project_3.png';
	import type { Attachment } from 'svelte/attachments';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';

	let projects = $state([
		{
			id: 'remotin',
			image: project_0,
			title: 'Remotin',
			description:
				'Find talented professionals from around the world who are ready to help your business grow without geographical boundaries.',
			website_link: '',
			design_link: '',
			isActive: true
		},
		{
			id: 'qether',
			image: project_1,
			title: 'Qether',
			description:
				'Find talented professionals from around the world who are ready to help your business grow without geographical boundaries.',
			website_link: '',
			design_link: '',
			isActive: false
		},
		{
			id: 'ascone',
			image: project_2,
			title: 'Ascone',
			description:
				'Find talented professionals from around the world who are ready to help your business grow without geographical boundaries.',
			website_link: '',
			design_link: '',
			isActive: false
		},
		{
			id: 'oram',
			image: project_3,
			title: 'Oram',
			description:
				'Find talented professionals from around the world who are ready to help your business grow without geographical boundaries.',
			website_link: '',
			design_link: '',
			isActive: false
		}
	]);

	let activeProjectIdx = $state(0);
	let controlAnimation: Animation;

	function changeActiveCarousel(targetIdx: number, currentActiveIdx: number): void {
		if (targetIdx === currentActiveIdx) return;

		projects[currentActiveIdx].isActive = false;
		projects[targetIdx].isActive = true;
		activeProjectIdx = targetIdx;
	}

	const progress: Attachment = (element) => {
		if (controlAnimation) {
			controlAnimation.cancel();
		}

		controlAnimation = element.animate([{ width: '0%' }, { width: '100%' }], { duration: 12000 });

		controlAnimation.onfinish = (_) => {
			if (activeProjectIdx < projects.length - 1) {
				changeActiveCarousel(activeProjectIdx + 1, activeProjectIdx);
			} else {
				changeActiveCarousel(0, activeProjectIdx);
			}
		};
	};

	const observe: Attachment = (element) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element is in view
					controlAnimation.play();
				} else {
					// Element is out of view
					controlAnimation.pause();
				}
			});
		});

		observer.observe(element);
	};

	function handleEnterHover() {
		if (controlAnimation) {
			controlAnimation.pause();
		}
	}

	function handleLeaveHover() {
		if (controlAnimation) {
			controlAnimation.play();
		}
	}
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

	<section {@attach observe} class="grid grid-cols-[1fr_1.6fr] items-center gap-36 px-12 py-20">
		<section>
			{#each projects as { title, description, website_link, design_link, isActive }, idx}
				<article
					onmouseover={() => isActive && handleEnterHover()}
					onmouseleave={() => isActive && handleLeaveHover()}
					onclick={() => changeActiveCarousel(idx, activeProjectIdx)}
					class="cursor-pointer"
				>
					<h2 class="text-content-default py-4 text-[2rem]/none font-medium tracking-tight">
						{title}
					</h2>
					{#if isActive}
						<div transition:slide>
							<p class="text-content-intense mb-4 text-sm font-normal">
								{description}
							</p>

							<div class="mb-6 inline-flex items-center gap-6">
								<a href={website_link} class="btn-accent">Live Website</a>
								<a
									href={design_link}
									class="text-content-default text-sm/none font-semibold tracking-tight underline-offset-2 hover:underline"
									>Design link</a
								>
							</div>

							<div class="bg-stroke-subtle relative flex h-[1.5px] overflow-hidden">
								<div {@attach progress} class="bg-stroke-default flex w-0"></div>
							</div>
						</div>
					{/if}
				</article>
			{/each}
		</section>

		<section>
			<div class="flex justify-end overflow-hidden">
				{#key projects[activeProjectIdx].image}
					<img
						in:fly={{ y: '100%' }}
						out:fly={{ y: '-100%' }}
						src={projects[activeProjectIdx].image}
						alt="projects"
					/>
				{/key}
			</div>
		</section>
	</section>
</section>
