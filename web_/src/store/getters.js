
import _ from 'lodash';

/**
 * https://vuex.vuejs.org/guide/getters.html
 * Vuex getters should be used to retrieve items from the store,
 * rather than directly referencing the store state. They are like 
 * computed properties for stores. 1st arg is state and second can 
 * be "getters". You can pass arguments by returning a function.
 */

export const isAuthenticated = (state) => {
    if (!! state.apiToken) return true

    if (!! sessionStorage.getItem('token')) return true

    if (!! cookie.get('token')) return true

    return false
}
