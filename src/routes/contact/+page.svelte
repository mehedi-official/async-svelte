<script lang="ts">
	import Dm from '$lib/Dm.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Quotation from '$lib/Quotation.svelte';
	import SocialMedia from '$lib/SocialMedia.svelte';
	import TabList from '$lib/TabList.svelte';
	import contact_banner from '$lib/assets/faq.png';
	type Tabs = 'quote' | 'dm' | 'social';

	const tablist: { name: Tabs; label: string }[] = [
		{ name: 'quote', label: 'Get Quote' },
		{ name: 'dm', label: 'DM Me' },
		{ name: 'social', label: 'Social Media' }
	];
	let activeTab = $state(tablist[0].name);

	function handleTabChange(tabName: Tabs): void {
		activeTab = tabName;
	}
</script>

{#snippet tabContent(tabName: Tabs)}
	{#if tabName === 'quote'}
		<Quotation />
	{:else if tabName === 'dm'}
		<Dm />
	{:else if tabName === 'social'}
		<SocialMedia />
	{/if}
{/snippet}

<header>
	<Navbar activePage="contact" />

	<section
		class="border-stroke-default laptop:h-[calc(100dvh-64px)] laptop:grid-cols-2 grid overflow-hidden border-b"
	>
		<section class="relative">
			<div class="h-full">
				<img
					src="https://www.nineblaess.de/wp-content/uploads/2024/08/Free-business-card-mockup-by-Is-Graphics-1024x768.jpg"
					class="h-full"
					alt="Contact Banner"
				/>
			</div>

			<h1
				class="bg-primary laptop:ml-9 absolute top-0 left-0 mt-5 ml-4 inline-flex p-2 text-sm/none font-medium tracking-wider text-[var(--text-btn)]"
			>
				CONTACT WITH ME
			</h1>
		</section>

		<section class="border-stroke-default overflow-y-scroll border-l">
			<div class="laptop:px-6 grid gap-10 px-3 py-12">
				<TabList {tablist} {activeTab} onTabChange={handleTabChange} />
				{@render tabContent(activeTab)}
			</div>
		</section>
	</section>
</header>
