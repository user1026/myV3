import {
    get,
    post
} from "@/utils/http.js"
import {
    LeftMenuList,
    routeList
} from "@/utils/routerUtils.js"
import {
    userToken,
    userInfo,
    getMenuList
} from "@/store/index.js"
const userinfo = () => {
    //提交
    const submit = async (FormDatas) => {
        const usertoken = userToken();
        let token = await post("/login", FormDatas).then(async res => {

            window.sessionStorage.setItem("token", res);
            usertoken.setToken(res)
            await getuserinfo(res)
            await getUserMenuList(res)
            return res

        })
        return token
    };
    //记住密码功能
    const setUser = (FormDatas) => {
        var user = window.btoa(`${FormDatas.username}-${FormDatas.password}`);
        window.localStorage.setItem("user", user);
        window.localStorage.setItem("isRemember", true);
    };
    const removeUser = () => {
        window.localStorage.setItem("isRemember", false);
        window.localStorage.removeItem("user");
    }
    const getuserinfo = async (token) => {
        const userinfo = userInfo();
        let user = await post("/getuserinfo", {
            token
        }).then(res => {
            console.log(res)
            userinfo.setuserinfo(res);
            return res;
        })
        return user;
    };
    //获取菜单
    const getUserMenuList = async (token) => {
        let menulist = await post("/getMenuList", {
            token
        }).then((res) => {
            const menuList = getMenuList();
            menuList.setMenuList(res);
            res.forEach(v => {


                router.addRoute(routeList(v));
            })
            menuList.setMenuList(LeftMenuList(res))
            return res;
        })
        return menulist
    }
    return {
        submit,
        setUser,
        removeUser,
        getuserinfo,
    }
}
export default userinfo