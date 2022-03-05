<template>
  <div class="relative h-screen pt-8 bg-gray-500">
    <div id="nav">
      <router-link to="/" class="text-4xl">BUD Task</router-link>
    </div>
    <div class="max-w-xs mx-auto mt-8">
      <div class="px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
            Email
          </label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email" type="text" v-model="credentials.Email" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
            Password
          </label>
          <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password" type="password" v-model="credentials.Password"  placeholder="**************">
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="remember">
            <input class="mr-2 leading-tight" type="checkbox" id="remember" v-model="remember">
            <span class="text-sm">
              Remember me
            </span>
          </label>
        </div>
        <div class="flex items-center justify-between"> 
          <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button" @click="login">
            Sign In
          </button>
          <router-link to="/recover-password" class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800">
            Forgot Password?
          </router-link>
        </div>
      </div>
      <copy-rights />
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        credentials: { grant_type: 'password', Email: '', Password: ''},
        remember: false 
      }
    },

    methods: {
      ...mapActions(['authenticate']),

      login() {
        let loader = this.$loading.show()

        this.$store.commit('remember', this.remember)

        this.authenticate(this.credentials)
          .then((response) => {
            loader.hide()
            this.$router.push('app')
          })
          .catch((error) => {
            loader.hide()
            this.credentials = { Email: '', Password: '' }
            this.$toasted.show(error, { type: "error" })
          })
      }
    }
  }
</script>
