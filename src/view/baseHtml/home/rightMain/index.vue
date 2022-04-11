<script setup>
    import {
        ref,
        reactive,
        onMounted,
        defineExpose,
        onBeforeUpdate,
    } from 'vue'
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import {
        rightTabName
    } from "@/store/index.js"
    const tabname = rightTabName();
    const router = useRouter();
    const username = ref("123");
    const tabsValue = ref("1");
    let tabIndex = ref(1);
    const title = ref("");
    const tabsList = ref([{
        path: "/home",
        name: "1",
        title: "首页"
    }]);

    const removeTab = (name) => {
        if (tabsList.value.length == 1 && name == "1") {
            return;
        } else if (tabsList.value.length == 1) {
            tabsList.length = 0;
            tabsList.value.push({
                path: "/home",
                name: "1",
                title: "首页"
            })
            tabIndex.value = "1"
            router.push('/home')
        } else {
            const tab = tabsList.value;
            tabsList.value = tab.filter(val => val.name != name);
            tabsValue.value = tabsList.value[tabsList.value.length - 1].name;
            tabIndex.value = Number(tabsList.value[tabsList.value.length - 1].name);
            router.push(tabsList.value[tabsList.value.length - 1].path)
        }
    }
    onMounted(() => {

    })
    const addtabs = (title, path) => {
        console.log(title)
        let fList = tabsList.value.filter(val => val.title == title);
        if (fList.length > 0) {
            tabsValue.value = fList[0].name;
            return;
        } else {
            tabIndex.value += 1;
            tabsList.value.push({
                path,
                name: tabIndex.value + "",
                title: title,
            })
            tabsValue.value = tabIndex.value + ""
        }
    }
    defineExpose({
        addtabs,
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