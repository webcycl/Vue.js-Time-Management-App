import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/router'
import './assets/main.css'
const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error("Global Vue Error:", err, info)

  // prevent infinite loops
  if (router.currentRoute.value.name !== "Error") {
    router.replace("/error")
  }
}

createApp(App)
  .use(router)
  .mount('#app')
