import axios from "axios";
import {
    ElMessage
} from 'element-plus'
const http = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

http.interceptors.request.use(request => {
    // request.headers = {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    // }
    request.headers.Authorization = window.sessionStorage.getItem("token");
    return request;
}, error => {

    return Promise.reject(error);
});
http.interceptors.response.use(response => {
    if (response.code != 200) {
        ElMessage.error('发生错误')
    }
    return response;
}, error => {

    return Promise.reject(error);
});

export const get = (url = "", params = {}) => {
    return http.get(url, params)
}
export const post = (url = "", params = {}) => {
    return http.post(url, params)
}