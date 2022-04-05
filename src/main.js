import {
    createApp
} from 'vue'
import App from './App.vue'
import "@/assets/css/init.css"
import router from "@/router/index.js";
import {
    Expand,
    HomeFilled
} from "@element-plus/icons-vue"
import {
    createPinia
} from "pinia"
const app = createApp(App)
const pinia = createPinia();
app.use(router);
app.use(pinia)
app.component("expand", Expand);
app.component("home-filled", HomeFilled)
app.mount('#app')