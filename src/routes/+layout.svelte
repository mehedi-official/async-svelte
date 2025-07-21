<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div data-theme={theme.name} class="bg-surface-default">
	{@render children()}
</div>
