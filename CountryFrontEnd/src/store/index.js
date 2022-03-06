import { createApp, resolveComponent } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      internalApiUrl: 'https://localhost:7232',
      worldBankApiUrl: 'http://api.worldbank.org/v2/country/',
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
      internalApi: false,
    }
  },
  mutations: {
    countryCode (state, countryCode) {
      state.countryCode = countryCode
    },
    clearCountry (state, countryCode) {
      state.country.Name = '',
      state.country.CountryCode = '',
      state.country.Region = '',
      state.country.CapitalCity = '',
      state.country.Longitude = '',
      state.country.Latitude = ''
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
      if (!this.state.internalApi) {
        return new Promise((resolve, reject) => {
          axios.get(`${this.state.worldBankApiUrl}${this.state.countryCode}?format=json`)
                .then((response) => {
                      this.state.country.Name = response.data[1][0].name,
                      this.state.country.CountryCode = response.data[1][0].iso2Code,
                      this.state.country.Region = response.data[1][0].region.value,
                      this.state.country.CapitalCity = response.data[1][0].capitalCity,
                      this.state.country.Longitude = response.data[1][0].longitude,
                      this.state.country.Latitude = response.data[1][0].latitude,
                      resolve(response)
                })
                  .catch((error) => {
                      this.state.errorMsg = "The ISO code is invalid"
                      store.dispatch('clearCountryCode')
                      store.dispatch('clearCountry')
                      reject(error)
                })
        })
      }
      if (this.state.internalApi) {
        axios.get(`${this.state.internalApiUrl}/Countries/api/DetailsIso/${this.state.countryCode}`)
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
                    this.state.errorMsg = "The ISO code is invalid"
                    store.dispatch('clearCountryCode')
                  }
              })
      }
    },
    createCountry({ state, commit }, countryCreate) {
      return new Promise((resolve, reject) => {
        axios.post(`${this.state.internalApiUrl}/Countries`, countryCreate)
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
    },
    clearCountry (context) {
      context.commit('clearCountry')
    }
  }
})

export default store
