<script setup>
    import {
        ref,
        reactive,
        onMounted,
        defineProps,
        defineEmits,
    } from 'vue'
    const emit = defineEmits(["chaddtabs"])
    const isCollapse = ref(false);
    const menuList = reactive([{
        path: "/",
        title: "首页",
        children: [{
                path: "/one",
                title: "one"
            },
            {
                path: "/two",
                title: "two"
            }
        ]
    }])
    const handleOpen = () => {

    }
    const handleClose = () => {

    }
    const addtabs = (path) => {
        console.log("调用left")
        emit("chaddtabs", path);
    }
    const expandMenu = () => {
        isCollapse.value = !isCollapse.value

    }
</script>

<template>
    <div class="menuIcon" @click="expandMenu">
        <el-icon>
            <expand />
        </el-icon>
        <p class="ptitle" v-if="!isCollapse">xxx管理</p>
    </div>
    <div id="menu">
        <el-menu @open="handleOpen" unique-opene default-active="/home" class="el-menu-vertical-demo"
            :collapse="isCollapse" router>
            <el-menu-item index="/home">
                <template #title>
                    <div @click="addtabs('/home')">
                        <el-icon>
                            <home-filled />
                        </el-icon>
                        <span>首页</span>
                    </div>
                </template>
            </el-menu-item>
            <el-sub-menu index="" v-for="item in menuList">
                <template #title>
                    {{item.name}}
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="chItem.path" v-for="chItem in item.children">
                        <template #title>
                            <div @click="addtabs(chItem.path)">
                                <el-icon>
                                    <home-filled />
                                </el-icon>
                                <span>{{chItem.title}}</span>
                            </div>
                        </template>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<style lang='scss' scoped>
    .menuIcon {
        padding: 10px 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        font: normal 18px/60px "微软雅黑";

        .ptitle {
            width: 120px;
            padding: 0 20px;
        }
    }
</style>