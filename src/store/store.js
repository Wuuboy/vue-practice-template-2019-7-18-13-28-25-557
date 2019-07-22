import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  sum:0
}

// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  add: ({ commit }) => commit('add',1), // 提交到mutations中处理
  reduce: ({ commit }) => commit('reduce',1)
}
// 更新状态
const mutations = {
  add (state,addValue) {
    state.sum = state.sum + addValue
  },
  reduce (state,reduceValue) {
    state.sum = state.sum - reduceValue
  }
}
// 获取状态信息
const getters = {
}

// 下面这个相当关键了，所有模块，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
