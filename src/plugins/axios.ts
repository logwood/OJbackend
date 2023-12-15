import axios from "axios";
//全局请求响应调节器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log("响应" + response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.defaults.withCredentials = true;
