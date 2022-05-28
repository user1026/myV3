export default menulist = [{
        path: "/index",
        component: "view/baseHtml/index/inex.vue",
        children: [{
                path: "home",
                component: "view/home/index.vue",
                meta: {
                    title: "首页"
                },
            },
            {
                path: "/sysmng",
                meta: {
                    title: "系统管理"
                },
                children: [{
                    path: "three",
                    component: "view/index/three.vue",
                    meta: {
                        title: "three"
                    }
                }, {
                    path: "one",
                    component: "view/index/one.vue",
                    meta: {
                        title: "one"
                    }
                }, {
                    path: "two",
                    component: "view/index/two.vue",
                    meta: {
                        title: "two"
                    }
                }]
            }
        ]
    },
    {

    }
]