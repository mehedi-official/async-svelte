import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async (e) => {
		const formData = await e.request.formData();
		return { message: 'Message Received Successfully' };
	}
};

export const ssr = false;
