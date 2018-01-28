import Vuex from 'vuex'

import i18n from '~/store/modules/i18n'
import common from '~/store/modules/common'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			common,
			i18n
		}
	})
}

export default createStore
