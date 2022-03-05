export const authenticate = ({ state, commit }, credentials) => {
    return new Promise((resolve, reject) => {

        axios.get(`${state.apiUrl}/token`, credentials)
            .then((response) => {
                if (response.status === 200 && response.data.user) {
                    commit('startApplication', response.data)
                    resolve(response)
                }
                reject('There was an error in the API!')
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const checkToken = ({ state, commit }) => {
    return new Promise((resolve, reject) => {
        if (!!state.apiToken) resolve()

        let token = sessionStorage.getItem('token') || cookie.get('token') || null

        if (token) {
            axios.get(`${state.apiUrl}/user`, { headers: { Authorization: `Bearer ${token}` } })
                .then((r) => {
                    resolve(r)
                })
                .catch((e) => {
                    commit('endApplication')
                    reject(e)
                })
        } else {
            commit('endApplication')
            reject('not logged in!')
        }
    })
}

export const resetPassword = ({ state, commit }, user) => {
    axios.post(`${state.apiUrl}/reset-password`, user)
        .then((response) => {
            if (response.status === 200) router.push('/login') // success toast maybe
            else console.log(response.message) // fail toast
        })
        .catch((error) => {
            console.log(error) // fail toast
        })  
}