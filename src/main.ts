import './assets/main.css'

import { createApp } from 'vue'
// FIXME: Type Issue, might be a version problem
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
