<script setup>
import {
    ref,
    reactive,
    onMounted,
    watch
} from "vue";
import {useRoute,useRouter} from "vue-router"
import leftmenu from "./leftMenu/index.vue";
import rightmain from "./rightMain/index.vue";
const left = ref(null);
const right = ref(null);
const username = ref("123")
const leftWidth = ref("300px");
const router=useRouter();
const addtabs = (title, path) => {
    right.value.addtabs(title, path)
}
const getLeftWidth = (width) => {
    // console.log(width)
    // leftWidth.value = width + "px";
}
onMounted(() => {
    // leftWidth.value = document.getElementById("leftMenu").clientWidth + "px";
   
})
watch(leftWidth, (newVal, oldVal) => {
    // document.getElementById("rightMain").style.width = (document.body.clientWidth - parseInt(oldVal)) + "px";
    // console.log(document.getElementById("rightMain").style.width, document.body.clientWidth, newVal, oldVal)
})
</script>



<template>
    <div class="common-layout">
        <el-container>
            <el-aside id="leftMenu">
                <leftmenu ref="left" @chaddtabs="addtabs"></leftmenu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="TopHeader">
                        <span>{{ username }}</span>
                        <el-button type="info">退出</el-button>
                    </div>
                </el-header>
                <el-main class="Main" id="rightMain">
                    <rightmain ref="right"></rightmain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang='scss' scoped>
#leftMenu {

    height: 100%;
    background-color: rgb(28, 40, 146);
}

#rightMain {

    height: 100%;

}

:deep(.el-main),
:deep(.el-header) {
    padding: 0;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    font: normal 20px/30px "微软雅黑";
    background-color: #339999;

    padding: 0 20px;

    span {
        padding: 0 20px;
    }
}
</style>