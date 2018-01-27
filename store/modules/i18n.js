import * as types from '@/store/mutation-types'

const state = () => {
	return {
		locales: ['en', 'pl'],
		locale: 'en'
	}
}

const mutations = {
	[types.SET_LANGUAGE] (state, locale) {
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
