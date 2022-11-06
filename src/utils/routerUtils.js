/**
 * 
 * @param {*} menulist 
 * @returns 左侧展示的菜单
 */
export const LeftMenuList = (menulist) => {
    let list = [];
    for (let i = 0; i < menulist.length; i++) {
        if (menulist[i].path.indexOf("/") == -1) {
            menulist[i].path = "/" + menulist[i].path
        }
        list.push({
            title: menulist[i].meta.title,
            icon: menulist[i].icon,
            path: menulist[i].path
        })
        if (menulist[i].children&&menulist[i].children.length>0) {
            list[i].children = LeftMenuList(menulist[i].children)
        }
    }
    return list
}

export const TransformRoutes = (route) => {
    let routeList =[];
    for(let i=0;i<route.length;i++){
        route[i].component=() => import( /* @vite-ignore */ `@/${route.component}`);
        if (route[i].children && route[i].children.length > 0) {
            route[i].children = TransformRoutes(route[i].children)
        }
    }
    return routeList
}