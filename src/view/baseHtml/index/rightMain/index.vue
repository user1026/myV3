<script setup>
import {
    ref,
    onMounted,
    watch
} from 'vue'
import {
    useRouter
} from 'vue-router';
import {
    RouterInfo,
    leftActive,
} from "@/store/index.js"
const tabName = RouterInfo();
const leftActivePath = leftActive();
const router = useRouter();
const tabsValue = ref("1");
let tabIndex = ref(1);
const routerList = ref([]);
const tabsList = ref([{
    path: "/home",
    name: "1",
    title: "图表"
}]);
//点击某个标签
const tabClick = (a, b) => {
    let toPath = tabsList.value.filter(v => {
        return v.name == a.props.name;
    })[0];
    //  leftActivePath.setLeftActivePath(toPath.path)
    router.push(toPath.path)
}
//关闭标签
const removeTab = (name) => {
    if (tabsList.value.length == 1 && name == "1") {
        return;
    } else if (tabsList.value.length == 1) {
        tabsList.length = 0;
        tabsList.value.push({
            path: "/home",
            name: "1",
            title: "图表"
        })
        tabIndex.value = "1";
        //leftActivePath.setLeftActivePath("/home")

        router.push('/home');
    } else {
        const tab = tabsList.value;
        tabsList.value = tab.filter(val => val.name != name);
        if (tabsValue.value == name) {
            tabsValue.value = tabsList.value[tabsList.value.length - 1].name;
            tabIndex.value = Number(tabsList.value[tabsList.value.length - 1].name);
            router.push(tabsList.value[tabsList.value.length - 1].path)
        }
        //leftActivePath.setLeftActivePath(tabsList.value[tabsList.value.length - 1].path)

    }
}
onMounted(() => {

})
//添加标签
const addtabs = (title, path) => {
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
watch(() => tabName.getRouterInfo, (now, old) => {
    routerList.value = now.routeList
})
</script>
<template>
    <div class="bread">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, i) in routerList" :key="i">{{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div>
        <el-tabs v-model="tabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab"
            @tab-click="tabClick">
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