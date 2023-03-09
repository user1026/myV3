import {
  ref,
} from 'vue'
import RightMain from "./rightMain.js"
const {addTabs} =RightMain();
const leftMenu=()=>{
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
  console.log("123")
  addTabs(title,path);
  return {
      title,
      path
  }
}
const handleOpen=()=>{}


return {
  leftSpan,
  rightSpan,
 isCollapse,
 menuList,
 defaultPath,
  changeCollapse,
  addRightTabs,

  handleOpen,
}
}
export default leftMenu;