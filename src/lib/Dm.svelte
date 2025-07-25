<script lang="ts">
	import { mail, telegram, whatsapp } from './Icons.svelte';

	const dmList = [
		{ icon: mail, label: 'Email', linkText: 'Email me on Gmail', href: 'gmail.com' },
		{ icon: whatsapp, label: 'Whatsapp', linkText: 'DM on Whatsapp', href: 'whatsapp.com' },
		{ icon: telegram, label: 'Telegram', linkText: 'DM on Telegram', href: 'telegram.com' }
	];
</script>

<section
	class="*:border-stroke-default laptop:*:nth-[3n+1]:border-stroke-default laptop:grid-cols-3 laptop:*:not-first:border-t laptop:*:not-first:border-l-0 grid *:border *:border-t-0 *:first:border-t"
>
	{#each dmList as dm}
		<article
			class="hover:bg-stroke-dimmed group text-content-default cursor-pointer font-mono font-normal uppercase"
		>
			<div class="flex flex-col gap-28 p-8">
				{@render dm.icon()}

				<p class="text-base/none tracking-wider">{dm.label}</p>
			</div>
			<a
				href={dm.href}
				class="group-hover:bg-primary border-stroke-default flex items-center justify-between border-t px-2.5 py-3 text-xs/none tracking-tight group-hover:text-[var(--text-btn)]"
			>
				{dm.linkText}
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
	<!-- <article class="hover:bg-stroke-dimmed cursor-pointer group font-normal text-content-default uppercase font-mono">
        <div class="p-8 flex flex-col gap-28">
            <svg class="stroke-content-default" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="text-base/none tracking-wider">Email</p>
        </div>
        <a href="/" class="text-xs/none group-hover:bg-primary group-hover:text-[var(--text-btn)] tracking-tight py-3 px-2.5 flex items-center border-t border-stroke-default">Email Me</a>
    </article>
    <article class="font-normal text-content-default uppercase font-mono">
        <div class="p-8 flex flex-col gap-28">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="text-base/none tracking-wider">Email</p>
        </div>
        <a href="/" class="text-xs/none tracking-tight py-3 px-2.5 flex items-center border-t border-stroke-default">Email Me</a>
    </article>
    <article class="font-normal text-content-default uppercase font-mono">
        <div class="p-8 flex flex-col gap-28">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="text-base/none tracking-wider">Email</p>
        </div>
        <a href="/" class="text-xs/none tracking-tight py-3 px-2.5 flex items-center border-t border-stroke-default">Email Me</a>
    </article>
    <article class="font-normal text-content-default uppercase font-mono">
        <div class="p-8 flex flex-col gap-28">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="text-base/none tracking-wider">Email</p>
        </div>
        <a href="/" class="text-xs/none tracking-tight py-3 px-2.5 flex items-center border-t border-stroke-default">Email Me</a>
    </article> -->
</section>
