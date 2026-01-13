import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/router'
import './assets/main.css'

createApp(App)
  .use(router)
  .mount('#app')
