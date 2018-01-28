import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '~/locales/en'
import pl from '~/locales/pl'

Vue.use(VueI18n)

export default async ({ app, store }) => {
	// mock API - get app language
	const locale = await new Promise(resolve => {
		setTimeout(() => resolve('en'), 10)
	})

	app.i18n = new VueI18n({
		fallbackLocale: 'en',
		messages: {
			en,
			pl
		},
		locale
	})
}
