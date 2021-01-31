import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //全局的css样式

import router from "./router"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
