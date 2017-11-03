import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '~/locales/en';
import pl from '~/locales/pl';

Vue.use( VueI18n );

export default ( { app, store  } ) => {
	app.i18n = new VueI18n( {
		locale: store.state.i18n.locale,
		fallbackLocale: 'en',
		messages: {
			en,
			pl
		}
	} );
};
