import router from "@/router/index.js"
import {rightTabName} from "@/store/index.js"
const tabName=rightTabName();
router.beforeEach((to, from) => {
     console.log(to, from)
    tabName.setRouterName(to.meta.title)
})

export default router