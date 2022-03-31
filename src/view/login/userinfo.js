import {
    get,
    post
} from "@/utils/http.js"

import {
    usestore
} from "@/store/index.js"
const userinfo = () => {
    const submit = (FormDatas) => {
        const userToken = usestore();
        post("/login", FormDatas).then(res => {
            if (res.data.code == 200) {
                window.sessionStorage.setItem("token", res.data.token);
                userToken.setToken(res.data.token)
                getuserinfo(res.data.token)
            }
        })
    };
    //记住密码功能
    const setuserinfo = (FormDatas) => {

    };
    const getuserinfo = (token) => {
        post("/getuserinfo", {
            token
        }).then(res => {
            console.log(res)
        })
        return res.data
    };
    const add = () => {

    }
    return {
        submit,
        setuserinfo,
        getuserinfo,
        add
    }
}
export default userinfo