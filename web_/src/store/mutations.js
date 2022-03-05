var md5 = require('md5');
/**
 * Vuex mutations should be used to update items in the store,
 * rather than directly manipulating the store state.
 */

export const setAuthUser = (state, user) => {
    state.authUser = user;
}

export const remember = (state, remember) => {
    state.remember = remember;
}
 
export const startApplication = (state, data) => {
    if (!data) return
    
    let token = md5(data.user.id.toString()).substring(0, 10) + data.token

    state.apiToken = token
    state.authUser = data.user
    sessionStorage.setItem('token', token);

    if (state.remember) {
        cookie.set("token", token, 90)
        cookie.set("userId", data.user.id, 90)
    }
}

export const endApplication = (state) => {
    state.apiToken = null
    state.authUser = null
    sessionStorage.removeItem('token')
    cookie.delete("token")
    cookie.delete("userId")
}
