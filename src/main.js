import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入mintUI
import MintUI from 'mint-ui';
//导入mintUI的CSS
import 'mint-ui/lib/style.min.css'

//使用mintUI
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
