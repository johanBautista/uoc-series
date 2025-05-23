import './assets/main.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { FontAwesomeIcon } from './plugins/fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
})
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
