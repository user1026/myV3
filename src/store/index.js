import {
    defineStore
} from "pinia"
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
    let routerName="";
    const setRouterName=(val)=>{
        routerName=val;
    }
    const getRouterName=()=>{
        return routerName;
    }
    return {
        routerName,
        setRouterName,
        getRouterName
    }
})