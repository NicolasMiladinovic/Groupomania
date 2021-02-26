import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const token = localStorage.getItem('user')
if (token) {
  Vue.prototype.$token = JSON.parse(localStorage.user).token
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
