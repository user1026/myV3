<script setup>
import {
    ref,
    reactive,
    onMounted,
    watch
} from 'vue'
import { RouterInfo, leftActive, getMenuList } from "@/store/index.js"
const emit = defineEmits(["chaddtabs"])
const nowTabName = RouterInfo();
const leftActivePath = leftActive();
const MenuList = getMenuList();
const isCollapse = ref(false);
const defaultPath = ref("/home")
const menuList = ref([])
const handleOpen = () => {

}
const handleClose = () => {

}
const addtabs = (title, path) => {
    emit("chaddtabs",
        title,
        path
    );
}
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
    <div class="menuIcon" @click="expandMenu">
        <el-icon>
            <expand />
        </el-icon>
        <p class="ptitle" v-if="!isCollapse">xxx管理</p>
    </div>
    <div id="menu">
        <el-menu @open="handleOpen" unique-opene :default-active="defaultPath" class="el-menu-vertical-demo"
            :collapse="isCollapse" router>
            <template v-for="item in menuList">
                <template v-if="item.children">
                    <el-sub-menu :index="item.path">
                        <template #title>{{ item.title }}</template>
                        <el-menu-item-group>
                            <el-menu-item :index="chItem.path" v-for="chItem in item.children"
                                @click="addtabs(chItem.title, chItem.path)">
                                <template #title>
                                    <div>
                                        <el-icon>
                                            <home-filled />
                                        </el-icon>
                                        <span>{{ chItem.title }}</span>
                                    </div>
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.path" @click="addtabs(item.title, item.path)">
                        <template #title>
                            <div>
                                <el-icon>
                                    <home-filled />
                                </el-icon>
                                <span>{{ item.title }}</span>
                            </div>
                        </template>
                    </el-menu-item>
                </template>

            </template>

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
        width: 145px;
        padding: 0 30px 0 20px;
    }
}
</style>