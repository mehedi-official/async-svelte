<script lang="ts">
	type Tabs = 'quote' | 'dm' | 'social';
	type Props = {
		tablist: { name: Tabs; label: string }[];
		activeTab: Tabs;
		onTabChange: (tabName: Tabs) => void;
	};

	let { tablist, activeTab, onTabChange }: Props = $props();
</script>

<div
	class="border-stroke-default text-content-default grid grid-cols-3 border font-mono text-xs/none font-normal tracking-wider"
>
	{#each tablist as tab, idx}
		<button
			onclick={() => onTabChange(tab.name)}
			class={[
				'inline-flex h-12 cursor-pointer items-center justify-center py-4 uppercase underline-offset-2 hover:underline',
				idx !== 0 && 'border-stroke-default border-l',
				activeTab === tab.name && 'bg-content-default text-surface-default'
			]}>{tab.label}</button
		>
	{/each}
</div>
