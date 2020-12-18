import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    indexE:0
  },
  mutations: {
    createTask(state, info){
      state.info = info
    },
    deletedTask(state, i){
      if ( i !== -1 ) {
          state.info.splice( i, 1 );
      }
    },
    IndexModal(state, index){
      state.indexE = index
    },
    EditTask(state, infoN){
      state.info[state.indexE] = infoN
      console.log(state.info[state.indexE])
    }
  },
  actions: {
  },
  modules: {
  }
})
