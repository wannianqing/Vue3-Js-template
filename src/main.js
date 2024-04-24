import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import '@/assets/styles/global.scss'
import webmonitor from '@nwmonitor/core'

const app = createApp(App)
app.use(webmonitor)

app.use(store).use(router).mount('#app')
