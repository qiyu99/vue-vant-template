import Vue from 'vue';
import Vuex from 'vuex';
import createLoadingPlugin from 'utils/vuex-loading';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  state: {
    number: 1,
  },
  mutations: {
    oneAsync(state, payload) {
      state.number += payload;
    },
  },
  actions: {
    oneAsync({ commit }, payload) {
      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          resolve();
          commit('oneAsync', payload);
        }, 1000);
      });
    },
  },
  modules: {
  },
});
