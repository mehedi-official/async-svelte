<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	// const handleEnhance: SubmitFunction = async (e) => {

	//     console.log(e);

	// 	return (r) => {
	//         console.log(r);

	//     }
	// }
</script>

<form action="?/sendMessage" method="post" use:enhance>
	<section class="grid gap-4">
		<div class="text-content-default grid gap-2 text-base/none font-normal">
			<label for="fullname" class="block">Name</label>
			<input
				placeholder="Daniel Park"
				name="fullname"
				type="text"
				id="fullname"
				class="border-stroke-subtle block w-full border p-3 tracking-tighter"
			/>
		</div>

		<div class="text-content-default grid gap-2 text-base/none font-normal">
			<label for="email" class="block">Email Address</label>
			<input
				placeholder="jake@gmail.com"
				name="email"
				type="email"
				id="email"
				class="border-stroke-subtle block w-full border p-3 tracking-tighter"
			/>
		</div>

		<div class="text-content-default grid gap-2 text-base/none font-normal">
			<label for="message" class="block">Name</label>
			<textarea
				rows="8"
				placeholder="Describe your message / project / any questions etc... "
				name="message"
				id="message"
				class="border-stroke-subtle block w-full border p-3 tracking-tighter"
			></textarea>
		</div>

		<button type="submit" class="btn-accent w-fit cursor-pointer justify-self-end"
			>Send Message</button
		>
	</section>
</form>
