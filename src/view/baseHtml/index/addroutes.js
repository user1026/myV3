import {
    useRouter
} from "vue-router"
export const addRoutes = (data) => {
    const router = useRouter();
    data = data.map(val => {
        if (val.children) {

        } else {

        }
    })
    router.addRoute(data)
}