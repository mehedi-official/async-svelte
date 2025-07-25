<script lang="ts">
	import { theme } from './theme.svelte';
	type activePage = 'home' | 'projects' | 'faq' | 'contact';
	type Props = {
		activePage: activePage;
	};
	let { activePage }: Props = $props();

	let pages = $state([
		{ name: 'home', label: 'HOME', href: '' },
		{ name: 'projects', label: 'PROJECTS', href: 'projects' },
		{ name: 'faq', label: 'FAQ', href: 'faq' }
	]);
	function changeTheme(themeName: string) {
		if (themeName === 'light') {
			theme.name = 'dark';
		}
		if (themeName === 'dark') {
			theme.name = 'light';
		}
	}
</script>

<nav
	class="text-content-default border-stroke-default flex h-16 items-center justify-between overflow-hidden border-y font-mono"
>
	<div
		class="border-stroke-default laptop:px-9 flex h-full items-center border-r px-4 text-xl/none font-normal"
	>
		Mehedi
	</div>

	<ul class="laptop:flex hidden items-center gap-9 text-sm/none font-normal tracking-wider">
		{#each pages as page}
			<li>
				<a
					href="/{page.href}"
					class={[
						'underline-offset-2 hover:underline',
						page.name === activePage && 'underline underline-offset-2'
					]}>{page.label}</a
				>
			</li>
		{/each}
		<button
			class="cursor-pointer px-2"
			aria-label="change theme"
			onclick={() => changeTheme(theme.name)}
		>
			{#if theme.name === 'light'}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.0001 8.52667C13.8952 9.66147 13.4693 10.7429 12.7722 11.6445C12.0751 12.5461 11.1357 13.2305 10.0639 13.6177C8.992 14.0049 7.83205 14.0787 6.71972 13.8307C5.6074 13.5827 4.58872 13.023 3.78287 12.2172C2.97703 11.4113 2.41735 10.3927 2.16933 9.28033C1.92131 8.16801 1.9952 7.00806 2.38236 5.9362C2.76953 4.86434 3.45394 3.92491 4.35553 3.22784C5.25712 2.53076 6.33859 2.10487 7.47339 2C6.809 2.89884 6.48929 4.0063 6.57241 5.12094C6.65553 6.23559 7.13596 7.28337 7.92632 8.07373C8.71668 8.86409 9.76447 9.34452 10.8791 9.42765C11.9938 9.51077 13.1012 9.19106 14.0001 8.52667V8.52667Z"
						stroke="#0D0D0D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_336_386)">
						<path
							d="M7.99996 11.3333C9.84091 11.3333 11.3333 9.84091 11.3333 7.99996C11.3333 6.15901 9.84091 4.66663 7.99996 4.66663C6.15901 4.66663 4.66663 6.15901 4.66663 7.99996C4.66663 9.84091 6.15901 11.3333 7.99996 11.3333Z"
							stroke="#F5F5F5"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 0.666626V1.99996"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 14V15.3333"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2.81335 2.81335L3.76002 3.76002"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.24 12.24L13.1867 13.1867"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M0.666626 8H1.99996"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14 8H15.3333"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2.81335 13.1867L3.76002 12.24"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.24 3.76002L13.1867 2.81335"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_336_386">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>
			{/if}
		</button>
		<a
			href="/contact"
			class={['btn underline-offset-2 hover:underline', activePage === 'contact' && 'underline']}
			>CONTACT WITH ME</a
		>
	</ul>

	<div class="laptop:hidden flex items-center">
		<button
			class="cursor-pointer px-2"
			aria-label="change theme"
			onclick={() => changeTheme(theme.name)}
		>
			{#if theme.name === 'light'}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.0001 8.52667C13.8952 9.66147 13.4693 10.7429 12.7722 11.6445C12.0751 12.5461 11.1357 13.2305 10.0639 13.6177C8.992 14.0049 7.83205 14.0787 6.71972 13.8307C5.6074 13.5827 4.58872 13.023 3.78287 12.2172C2.97703 11.4113 2.41735 10.3927 2.16933 9.28033C1.92131 8.16801 1.9952 7.00806 2.38236 5.9362C2.76953 4.86434 3.45394 3.92491 4.35553 3.22784C5.25712 2.53076 6.33859 2.10487 7.47339 2C6.809 2.89884 6.48929 4.0063 6.57241 5.12094C6.65553 6.23559 7.13596 7.28337 7.92632 8.07373C8.71668 8.86409 9.76447 9.34452 10.8791 9.42765C11.9938 9.51077 13.1012 9.19106 14.0001 8.52667V8.52667Z"
						stroke="#0D0D0D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_336_386)">
						<path
							d="M7.99996 11.3333C9.84091 11.3333 11.3333 9.84091 11.3333 7.99996C11.3333 6.15901 9.84091 4.66663 7.99996 4.66663C6.15901 4.66663 4.66663 6.15901 4.66663 7.99996C4.66663 9.84091 6.15901 11.3333 7.99996 11.3333Z"
							stroke="#F5F5F5"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 0.666626V1.99996"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 14V15.3333"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2.81335 2.81335L3.76002 3.76002"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.24 12.24L13.1867 13.1867"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M0.666626 8H1.99996"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14 8H15.3333"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2.81335 13.1867L3.76002 12.24"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.24 3.76002L13.1867 2.81335"
							stroke="#F5F5F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_336_386">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>
			{/if}
		</button>

		<button class="laptop:hidden cursor-pointer px-4" aria-label="open menu">
			{#if theme.name === 'light'}
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.5 10H17.5"
						stroke="#0D0D0D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.5 5H17.5"
						stroke="#0D0D0D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.5 15H17.5"
						stroke="#0D0D0D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.5 10H17.5"
						stroke="#F5F5F5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.5 5H17.5"
						stroke="#F5F5F5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.5 15H17.5"
						stroke="#F5F5F5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>
