import {get,post} from "@/utils/http.js"
const userinfo=()=>{
    const submit=(FormData,type)=>{
        post().then(res=>{

        })
    };
    //记住密码功能
    const setuserinfo=(FormData)=>{
        
    };
    const getuserinfo=()=>{
        return {}
    };
    return {submit,setuserinfo,getuserinfo}
}
export default userinfo