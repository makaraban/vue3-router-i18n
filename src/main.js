import { createApp } from 'vue'
import router from './routes/index.js'
import i18n from './lang/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')