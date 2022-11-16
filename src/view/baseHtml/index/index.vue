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
    import LeftMenu from "./leftMenu/index.vue";
    import RightMain from "./rightMain/index.vue";
    const left = ref(null);
    const right = ref(null);
    const username = ref("123")
    const leftWidth = ref("300px");
    const router = useRouter();
    //调用子组件添加tab标签页的方法
    const addTabs = (title, path) => {
        right.value.addTabs(title, path)
    }
    //退出
    const logout = () => {
        window.localStorage.clear();
        router.push("/login")
    }
    onMounted(() => {


    })
</script>



<template>
    <div class="common-layout">
        <el-container>
            <el-aside id="leftMenu">
                <LeftMenu ref="left" @chaddtabs="addTabs"></LeftMenu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="TopHeader">
                        <div class="TopLeft">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-for="(item, i) in routerList" :key="i">{{ item.name }}
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="TopRight">
                            <span>{{ username }}</span>
                            <el-button type="info" @click="logout">退出</el-button>
                        </div>
                    </div>
                </el-header>
                <el-main class="Main" id="rightMain">
                    <RightMain ref="right"></RightMain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang='scss' scoped>
    #leftMenu {

        height: 100%;
        background-color: rgb(226, 227, 236);
    }

    #rightMain {

        height: 100%;

    }

    :deep(.el-main),
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

    .TopHeader {
        height: 40px;
        font: normal 20px/30px "微软雅黑";
        background-color: white;
        padding: 0 20px;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid black;
        .TopLeft {
            position: absolute;
            top:0px;
            left:20px;
        }
        .TopRight{
            position: absolute;
            top:10px;
            right:20px;
        }
        span {
            padding: 0 20px;
        }
    }
</style>