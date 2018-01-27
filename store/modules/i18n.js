const state = () => {
	return {
		locales: ['en', 'pl'],
		locale: 'en'
	}
}

const mutations = {
	SET_LANG (state, locale) {
		if (state.locales.includes(locale)) {
			state.locale = locale
			this.app.i18n.locale = locale
		}
	}
}

export default {
	state,
	mutations
}
