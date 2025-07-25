import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async (e) => {
		const formData = await e.request.formData();
		console.log(formData);
		return { message: 'Your message has been successfully sent.' };
	}
};

export const ssr = false;
