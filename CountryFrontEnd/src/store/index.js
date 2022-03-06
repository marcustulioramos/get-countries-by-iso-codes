import { createApp, resolveComponent } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      apiUrl: 'https://localhost:7232',
      countryCode:'',
      country: {
        Name:'',
        CountryCode:'',
        Region:'',
        CapitalCity:'',
        Longitude:'',
        Latitude:''
      },
      createOkMsg:'',
      createErrorMsg: '',
      errorMsg: '',
    }
  },
  mutations: {
    countryCode (state, countryCode) {
      state.countryCode = countryCode
    },
    clearCountryCode (state, countryCode) {
      state.countryCode = countryCode
    },
    clearErrorMsg (state, errorMsg) {
      state.errorMsg = errorMsg
    },
    clearCreateOkMsg (state, createOkMsg) {
      state.createOkMsg = createOkMsg
    },
    clearCreateErrorMsg (state, createErrorMsg) {
      state.createErrorMsg = createErrorMsg
    }
  },
  getter: {
    countryCode: state => state.countryCode,
    errorMsg: state => state.errorMsg,
    createOkMsg: state => state.createOkMsg,
    createErrorMsg: state => state.createErrorMsg,
    apiUrl: state => state.apiUrl
  },
  actions: {
    getCountry() {
      axios.get(`${this.state.apiUrl}/Countries/api/DetailsIso/${this.state.countryCode}`)
            .then((response) => {
              if (response.status === 200 && response.data) {
                  this.state.country.Name = response.data[0].name,
                  this.state.country.CountryCode = response.data[0].countryCode,
                  this.state.country.Region = response.data[0].region,
                  this.state.country.CapitalCity = response.data[0].capitalCity,
                  this.state.country.Longitude = response.data[0].longitude,
                  this.state.country.Latitude = response.data[0].latitude
                }
              })
              .catch((error) => {
                if (error.response.status === 404) {
                  console.log(error.response.status)
                  this.state.errorMsg = "The CountryCode is incorrect"
                  store.dispatch('clearCountryCode')
                }
            })
    },
    createCountry({ state, commit }, countryCreate) {
      return new Promise((resolve, reject) => {
        axios.post(`${this.state.apiUrl}/Countries`, countryCreate)
              .then((response) => {
                this.state.createOkMsg = "The country was added successfully!"
                resolve(response)
              })
              .catch((error) => {
                this.state.createErrorMsg = "Something wrong happened!"
                reject(error)
              })
      })
    },
    clearCountryCode (context) {
      context.commit('clearCountryCode')
    }
  }
})

export default store
