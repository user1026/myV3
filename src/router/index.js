import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

const index = () => import("@/view/baseHtml/home/home.vue");
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
        path: "/",
        component: index,
        meta: {
            title: "首页"
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
    console.log(to, from)
})
export default router