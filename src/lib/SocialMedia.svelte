<script lang="ts">
	import { mail, telegram, whatsapp } from './Icons.svelte';

	const social_media = [
		{ icon: mail, label: 'Facebook', linkText: 'Visit My FB', href: 'gmail.com' },
		{ icon: whatsapp, label: 'Twitter', linkText: 'Visit My Twitter', href: 'whatsapp.com' },
		{ icon: telegram, label: 'Instagram', linkText: 'Visit My Instagram', href: 'telegram.com' },
		{ icon: mail, label: 'Dribbble', linkText: 'Visit My Dribbble', href: 'telegram.com' },
		{ icon: whatsapp, label: 'Behance', linkText: 'Visit My Behance', href: 'telegram.com' }
	];
</script>

<section
	class="*:border-stroke-default *:nth-[3n+1]:border-stroke-default grid grid-cols-3 *:border-y *:border-r *:nth-[3n+1]:border-l *:nth-[n+4]:border-t-0"
>
	{#each social_media as social}
		<article
			class="hover:bg-stroke-dimmed group text-content-default cursor-pointer font-mono font-normal uppercase"
		>
			<div class="flex flex-col gap-28 p-8">
				{@render social.icon()}

				<p class="text-base/none tracking-wider">{social.label}</p>
			</div>
			<a
				href={social.href}
				class="group-hover:bg-primary border-stroke-default flex items-center justify-between border-t px-2.5 py-3 text-xs/none tracking-tight group-hover:text-[var(--text-btn)]"
			>
				{social.linkText}
				<svg
					class="stroke-content-default group-hover:stroke-[var(--text-btn)]"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3.5 8.5L8.5 3.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3.5 3.5H8.5V8.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</article>
	{/each}
</section>
