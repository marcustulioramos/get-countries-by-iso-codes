<template>
    <div class="font-sans text-gray-700">
        <p>{{ title }}</p> 
        <a class="flex items-center" href="#" @click="proceedLogout">
          <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/></svg>
          Logout
        </a>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  
  computed: {
    ...mapState(['apiUrl', 'authUser', 'apiToken']),

    title() {
      return this.$route.meta.title
    },
  },

  methods: {
    ...mapMutations(['setAuthUser', 'setAuthUser']),

    proceedLogout() {
        localStorage.clear();
        this.$store.commit('setAuthUser', null)
        this.$store.commit('setApiToken', null)
        this.$router.push('/')
    },

    logoutEveryWhere() {
      axios.post(`${this.apiUrl}/logout`, {'api_token': this.apiToken})
           .then(r => this.proceedLogout())
           .catch(e => console.log(e))
    }
  }
}
</script>