import {
    defineStore
} from "pinia"
import {ref} from "vue"
export const usestore = defineStore("userToken", () => {
    let token = "";
    
    const setToken = (val) => {
        console.log("setToken")
        token = val;
    }
    const getToken = () => {
        return token;
    }
   
    return {
        token,
        setToken,
        getToken,
    }
})
export const rightTabName=defineStore("tabName",()=>{
    let routerName=ref("1233");
    const setRouterName=(val)=>{
        routerName.value=val;
    }
    const getRouterName=()=>{
        return routerName.value;
    }
    return {
        routerName:routerName.value,
        setRouterName,
        getRouterName
    }
})