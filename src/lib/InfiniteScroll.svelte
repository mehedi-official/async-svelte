<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		gap = 16,
		direction = 'normal'
	}: { gap?: number; direction?: 'normal' | 'reverse'; children: Snippet } = $props();
</script>

<div
	style="--gap: {gap / 16}rem; --direction: {direction}"
	class="scroll-container laptop:max-w-[23.75rem] max-w-[20rem]"
>
	<div class="scroller first-child">{@render children?.()}</div>
	<div class="scroller last-child">{@render children?.()}</div>
</div>

<style>
	.scroll-container {
		display: flex;
		user-select: none;
		gap: var(--gap);
		overflow: hidden;
		/* mask-image: linear-gradient(to right, transparent, #000 5% 95%, transparent); */

		&:hover .scroller {
			animation-play-state: paused;
		}
	}

	.scroller {
		animation: scroll 15s linear infinite;
		animation-direction: var(--direction);
	}

	/* .first-child {
        background: red;
    }

    .last-child {
        background: yellow;
    } */

	@keyframes scroll {
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
