import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
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
    EditTask(state, infoN){
      state.info = infoN
      console.log(state.info)
    }
  },
  actions: {
  },
  modules: {
  }
})
