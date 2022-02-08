import {
    get,
    post
} from "@/utils/http.js"
const userinfo = () => {
    const submit = (FormDatas) => {
        post("/login", FormDatas).then(res => {

        })
    };
    //记住密码功能
    const setuserinfo = (FormDatas) => {

    };
    const getuserinfo = () => {
        return {}
    };
    return {
        submit,
        setuserinfo,
        getuserinfo
    }
}
export default userinfo