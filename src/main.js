import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import store from '@/store'
import * as filters from '@/filters'
// createApp(App)
//     .use(router)
//     .use(store)
//     .mount('#app')
// import { createApp } from "vue";
// import router from "./router";
// import store from "./store";
// import "./style.css";
// import App from "./App.vue";
// import * as filters from './filters'


const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters
