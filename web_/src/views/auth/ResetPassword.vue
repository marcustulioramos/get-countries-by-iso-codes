<template>
  <div class="bg-gray-500 h-screen pt-8">
    <div id="nav">
      <router-link to="/" class="text-4xl">Sindico</router-link>
    </div>
    <div class="max-w-sm mx-auto mt-8">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" v-model="user.email" disabled>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            New Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" v-model="user.password" placeholder="***********">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Confirm Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" v-model="user.password_confirmation" placeholder="***********">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" @click="proceedReset">
            Reset Password
          </button>
          <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Back to Login
          </router-link>
        </div>
      </div>
      <copy-rights />
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        user: { 
          token: this.$route.query.token,
          email: this.$route.query.email,
          password: '', 
          password_confirmation: '', 
        }
      }
    },

    computed: {
      ...mapState(['apiUrl'])  // assuming you are using namespaced modules
    },

    methods: {
      proceedReset() {
        this.$store.dispatch('resetPassword', this.user)
      }
    }
  }
</script>