const userinfo=(FormData,bool)=>{
    const submit=()=>{};
    const setuserinfo=(FormData)=>{
         let t=new Date();
         document.cookie=FormData.username+"="+FormData.password;
    };
    const getuserinfo=()=>{

    };
    return {submit,setuserinfo,getuserinfo}
}