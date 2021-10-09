import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['X-Access-Token'] = sessionStorage.getItem("token")

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: "http://localhost:8081/aioffice",
  // baseURL: "https://www.liurq.com/aioffice",
  withCredentials: true,
  // 超时
  timeout: 10000
})
// request拦截器

// 响应拦截器

export default service
