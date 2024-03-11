import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import the router

createApp(App)
  .use(router) // use the router
  .mount('#app')