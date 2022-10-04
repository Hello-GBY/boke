import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/base.scss";

import ElementPlus from "element-plus"; //需要加入的代码
import "element-plus/theme-chalk/index.css"; //需要加入的代码

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
