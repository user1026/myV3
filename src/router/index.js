import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

const routes = [{
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: () => import("@/view/login/login.vue")
    },
    {
        path: "/index",
        component: () => import("@/view/index.vue")
    },
];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})