<template>
  <div class="greetings">
    <p v-if="(!this.$store.state.internalApi)" class="mb-5 text-3xl text-orange-500" data-cy="SearchTittle">World Bank Api</p>
    <p v-if="(this.$store.state.internalApi)" class="mb-5 text-3xl text-orange-500" data-cy="SearchTittle">Internal Api</p>
    <h2 class="text-base text-slate-300">Type the ISO Country Code:</h2>
    <div>
      <input
        type="text"
        id="countryCodeInput"
        v-model="countryCode"
        ref="countryCode"
        class="w-full px-3 py-2 mt-1 mb-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-pink-500"
        data-cy="SearchBar"
        maxlength = "3"/>
    </div>
    <div>
      <p class="mb-2 text-red-500">{{ this.$store.state.errorMsg }}</p>
    </div>
    <div>
      <button
        type="button"
        class="pt-2 pb-2 pl-4 pr-4 mb-10 text-white bg-orange-500 rounded-md"
        @click="searchCountry"
        data-cy="SearchBtn">
        Search
      </button>
      <button
        type="button"
        class="pt-2 pb-2 pl-4 pr-4 mb-10 ml-5 text-white rounded-md bg-slate-500"
        @click="reset"
        data-cy="ResetBtn">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        countryCode: '',
        errorMsg: '',
      }
    },
    methods: {
      ...mapActions(['getCountry']),
      searchCountry() {
        this.$store.commit('clearErrorMsg', this.errorMsg)
        this.$store.commit('countryCode', this.countryCode)
        this.getCountry(this.countryCode)
          .then((response) => {
            })
            .catch((error) => {
              
            })
        
        this.countryCode = ""        
      },
      reset() {
        this.countryCode = "" 
        this.errorMsg = ''       
        this.$store.commit('clearErrorMsg', this.errorMsg)
        this.$store.commit('clearCountryCode', this.countryCode)        
      },
    }
  }
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
