import { createApp } from 'vue'
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
    }
  },
  getter: {
    countryCode: state => state.countryCode,
    errorMsg: state => state.errorMsg,
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
    clearCountryCode (context) {
      context.commit('clearCountryCode')
    }
  }
})

export default store
