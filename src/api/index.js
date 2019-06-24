import axios from 'axios';
//默认get请求
// axios.defaults.baseURL = 'https://www.nanshig.com/mobile';
var instance = axios.create({
    baseURL: 'https://api.jinyishe.cn'
});
//options配置参数
//options={}默认值
function getData(url,options={}){
    return instance(url,options);
}

export {
    getData,
    axios
}