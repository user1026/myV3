import {
    createApp
} from 'vue'
import App from './App.vue'
import "@/assets/css/init.css"
import {
    createPinia
} from "pinia"
import router from "./router/index";
// import {
//     Expand,
//     HomeFilled
// } from "@element-plus/icons-vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia();
app.use(pinia)
app.use(router);
// app.component("expand", Expand);
// app.component("home-filled", HomeFilled)
app.mount('#app')