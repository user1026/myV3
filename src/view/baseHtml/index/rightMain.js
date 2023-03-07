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
const rightMain=()=>{
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

watch(() => tabName.getRouterInfo, (now, old) => {
  routerList.value = now.routeList
})
return {
  addTabs,
  removeTab,
  tabClick,
  tabsList,
  tabsValue,
  routerList,
}
}
export default rightMain;