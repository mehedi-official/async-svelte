<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div data-theme={theme.name} class="bg-surface-default">
	{@render children()}
</div>

<style>
	/* geist-latin-wght-normal */
	@font-face {
		font-family: 'Geist Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 100 900;
		src: url(@fontsource-variable/geist/files/geist-latin-wght-normal.woff2)
			format('woff2-variations');
		unicode-range:
			U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329,
			U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* geist-mono-latin-wght-normal */
	@font-face {
		font-family: 'Geist Mono Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 100 900;
		src: url(@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2)
			format('woff2-variations');
		unicode-range:
			U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329,
			U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
</style>
