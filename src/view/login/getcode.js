import {post} from "@/utils/http.js";
import {ref} from "vue";
const getCode=()=>{
    const time=ref(60);
    const hascode=ref(false);
    const getcode = () => {
        hascode.value = true;
        let timer = setInterval(() => {
          time.value--;
          if (time.value == 0) {
            hascode.value = false;
            clearInterval(timer);
            time.value = 60;
          }
        }, 1000);
      };
   
return {time,hascode,getcode}
}
export default getCode;