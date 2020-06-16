import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入mintUI
import MintUI from 'mint-ui';
//导入mintUI的CSS
import 'mint-ui/lib/style.min.css'
import axios from 'axios'
// 全局组件construct
import MyConstruct from "./components/construct.vue"
Vue.component("my-construct",MyConstruct)

axios.defaults.baseURL='http://127.0.0.1:4000';
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//使用mintUI
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
