import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import {
    rightTabName
} from "@/store/index.js"
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

        children: [{
                path: "home",
                component: () => import("@/view/index/index.vue"),
                meta: {
                    title: "首页"
                }
            },
            //{
            //     path: "one",
            //     component: () => import("@/view/index/one.vue"),
            //     meta: {
            //         title: "one"
            //     }
            // }, {
            //     path: "two",
            //     component: () => import("@/view/index/two.vue"),
            //     meta: {
            //         title: "two"
            //     }
            // }
        ],
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
    const tabName = rightTabName();
    tabName.setRouterName(to.meta.title)

     console.log("pinia在前置路由中title值:" + tabName.getRouterName)
})
export default router