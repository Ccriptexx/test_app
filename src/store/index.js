import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openLoginPhone: true,
    openLoginMail: false,
  },
  getters: {
    getOpenLoginPhone: state => state.openLoginPhone,
    getOpenLoginMail: state => state.openLoginMail
  },
  mutations: {
    setOpenLoginPhon(state, openLoginPhone) {
      state.openLoginPhone = openLoginPhone
    },
    setOpenLoginMail(state, openLoginMail) {
      state.openLoginMail = openLoginMail
    }
  },
  actions: {
  },
  modules: {
  }
})
