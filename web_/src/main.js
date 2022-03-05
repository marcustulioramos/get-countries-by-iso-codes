import Vue from 'vue'
import App from './App.vue'
 
import store from './store/index'
import router from './router'

import Loading from 'vue-loading-overlay'
import Toasted from 'vue-toasted'

import '@/components/global'
import './assets/tailwind.css'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Loading, { color: '#4299e1', loader: 'spinner', width: 64, height: 64, backgroundColor: '#000000', opacity: 0.5, zIndex: 999 })
Vue.use(Toasted, { theme: "bubble", position: "bottom-right", duration: 5000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
