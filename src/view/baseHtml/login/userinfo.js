import {
    get,
    post
} from "@/utils/http.js"
import {
    LeftMenuList,
    TransformRoutes
} from "@/utils/routerUtils.js"
import {
    userInfo,
    getMenuList
} from "@/store/index.js"
const userinfo = () => {
    //提交
    const submit = async (FormDatas) => {
        const userinfo = userInfo();
        let token = await post("/login", FormDatas).then(async res => {
            window.sessionStorage.setItem("token", res);
            return res
        })
        let user= await getuserinfo(token)
        userinfo.$patch((state)=>{
            state.token=token
            state.userInfo=user
        });
        await getUserMenuList(token)
        return token
    };
    //记住密码功能
    const setUser = (FormDatas) => {
        window.localStorage.setItem("user", user);
        window.localStorage.setItem("isRemember", true);
    };
    const removeUser = () => {
        window.localStorage.setItem("isRemember", false);
        window.localStorage.removeItem("user");
    }
    const getuserinfo = async (token) => {
        let user = await post("/getuserinfo", {
            token
        }).then(res => {
            return res;
        })
        return user;
    };
    //获取菜单
    const getUserMenuList = async (token) => {
        let menulist = await post("/getMenuList", {
            token
        }).then((res) => {
            const MenuList = getMenuList();
            res.forEach(v=>{
                router.addRoute(TransformRoutes(v));
            })
            MenuList.setMenuList(LeftMenuList(res))
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