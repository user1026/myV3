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
            path: menulist[i].path
        })
        if (menulist[i].children) {
            list[i].children = LeftMenuList(menulist[i].children)
        }
    }
    return list
}