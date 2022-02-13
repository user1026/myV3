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
            }
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