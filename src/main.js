import Vue from 'vue'
import App from './App.vue'

import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')