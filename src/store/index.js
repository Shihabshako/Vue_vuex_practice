import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorCode :'blue'
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },

    decreaseCounter(state) {
      state.counter--;
    },
    setColorCode(state, newValue){
        state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter({ commit }) {
        axios(
          "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
        ).then(response => {
            commit('increaseCounter', response.data)
        })
    },
    setColorCode({commit}, newValue){
        commit('setColorCode', newValue)
    }
  },
  getters:{
      counterSquared(state){
          return state.counter * state.counter;
      }
  },
  modules: {},
});
