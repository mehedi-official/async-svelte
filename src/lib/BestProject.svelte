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
			image:
				'https://cdn.dribbble.com/userupload/20758886/file/original-f8d81f7481082cc0af893ea6c8f1738f.png',
			title: 'Remotin',
			description:
				'Find talented professionals from around the world who are ready to help your business grow without geographical boundaries.',
			website_link: 'https://remotin.vercel.app/',
			design_link:
				'https://dribbble.com/shots/25575713-Remotin-Remote-Worker-Service-Provider-Landing-Page',
			isActive: true
		},
		{
			id: 'qether',
			image: "https://cdn.dribbble.com/userupload/44318964/file/b5dde35a25657a6fe1ac745b3010184f.jpg",
			title: 'Qether',
			description:
				'Experience skincare crafted to suit every type, concern, and lifestyle for all ages and every beautiful you.',
			website_link: 'https://qether.vercel.app/',
			design_link:
				'https://www.behance.net/gallery/217637761/Qether-Skin-Care-Brand-Website-Brand-identity',
			isActive: false
		},
		{
			id: 'ascone',
			image:
				'https://cdn.dribbble.com/userupload/12038805/file/original-95dcd60b18eab4dde248f54cc32d16e9.png',
			title: 'Ascone',
			description:
				'Ascone can help you to manage and planning for your future with savings and investments. Ascone helps you get more from your money just in one app.',
			website_link: 'https://ascone.pages.dev/',
			design_link: 'https://dribbble.com/shots/23286378-Ascone-Finance-Landing-Page',
			isActive: false
		},
		{
			id: 'oram',
			image: "https://cdn.dribbble.com/userupload/44319164/file/5811ab9bf2037101bcd930bbe5f3d6bb.jpg",
			title: 'Oram',
			description:
				'Our minimalist furniture features clean lines and functionality, enhancing any space with timeless, clutter-free pieces that create a calm, sophisticated atmosphere.',
			website_link: 'https://oram-furniture.vercel.app/',
			design_link:
				'https://www.figma.com/proto/YeEuqcs9KcTxiStZRdUSkL/Furniture-website-design?node-id=255-6&t=hjTRPKTGh6vTW3UX-1&scaling=scale-down-width&content-scaling=fixed&page-id=255%3A5',
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

<section id="project">
	<div class="border-stroke-default flex h-16 items-center justify-between border-y font-mono">
		<h3
			class="bg-stroke-default laptop:px-12 laptop:text-base/none laptop:tracking-wider inline-flex h-full items-center gap-2.5 px-4 text-sm/none font-normal tracking-tighter text-nowrap text-white"
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
			href="/projects"
			class="text-content-default laptop:px-12 laptop:text-base/none laptop:tracking-wider inline-flex h-full items-center gap-2.5 px-4 text-sm/none font-normal tracking-tighter text-nowrap underline-offset-2 hover:underline"
			>SEE ALL</a
		>
	</div>

	<section
		{@attach observe}
		class="laptop:grid-cols-[1fr_1.6fr] laptop:gap-36 laptop:px-12 grid items-center gap-12 px-4 py-20"
	>
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
								<a href={website_link} target="_blank" class="btn-accent">Live Website</a>
								<a
									href={design_link}
									target="_blank"
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
			<div class="flex aspect-[9/5] justify-end overflow-hidden">
				{#key projects[activeProjectIdx].image}
					<img
						in:fly={{ y: '100%' }}
						out:fly={{ y: '-100%' }}
						src={projects[activeProjectIdx].image}
						class="aspect-[9/5] object-cover"
						alt="projects"
					/>
				{/key}
			</div>
		</section>
	</section>
</section>

<!-- src={projects[activeProjectIdx].image} -->
