export default [
  {
    path:"menu",
    component:()=>import("@/view/sysmng/menumng/index.vue"),
    icon: "HomeFilled",
    meta:{
      title:"菜单管理"
    }
  },
  {
    path:"role",
    component:()=>import("@/view/sysmng/rolemng/index.vue"),
    icon: "HomeFilled",
    meta:{
      title:"角色管理"
    }
  },
  {
    path:"user",
    component:()=>import("@/view/sysmng/usermng/index.vue"),
    icon: "HomeFilled",
    meta:{
      title:"用户管理"
    }
  },
]