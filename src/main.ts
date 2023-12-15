import { createApp } from "vue";
import AcroVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import store from "./store";
import "@/plugins/axios";
import "@/access"; //不引入就不会开启
import "bytemd/dist/index.css"; //markdown编辑器
//代码美化
createApp(App).use(AcroVue).use(store).use(router).mount("#app");
