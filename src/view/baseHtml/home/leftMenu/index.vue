<script setup>
import { ref, reactive, onMounted, watch } from 'vue'

const isCollapse = ref(true);
const menuList = reactive([
    {
        path: "/one",

    },
    {
        path: "/two",
    }
])
const handleOpen = () => {
    console.log(111111)
}
const handleClose = () => {

}
const addtabs = (path) => {

}
const expandMenu = () => {
    isCollapse.value = !isCollapse.value
}
watch(() => {

})
</script>

<template>
    <div class="menuIcon" @click="expandMenu">
        <el-icon>
            <expand />
        </el-icon>xxx管理
    </div>
    <div id="menu">
        <el-menu
            @open="handleOpen"
            default-active="/"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
        >
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
    padding: 10px 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>