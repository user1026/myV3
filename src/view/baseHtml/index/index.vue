<script setup>
    import {
        ref,
        reactive,
        onMounted,
        watch
    } from "vue";
    import {
        useRoute,
        useRouter
    } from "vue-router"
    import {
  RouterInfo,
  getMenuList
} from "@/store/index.js"
    import LeftMenu from "./leftMenu.js";
    import RightMain from "./rightMain.js";
    const {nowTabName,isCollapse,handleOpen ,leftSpan,rightSpan,menuList,defaultPath,changeCollapse} =LeftMenu();
    const {addTabs,removeTab,tabClick,tabsList,tabName ,tabsValue,routerList} =RightMain();
    const MenuList = getMenuList();
    const username = ref("123")
    const router = useRouter();
    const TabName=RouterInfo();
    //退出
    const logout = () => {
        window.sessionStorage.clear();
        router.push("/login")
    }
    const addRightTabs=(title,path)=>{
        addTabs(title,path);
    }
    onMounted(() => {
            menuList.value = MenuList.getMenuList;
    })
    //监听右侧点击的路由激活对应的菜单
watch(() => TabName.getRouterInfo, (now, old) => {
  routerList.value = now.routeList
  defaultPath.value = now.path;
})
</script>
<template>
    <div class="common-layout">
        <el-row :gutter="0">
            <el-container>
                <el-col :span="leftSpan">
                    <el-aside id="leftMenu">
                        <div class="menuIcon">
                            <span class="ptitle" v-show="!isCollapse">admin管理系统</span>
                            <el-icon @click="changeCollapse">
                                <Menu />
                            </el-icon>
                        </div>
                        <el-menu :collapse-transition="false" id="elemenu" @open="handleOpen" unique-opened :default-active="defaultPath"
                            class="el-menu-vertical-demo" :collapse="isCollapse" router>
                            <template v-for="item in menuList">
                                <template v-if="item.children">
                                    <el-sub-menu :index="item.path">
                                        <template #title>
                                            <el-icon>
                                                <component :is="item.icon"></component>
                                            </el-icon>
                                            <span v-show="!isCollapse">{{ item.title }}</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item :index="chItem.path" v-for="chItem in item.children"
                                                @click="addRightTabs(chItem.title, chItem.path)">
                                                <template #title>
                                                    <div>
                                                        <el-icon>
                                                            <component :is="chItem.icon"></component>
                                                        </el-icon>
                                                        <span>{{ chItem.title }}</span>
                                                    </div>
                                                </template>
                                            </el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                </template>
                                <template v-else>
                                    <el-menu-item :index="item.path" @click="addRightTabs(item.title, item.path)">
                                        <template #title>
                                            <div>
                                                <el-icon>
                                                    <component :is="item.icon"></component>
                                                </el-icon>
                                                <span v-show="!isCollapse">{{ item.title }}</span>
                                            </div>
                                        </template>
                                    </el-menu-item>
                                </template>
                            </template>
                        </el-menu>
                    </el-aside>
                </el-col>
                <el-col :span="rightSpan">
                    <el-container>
                        <el-header>
                            <div id="TopHeader">
                                    <el-breadcrumb separator="/">
                                        <el-breadcrumb-item v-for="(item, i) in routerList" :key="i">{{ item.name }}
                                        </el-breadcrumb-item>
                                    </el-breadcrumb>
                                <div class="TopRight">
                                    <span>{{ username }}</span>
                                    <el-button type="info" @click="logout">退出</el-button>
                                </div>
                            </div>
                        </el-header>
                        <el-main class="Main" id="rightMain">
                            <el-tabs v-model="tabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab"
                                @tab-click="tabClick">
                                <el-tab-pane v-for="item in tabsList" :key="item.name" :label="item.title"
                                    :name="item.name">
                                    <router-view></router-view>
                                </el-tab-pane>
                            </el-tabs>
                        </el-main>
                    </el-container>
                </el-col>

            </el-container>
        </el-row>
    </div>
</template>
<style lang='scss' scoped>
    #leftMenu {
        height: 100vh;
        border-right: 1px solid rgb(37, 11, 150);
        overflow: hidden;
        .menuIcon {
            padding: 10px 20px;
            display: flex;
            width: 100%;
            align-items: center;
            height: 60px;
            font: normal 16px/60px "微软雅黑";
            /* background-color: white; */

            span {
                padding: 5px;
            }

        }
    }

    #rightMain {
        height: 100%;
    }

    :deep(.el-header) {
        padding: 0;
    }

    :deep(.el-header) {
        height: 40px;
    }

    :deep(.el-container) {
        height: 100%;
    }

    :deep(.el-aside) {
        width: auto;
        height: 100%;
    }

    .common-layout {
        width: 100%;
        height: 100%;
    }

    #TopHeader {
        height: 50px;
        font: normal 20px/20px "微软雅黑";
        background-color: white;
        padding: 0 0px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        align-items: center;
    }
</style>