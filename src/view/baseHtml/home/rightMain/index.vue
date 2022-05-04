<script setup>
<<<<<<< HEAD
import {
    ref,
    reactive,
    onMounted,
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
const routerList = ref([{ name: "首页", path: "/home" }]);
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
=======
    import {
        ref,
        reactive,
        onMounted,
        onBeforeUpdate,
    } from 'vue'
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import {
        rightTabName
    } from "@/store/index.js"
    const tabName = rightTabName();
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
            tabIndex.value = "1";
            leftMenuIndex("/home");
            router.push('/home');
        } else {
            const tab = tabsList.value;
            tabsList.value = tab.filter(val => val.name != name);
            tabsValue.value = tabsList.value[tabsList.value.length - 1].name;
            tabIndex.value = Number(tabsList.value[tabsList.value.length - 1].name);
            leftMenuIndex(tabsList.value[tabsList.value.length - 1].path);
            router.push(tabsList.value[tabsList.value.length - 1].path)
        }
    }
    const emit = defineEmits(["leftMenuPath"])
    const leftMenuIndex = (path) => {

        emit("leftMenuPath", path);
    }
    onMounted(() => {

    })
    const addtabs = (title, path) => {

        console.log(tabName.getRouterName, "title")
        let fList = tabsList.value.filter(val => val.title == title);
        console.log(fList)
        if (fList.length > 0) {
            tabsValue.value = fList[0].name;
            console.log(fList[0].name)
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
>>>>>>> 1922ff57a5f1511252d8bc4335c261a65b2511a6
    }
}
defineExpose({
    addtabs,
})
</script>
<template>
    <div class="bread">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, i) in routerList" :key="i" :to="item.path">{{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
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
.bread {
    padding: 10px 20px;
}
</style>