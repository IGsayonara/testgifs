import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gifsArray: []
  },
  getters: {
    getGifs(state){
      return state.gifsArray
    }
  },
  actions: {
    async pagination({commit, state}, data){
      const params = {
        api_key: "p9eVyM5HXDxXaGDoIWdChySupTkHFfJh",
        q: data,
        limit: 12,
        offset: state.gifsArray.length
      }
      let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params,
      }).then((r) => r.data.data);
      console.log(response)
      commit("ADD_TO_GIFS_ARRAY", response)
    },
    async search({commit}, data){
      const params = {
        api_key: "p9eVyM5HXDxXaGDoIWdChySupTkHFfJh",
        q: data,
        limit: 12,
      }
      let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params,
      }).then((r) => r.data.data);

      commit("OVERFILL_GIFS_ARRAY", response)
    },
  },
  mutations: {
    OVERFILL_GIFS_ARRAY(state, data){
      state.gifsArray = data
    },
    ADD_TO_GIFS_ARRAY(state, data){
      state.gifsArray.push(...data)
    }
  },
  modules: {
  }
})
