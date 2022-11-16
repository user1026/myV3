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
const tabsValue = ref("");
const routerList = ref([]);
const tabsList = ref([]);
//点击某个标签
const tabClick = (a, b) => {
    let toPath = tabsList.value.filter(v => {
        return v.name == a.props.name;
    })[0];
    router.push(toPath.path)
}
//关闭标签
const removeTab = (name) => {
    if (tabsList.value.length == 1) { //关闭最后一个时，清空tab页签数组
        tabsList.value=[];
        routerList.value=[];
    } else {//关闭其中一个标签页时显示最后一个标签页的内容
        const tab = tabsList.value;
        tabsList.value = tab.filter(val => val.name != name);
        if (tabsValue.value == name) {
            tabsValue.value = tabsList.value[tabsList.value.length - 1].name;
            
            router.push(tabsList.value[tabsList.value.length - 1].path)
        }
    }
}
onMounted(() => {

})
//添加标签
const addTabs = (title, path) => {
    let fList = tabsList.value.filter(val => val.title == title);
    if (fList.length > 0) {
        tabsValue.value = fList[0].name;
        return;
    } else {
     
        tabsList.value.push({
            path,
            name: title,
            title: title,
        })
        tabsValue.value =title;
    }
}

defineExpose({
    addTabs,
})
watch(() => tabName.getRouterInfo, (now, old) => {
    routerList.value = now.routeList
})
</script>
<template>
   
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

</style>