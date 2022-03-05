<template>
  <div class="flex h-screen bg-white">
    <sidebar/>
    <div class="flex flex-col flex-1 h-screen overflow-y-hidden">
      <header_main class="flex items-center justify-between h-12 px-5 border-b border-gray-400"/>
      <div class="flex-1 mb-auto overflow-y-hidden">
        <router-view class="p-3 overflow-x-hidden"/>
      </div>
      <footer_main class="flex items-center justify-between h-10 px-5 bg-gray-300"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  mounted() {
    this.$toasted.show("Welcome", { type: "success" })
  },

  computed: {
    ...mapState(['apiUrl', 'authUser', 'apiToken'])
  },

  methods: {
    ...mapMutations(['setAuthUser', 'setAuthUser']),

    proceedLogout() {
      let loader = this.$loading.show()

      setTimeout(() => {          
        this.$store.commit('endApplication')
        this.$router.push('/')
        loader.hide()
      }, 2000);
    },

    logoutEveryWhere() {
      axios.post(`${this.apiUrl}/logout`, {'api_token': this.apiToken})
           .then(r => this.proceedLogout())
           .catch(e => console.log(e))
    },

    showLoading() {
      this.$store.dispatch('showLoading')
    }
  }
}
</script>
