import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const token = localStorage.getItem('user')
if (token) {
  Vue.prototype.$token = JSON.parse(localStorage.user).token
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
