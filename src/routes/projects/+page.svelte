<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import projectImg from '$lib/assets/project.png';

	let projects = new Map([
		[
			'atacama',
			{
				image:
					'https://cdn.dribbble.com/userupload/10527317/file/original-d38541285e75f6bf577d902857be69ca.png',
				title: 'Atacama',
				description: 'Climate Change Landing page',
				website_link: '/',
				design_link: 'https://dribbble.com/shots/22733005-Climate-Change-Website'
			}
		],
		[
			'terraforma',
			{
				image:
					'https://cdn.dribbble.com/userupload/18224382/file/original-bb9df7a88c8236bf2dadc0e901d09c3f.png',
				title: 'Terraforma',
				description: 'Architecture Company Landing page',
				website_link: 'https://terraforma.pages.dev/',
				design_link:
					'https://dribbble.com/shots/25405881-Terraforma-Green-Architecture-Company-Landing-Page-Website'
			}
		],
		[
			'senayan',
			{
				image:
					'https://cdn.dribbble.com/userupload/24538247/file/original-476ec69711246db762c00f29ee29c4ac.jpg',
				title: 'Senayan',
				description: 'Indonesian Restaurant Landing page',
				website_link: 'https://senayan.vercel.app/',
				design_link:
					'https://dribbble.com/shots/25610176-Redesign-Indonesian-Restaurant-Landing-Page-Concept'
			}
		],
		[
			'radiant',
			{
				image:
					'https://cdn.dribbble.com/userupload/10638210/file/original-a428053be0cabdc99b06c1a4eb4d2b98.jpg',
				title: 'Radiant',
				description: 'Health Monitoring Dashboard',
				website_link: 'https://health-dashboard.pages.dev/',
				design_link: 'https://dribbble.com/shots/22774085-Health-Monitoring-Dashboard'
			}
		],
		[
			'scale',
			{
				image:
					'https://cdn.dribbble.com/userupload/6646443/file/original-08ed80987d562acbe7f515416fb22459.png',
				title: 'Scale',
				description: 'Customer Onboarding for Financial Service',
				website_link: '/',
				design_link: 'https://dribbble.com/shots/21333133-Scale-Customer-Onboarding'
			}
		],
		[
			'remotin',
			{
				image:
					'https://cdn.dribbble.com/userupload/20758886/file/original-f8d81f7481082cc0af893ea6c8f1738f.png',
				title: 'Remotin',
				description: 'Remote worker provider Landing Page',
				website_link: 'https://remotin.vercel.app/',
				design_link:
					'https://dribbble.com/shots/25575713-Remotin-Remote-Worker-Service-Provider-Landing-Page'
			}
		],
		[
			'qether',
			{
				image: projectImg,
				title: 'Qether',
				description: 'Skin & Beauticare Landing Page',
				website_link: 'https://qether.vercel.app/',
				design_link:
					'https://www.behance.net/gallery/217637761/Qether-Skin-Care-Brand-Website-Brand-identity'
			}
		],
		[
			'ascone',
			{
				image:
					'https://cdn.dribbble.com/userupload/12038805/file/original-95dcd60b18eab4dde248f54cc32d16e9.png',
				title: 'Ascone',
				description: 'Financial Institution Landing Page',
				website_link: 'https://ascone.pages.dev/',
				design_link: 'https://dribbble.com/shots/23286378-Ascone-Finance-Landing-Page'
			}
		],
		[
			'oram',
			{
				image: projectImg,
				title: 'Oram',
				description: 'Furniture Landing Page',
				website_link: 'https://oram-furniture.vercel.app/',
				design_link:
					'https://www.figma.com/proto/YeEuqcs9KcTxiStZRdUSkL/Furniture-website-design?node-id=255-6&t=hjTRPKTGh6vTW3UX-1&scaling=scale-down-width&content-scaling=fixed&page-id=255%3A5'
			}
		]
	]);
</script>

<header>
	<Navbar activePage="projects" />

	<section class="laptop:px-6 px-4 pt-12 pb-24">
		<div class="mb-10">
			<h1 class="text-content-default mb-2 text-5xl font-medium tracking-tight">Projects</h1>
			<p class="text-content-intense max-w-108 text-base font-normal">
				Dive into a showcase of my latest work, meticulously crafted to inspire and elevate.
			</p>
		</div>

		<section class="laptop:grid-cols-2 grid gap-x-4 gap-y-8">
			{#each projects as [id, project]}
				<article class="grid gap-4">
					<header>
						<img class="aspect-[9/5.5] object-cover" src={project.image} alt={project.title} />
					</header>
					<div class="laptop:flex-row laptop:items-center flex flex-col justify-between gap-4">
						<div class="grid gap-1.5">
							<h2 class="text-content-default text-2xl/none font-medium tracking-tight">
								{project.title}
							</h2>
							<p class="text-content-subtle text-sm">{project.description}</p>
						</div>

						<footer
							class="laptop:flex-row inline-flex flex-row-reverse items-center justify-end gap-6"
						>
							<a
								target="_blank"
								href={project.design_link}
								class="text-content-default text-sm/none font-semibold tracking-tight underline-offset-2 hover:underline"
								>Design link</a
							>
							<a target="_blank" href={project.website_link} class="btn-accent">Live Website</a>
						</footer>
					</div>
				</article>
			{/each}
		</section>
	</section>
</header>
<Footer />

<svelte:head>
	<title>Projects — Mehedi's Portfolio Website</title>
</svelte:head>
