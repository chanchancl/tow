import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process.env.BASE_URL)
new Vue({
  render: h => h(App),
}).$mount('#app')
