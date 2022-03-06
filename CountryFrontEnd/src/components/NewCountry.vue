<template>
  <div v-show="this.$store.state.internalApi" class="w-auto p-3 mb-5 border rounded-lg border-slate-400">
    <h1 class="mb-3 text-lg text-orange-500">Add new country</h1>
    <div>
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.name"
              class="form-control w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="countryName"
              aria-describedby="emailHelp123"
              placeholder="Country Name"/>
          </div>
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.countryCode"
              class="form-control w-full float-left px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="countryCode"
              placeholder="Code"
              maxlength = "3"/>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.capitalCity"
              class="form-control w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="capitalCity"
              aria-describedby="emailHelp123"
              placeholder="Capital City"/>
          </div>
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.region"
              class="form-control w-full float-left px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="region"
              placeholder="Region"/>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.longitude"
              class="form-control w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="longitude"
              aria-describedby="emailHelp123"
              placeholder="Longitude"/>
          </div>
          <div class="mb-6 form-group">
            <input
              type="text"
              required
              v-model="countryCreate.latitude"
              class="form-control w-full float-left px-3 py-1.5 text-base font-normal text-slate-500 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-transparent focus:border-orange-500 focus:outline-none"
              id="latitude"
              placeholder="Latitude"/>
          </div>
        </div>
       
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
          Submit
        </button>
      </form>
      <div>
        <p class="mt-2 mb-2" :class="success ? 'text-green-500' : 'text-red-500'">{{ this.responseMsg }}</p>
    </div>
    
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
          countryCreate: {
            name: '',
            countryCode: '',
            region: '',
            capitalCity: '',
            longitude: '',
            latitude: '',
          },
          responseMsg: '',
          success: false,
      }
    },
    methods: {
      ...mapActions(['createCountry']),
      
      submitForm() {
        console.log(this.countryCreate)
        this.createCountry(this.countryCreate)
          .then((response) => {
              this.success = true
              this.responseMsg = this.$store.state.createOkMsg
          })
          .catch((error) => {
            this.responseMsg = this.$store.state.createErrorMsg
          })       
      }
    }
  }
</script>
