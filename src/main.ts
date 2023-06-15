import './assets/main.css'

import { createApp } from 'vue'
// FIXME: Type Issue, might be a version problem
// @ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
