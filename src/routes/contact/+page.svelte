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
	let activeTab = $state(tablist[1].name);

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
		class="border-stroke-default grid h-[calc(100dvh-64px)] grid-cols-2 overflow-hidden border-b"
	>
		<section class="relative">
			<div class="h-full"><img src={contact_banner} class="h-full" alt="Contact Banner" /></div>

			<h1
				class="bg-primary absolute top-0 left-0 mt-5 ml-9 inline-flex p-2 text-sm/none font-medium tracking-wider text-[var(--text-btn)]"
			>
				CONTACT WITH ME
			</h1>
		</section>

		<section class="border-stroke-default overflow-y-scroll border-l">
			<div class="grid gap-10 px-6 py-12">
				<TabList {tablist} {activeTab} onTabChange={handleTabChange} />
				{@render tabContent(activeTab)}
			</div>
		</section>
	</section>
</header>
