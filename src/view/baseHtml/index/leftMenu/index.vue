<script setup>
    import {
        ref,
        reactive,
        onMounted,
        watch,
    } from 'vue'
    import {
        RouterInfo,
        leftActive,
        getMenuList
    } from "@/store/index.js"
    const emit = defineEmits(["chaddtabs"])
    const nowTabName = RouterInfo();
    const leftActivePath = leftActive();
    const MenuList = getMenuList();
    const isCollapse = ref(false);
    const defaultPath = ref("")
    const menuList = ref([]);
    const props=defineProps({
        isCollapse:{
            type:Boolean,
            default:false
        }
    })
    const handleOpen = () => {

    }
    const handleClose = () => {

    }
    const addTabs = (title, path) => {
        emit("chaddtabs",
            title,
            path
        );
    }
    //收起/展示菜单
    const expandMenu = () => {
        isCollapse.value = !isCollapse.value;

    }
    // const leftMenuPath = (path) => {
    //     defaultPath.value = path;
    //     console.log(path)
    // }
    onMounted(() => {
        menuList.value = MenuList.getMenuList;
    })
    //监听右侧点击的路由激活对应的菜单
    watch(() => nowTabName.getRouterInfo, (now, old) => {
        defaultPath.value = now.path;
    })
    // watch(() => leftActivePath.getleftActivePath, (now, old) => {
    //     defaultPath.value = "\/" + now;
    //     console.log(now)
    // })

    defineExpose({
        //leftMenuPath,
    })
</script>

<template>

    <div id="menu">
        <div class="menuIcon">
            <span class="ptitle" v-show="!props.isCollapse">admin管理系统</span>
        </div>
        <el-menu @open="handleOpen" unique-opened :default-active="defaultPath" class="el-menu-vertical-demo"
            :collapse="isCollapse" router>
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
                                @click="addTabs(chItem.title, chItem.path)">
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
                    <el-menu-item :index="item.path" @click="addTabs(item.title, item.path)">
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
    </div>
</template>

<style lang='scss' scoped>
    #menu {
        width: 100%;
        .menuIcon {
            padding: 10px 20px;
            display: flex;
            width: 100%;
            align-items: center;
            height: 60px;
            font: normal 16px/60px "微软雅黑";
            background-color: white;

            span {
                padding: 5px;
            }

        }
    }
</style>