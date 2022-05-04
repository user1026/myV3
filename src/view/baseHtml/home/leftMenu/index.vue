<script setup>
<<<<<<< HEAD
import {
    ref,
    reactive,
    onMounted,
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
=======
    import {
        ref,
        reactive,
        onMounted,
        toRaw
    } from 'vue'
    const emit = defineEmits(["chaddtabs"])
    const isCollapse = ref(false);
    const defaultPath = ref("/home");
    let sum = ref(0);

    const show = () => {
        const sum = toRaw(sum)
        console.log(sum);
    }

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
>>>>>>> 1922ff57a5f1511252d8bc4335c261a65b2511a6

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

<<<<<<< HEAD
}
=======
    }
    const leftMenuPath = (path) => {
        defaultPath.value = path;
        console.log(path)
    }
    defineExpose({
        leftMenuPath,
    })
>>>>>>> 1922ff57a5f1511252d8bc4335c261a65b2511a6
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
            <el-menu-item index="/home" @click="addtabs('首页','/home')">
                <template #title>
<<<<<<< HEAD
                    <div @click="addtabs('首页', '/home')">
                        <el-icon>
                            <home-filled />
                        </el-icon>
                        <span>首页</span>
                    </div>
=======

                    <el-icon>
                        <home-filled />
                    </el-icon>
                    <span>首页</span>

>>>>>>> 1922ff57a5f1511252d8bc4335c261a65b2511a6
                </template>
            </el-menu-item>
            <el-sub-menu index v-for="item in menuList">
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