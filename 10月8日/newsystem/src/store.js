/**
 * Created by Administrator on 2018/10/10.
 */

//vuex是什么？
//vuex是一种数据状态管理模式
//应用场景：管理vue中的数据
//vuex中的方法
//state
//mutation
//getters
//actions
//module

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const state={
  num:1,
  age:12,
  name:"lily",
  count:34
}
const mutations={
  add(state){
    state.num++
  },
  reduce(state){
    state.num--
  }
}

const getters={
  count(state){
    return state.count
  }
}

const actions={   //处理分发事件
  addAction({commit}){
    commit("add")
  },
  reduceAction(context){
    context.commit('reduce')
  }
}
export default new Vuex.Store({
  //state:{
  //  num:1,
  //  age:12,
  //  name:"lily",
  //  count:34
  //},
  state,
  mutations,
  getters,
  actions
})














