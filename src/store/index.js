import {
    defineStore
} from "pinia"
export const userInfo = defineStore("userInfo", {
    state: () => {
        return {
            userInfo:{},
            token:"",
        }
    }
})
export const RouterInfo = defineStore("RouterInfo", {
    state: () => {
        return {
            routerInfo: {
                name: "",
                path: ""
            }
        }
    },
    actions: {
        setRouterInfo(val) {
            this.routerInfo = val;
        }
    },
    getters: {
        getRouterInfo() {
            return this.routerInfo;
        },

    },
})
export const getMenuList = defineStore("getMenuList", {
    state: () => {
        return {
            MenuList: []
        }
    },
    actions: {
        setMenuList(val) {

            this.MenuList = val;
        }
    },
    getters: {
        getMenuList() {
            return this.MenuList;
        }
    }

})