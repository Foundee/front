import Vuex from 'vuex'

import i18n from '~/store/modules/common'
import common from '~/store/modules/i18n'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			common,
			i18n
		}
	})
}

export default createStore
