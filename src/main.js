import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/styles/app.scss'
import { messages } from './assets/lang/ru'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ru',
  messages
})

Vue.config.productionTip = false
AOS.init({
  once: true,
  delay: 200
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
