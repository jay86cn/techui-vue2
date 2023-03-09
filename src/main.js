import Vue from 'vue'
import App from './App.vue'
import vuex from "./vuex.js";
import router from './router';
Vue.prototype.$vuex = vuex;
Vue.config.productionTip = false
import 'assets/less/main.less'
import "./utils/license"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import {themes} from "@pub/static/themes/index"
Vue.use(themes)

import {DigitCubeCore} from "digitcube-core"
Vue.use(DigitCubeCore)


import i18n from "./utils/i18n"

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
