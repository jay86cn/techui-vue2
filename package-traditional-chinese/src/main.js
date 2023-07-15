import Vue from 'vue'
import App from './App.vue'
import router from './router';

import * as echarts from 'echarts';
import "echarts-gl";
window.echarts=echarts;

import techUI from "techui-vue2"
import 'assets/less/main.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import "./utils/license"

import "techui-license-dev"

import {themes} from "/static/themes/index"
Vue.use(themes)


import i18n from "./utils/i18n"
techUI(Vue).then(() => {
  new Vue({
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
});

