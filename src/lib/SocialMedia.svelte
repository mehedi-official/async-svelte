<script lang="ts">
	import {
		behance,
		dribbble,
		facebook,
		instagram,
		mail,
		telegram,
		twitter,
		whatsapp
	} from './Icons.svelte';

	const social_media = [
		{
			icon: facebook,
			label: 'Facebook',
			linkText: 'Visit My FB',
			href: 'https://www.facebook.com/profile.php?id=61579010990923'
		},
		{
			icon: twitter,
			label: 'Twitter',
			linkText: 'Visit My Twitter',
			href: 'https://x.com/mehedi_dev2'
		},
		{
			icon: instagram,
			label: 'Instagram',
			linkText: 'Visit My Instagram',
			href: 'https://www.instagram.com/mehedi.maximal/'
		},
		{
			icon: dribbble,
			label: 'Dribbble',
			linkText: 'Visit My Dribbble',
			href: 'https://dribbble.com/mehediofficial'
		},
		{
			icon: behance,
			label: 'Behance',
			linkText: 'Visit My Behance',
			href: 'https://www.behance.net/mehediofficial'
		}
	];
	// *:border-stroke-default *:nth-[3n+1]:border-stroke-default grid laptop:grid-cols-3 *:border-y *:border-r *:nth-[3n+1]:border-l *:nth-[n+4]:border-t-0
</script>

<section
	class="laptop:grid-cols-3 *:border-stroke-default laptop:*:border-y laptop:*:nth-[n+4]:border-t-0 laptop:*:border-l-0 laptop:*:nth-[3n-2]:border-l grid *:border *:border-t-0 *:first:border-t"
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
				target="_blank"
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
