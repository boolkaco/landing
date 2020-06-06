import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/styles/app.scss'

Vue.config.productionTip = false
AOS.init({
  once: true,
  delay: 200
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
