import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/base.scss";

import ElementPlus from "element-plus"; //需要加入的代码
import "element-plus/theme-chalk/index.css"; //需要加入的代码
import pinia from "./stores/index"; // pinia全局状态管理： https://pinia.vuejs.org/

createApp(App).use(ElementPlus).use(pinia).use(router).mount("#app");
