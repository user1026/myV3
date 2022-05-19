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
export const rightTabName = defineStore("rightTabName", {
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
        getRouterInfo(state) {
            return state.routerInfo;
        },

    },
})