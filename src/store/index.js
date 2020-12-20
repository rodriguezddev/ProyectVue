import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    indexE:0,
    infoN:{},
    favorite:[]
  },
  mutations: {
    createTask(state){
      var infoLocal = localStorage.getItem('info')
      var arryInfo = JSON.parse(infoLocal)
      state.info = arryInfo
      console.log(state.info)
    },
    deletedTask(state, i){
      if ( i !== -1 ) {
          state.info.splice( i, 1 );
      }
    },
    indexModal(state, index){
      state.indexE = index
    },
   
    favoritesTask(state){
      var favoriteLocal = localStorage.getItem('favoritesTask')
      var favorite = JSON.parse(favoriteLocal)
      state.favorite = favorite
    }
  },
  actions: {
  
  }
})
