import axios from "axios";
import {
    ElMessage
} from 'element-plus'
const http = axios.create({
    timeout: 10000
})

http.interceptors.request.use(request => {

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