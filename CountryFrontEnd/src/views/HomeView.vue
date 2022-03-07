<script setup>
import CountryInfo from "@/components/CountryInfo.vue";
</script>

<template>
  <main class="w-full">
    <CountryInfo />
  </main>
  <div class="w-3/4 p-3 mb-5 border rounded-lg border-slate-400">
      <div>
        <h2 class="font-semibold text-center text-orange-500">Click on the button bellow to use the Internal API</h2>
        <p class="text-center">Before toggling the Internal API, set up the API as per instructions on the repo Readme file.</p>
      </div>
      <div class="flex justify-center">  
        <button
          v-show="this.$store.state.internalApi"
          type="button"
          class="pt-2 pb-2 pl-4 pr-4 mt-3 text-white bg-green-600 rounded-md"
          @click="toggleWorldBankApi"
          data-cy="toggleWorldBankApi">
          Toggle World Bank API
        </button>
        <button
          v-show="!this.$store.state.internalApi"
          type="button"
          class="pt-2 pb-2 pl-4 pr-4 mt-3 text-white bg-green-600 rounded-md"
          @click="toggleInternalApi"
          data-cy="toggleInternalApi">
          Toggle Internal API
        </button>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        internalApi: false,
      }
    },
    methods: {
      toggleInternalApi() {  
        this.internalApi = true
        this.$store.commit('toggleInternalApi', this.internalApi)
        this.$store.commit('clearCountry')         
      },
      toggleWorldBankApi() {  
        this.internalApi = false
        this.$store.commit('toggleInternalApi', this.internalApi)
        this.$store.commit('clearCountry')         
      }
    }
  }
</script>
