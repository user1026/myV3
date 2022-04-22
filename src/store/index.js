import {
    defineStore
} from "pinia"
export const usestore = defineStore("userToken", {
    state:()=>{
return {
    token :""
}
    },
    actions:{
       setToken(val){
            this.token = val;
        }
    },
    getters:{
        getToken(){
            return this.token;
        }
    }
})
export const rightTabName=defineStore("rightTabName",{
    state:()=>{
        return {
            routerName:""
        }
    },
    actions:{
        setRouterName(val){
            this.routerName=val;
        }
    },
    getters:{
        getRouterName(){
            return this.routerName;
        }
    },
})