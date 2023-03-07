import {
  ref,
  reactive,
  onMounted,
  watch,
} from 'vue'
import {
  RouterInfo,
  leftActive,
  getMenuList
} from "@/store/index.js"
import RightMain from "./rightMain"
const {addTabs} =RightMain();
const leftMenu=()=>{
const nowTabName = RouterInfo();
const leftActivePath = leftActive();
const isCollapse = ref(false);
const leftSpan=ref(3);
const rightSpan=ref(21)
const defaultPath = ref("")
const menuList = ref([]);
const changeCollapse=()=>{
  isCollapse.value=!isCollapse.value
  if(isCollapse.value){
      leftSpan.value=1;
  rightSpan.value=24-leftSpan.value;
  }else{
  leftSpan.value=3;
  rightSpan.value=24-leftSpan.value;
  }

}
const addRightTabs = (title, path) => {
  addTabs(title,path);
  return {
      title,
      path
  }
}
const handleOpen=()=>{}
//监听右侧点击的路由激活对应的菜单
watch(() => nowTabName.getRouterInfo, (now, old) => {
  defaultPath.value = now.path;
})
return {
  leftSpan,
  rightSpan,
 leftActivePath ,
 isCollapse,
 menuList,
 defaultPath,
  changeCollapse,
  addRightTabs,
  nowTabName,
  handleOpen,
}
}
export default leftMenu;