<script setup>
    import {
        ref,
        reactive,
        onMounted,
        defineProps,
        defineEmits,
    } from 'vue'
    const emit = defineEmits(["chaddtabs"])
    const isCollapse = ref(true);
    const menuList = reactive([{
            path: "/one",

        },
        {
            path: "/two",
        }
    ])
    const handleOpen = () => {

    }
    const handleClose = () => {

    }
    const addtabs = (path) => {
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
        <el-menu @open="handleOpen" default-active="/" class="el-menu-vertical-demo" :collapse="isCollapse" router>
            <el-menu-item index="/">
                <template #title>
                    <div @click="addtabs('/home')">
                        <el-icon>
                            <home-filled />
                        </el-icon>
                        <span>首页</span>
                    </div>
                </template>
            </el-menu-item>
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