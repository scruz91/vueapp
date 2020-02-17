import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      message:'hello world',
      count: 0,
      title: 'Titulo',
      input: ''
    },
    mutations: {
      setTitle(state, payload){
        state.title = payload
      }
    },
    getters:{
       message(state){
         return state.message.toUpperCase();
       },
       title(state){
         return state.title;
       },
       input(state){
         return state.input.toUpperCase();
       }
    }
});