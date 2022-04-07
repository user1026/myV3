<script setup>
    import {
        ref,
        reactive,
        onMounted,
        defineExpose
    } from 'vue'
    import {
        rightTabName
    } from "@/store/index.js"
    const tabname = rightTabName();
    const username = ref("123");
    const tabsValue = ref("1");
    const tabsList = reactive([{
        path: "/home",
        name: "1",
        title: "首页"
    }]);
    const removeTab = (name) => {
        console.log(name)
    }
    const addtabs = (path) => {
        let tilte = tabname.getRouterName();
        console.log(title, path)
    }
    defineExpose({
        addtabs: addtabs
    })
</script>
<template>
    <div class="rightHeader">
        <span>{{ username }}</span>
        <el-button type="info">退出</el-button>
    </div>
    <div>
        <el-tabs v-model="tabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
            <el-tab-pane v-for="item in tabsList" :key="item.name" :label="item.title" :name="item.name">
                <router-view></router-view>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<style lang='scss' scoped>
    .rightHeader {
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