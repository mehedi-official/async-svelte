class Theme {
	#themeName = $state('');
	constructor() {
		if (typeof localStorage !== 'undefined') {
			if (localStorage.getItem('theme') !== null) {
				this.#themeName = localStorage.getItem('theme') as string;
			}

			if (localStorage.getItem('theme') === null) {
				this.#themeName = 'light';
				localStorage.setItem('theme', 'light');
			}
		}
	}

	set name(v: string) {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', v);
		}
		this.#themeName = v;
	}

	get name(): string {
		return this.#themeName;
	}
}

export const theme = new Theme();
