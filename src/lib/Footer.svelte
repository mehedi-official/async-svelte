<footer class="border-stroke-default flex h-16 items-center justify-between border-y font-mono">
	<p class="text-content-intense laptop:px-6 px-4 text-sm font-normal tracking-tighter uppercase">
		© All rights reserved {new Date().getFullYear()}. Made by
		<button
			class="text-content-default cursor-pointer underline-offset-2 hover:underline"
			onclick={() => window.scrollTo(0, 0)}>Mehedi Hasan</button
		>
	</p>

	<section
		class="text-content-default laptop:flex hidden h-full text-sm/none font-normal tracking-wider"
	>
		<a
			target="_blank"
			href="https://wa.me/message/IJOXY5AGHVQ4L1"
			class="hover:bg-primary border-stroke-default flex items-center border-l px-6 hover:text-[var(--text-btn)]"
			>Whatsapp</a
		>
		<a
			target="_blank"
			href="https://www.instagram.com/mehedi.maximal/"
			class="hover:bg-primary border-stroke-default flex items-center border-l px-6 hover:text-[var(--text-btn)]"
			>Instagram</a
		>
		<a
			target="_blank"
			href="https://www.facebook.com/profile.php?id=61579010990923"
			class="hover:bg-primary border-stroke-default flex items-center border-l px-6 hover:text-[var(--text-btn)]"
			>Facebook</a
		>
		<a
			target="_blank"
			href="https://x.com/mehedi_dev2"
			class="hover:bg-primary border-stroke-default flex items-center border-l px-6 hover:text-[var(--text-btn)]"
			>Twitter</a
		>

		<a
			aria-label="scroll to top"
			href="/#"
			class="border-stroke-default bg-primary flex items-center border-l px-6"
			onclick={(e) => {
				e.preventDefault();
				window.scrollTo(0, 0);
			}}
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 19V5"
					stroke="#0D0D0D"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5 12L12 5L19 12"
					stroke="#0D0D0D"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</section>
</footer>
