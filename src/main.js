import {
    createApp
} from 'vue'
import App from './App.vue'
import "@/assets/css/init.css"
import {
    createPinia
} from "pinia"
import router from "./utils/routerUtils";
import {
    Expand,
    HomeFilled
} from "@element-plus/icons-vue"
import "./utils/routerUtils"
const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(router);
app.component("expand", Expand);
app.component("home-filled", HomeFilled)
app.mount('#app')
