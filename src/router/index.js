import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import {
    RouterInfo
} from "@/store/index.js"
const page404 = () => import("@/view/baseHtml/404/404.vue");
const login = () => import("@/view/baseHtml/login/login.vue"); 
const routes = [{
        path: "/login",
        component: login,
        meta: {
            title: "登陆页"
        }
    },
    {
        path: "/404",
        component: page404,
        meta: {
            title: "404页"
        }
    },

    {
        path: "/:pathMatch(.*)",
        redirect: "/404",
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    const tabName = RouterInfo();
    let routeList = to.matched.map(v => {
        return {
            name: v.meta.title,
            path: v.path
        }
    })
    let routerInfo = {
        name: to.meta.title,
        path: to.fullPath,
        routeList
    }
    tabName.setRouterInfo(routerInfo)
    console.log("pinia在前置路由中title值:" + JSON.stringify(tabName.getRouterInfo))

})
export default router