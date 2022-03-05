
/**
 * Setup & export Vuex Store.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

window.cookie = require('vue-cookie')
window.axios = require('axios')
window.axios.defaults.headers.common = {
  'Accept': 'application/json',
  'CONTENT_TYPE': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
