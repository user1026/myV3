import {
    defineStore
} from "pinia"
export const usestore = defineStore("userToken", {
    state: () => {
        return {
            token: ""
        }
    },
    actions: {
        setToken(val) {
            this.token = val;
        }
    },
    getters: {
        getToken() {
            return this.token;
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
export const leftActive = defineStore("leftActive", {
    state: () => {
        return {
            leftActivePath: "",
        }
    },
    actions: {
        setLeftActivePath(val) {

            this.leftActivePath = val;
        }
    },
    getters: {
        getLeftActivePath() {
            return this.leftActivePath;
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