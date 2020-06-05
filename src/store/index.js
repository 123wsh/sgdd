import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: sessionStorage.getItem("islogin")?sessionStorage.getItem("islogin"): false,
    username: sessionStorage.getItem("username") ? sessionStorage.getItem("username") : ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
