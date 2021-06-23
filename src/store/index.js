import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '/giphy.config.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        gifsArray: [],
        notFoundGif: null
    },
    getters: {
        getGifs(state) {
            return state.gifsArray
        },
        getNotFoundGif(state) {
            return state.notFoundGif
        }
    },
    actions: {
        async init({commit}) {
            const params = config
            let response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
                params,
            }).then((r) => r.data.data);

            commit("OVERFILL_GIFS_ARRAY", response)
        },
        async pagination({commit, state}, data) {
            const params = config
            params.q = data
            params.offset = state.gifsArray.length

            let response

            if (data) {
                response = await axios.get("https://api.giphy.com/v1/gifs/search", {
                    params,
                }).then((r) => r.data.data);
            } else {
                response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
                    params,
                }).then((r) => r.data.data);
            }

            commit("ADD_TO_GIFS_ARRAY", response)
        },
        async search({commit}, data) {
            const params = config
            params.q = data
            let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
                params,
            }).then((r) => r.data.data);

            commit("OVERFILL_GIFS_ARRAY", response)
        },
        async notFound({commit}){
            const params = config
            params.tag = "Not Found"
            let response = await axios.get("https://api.giphy.com/v1/gifs/random", {
                params
            })
            commit("CHANGE_NOT_FOUND_GIF", response)
        }
    },
    mutations: {
        OVERFILL_GIFS_ARRAY(state, data) {
            state.gifsArray = data
        },
        ADD_TO_GIFS_ARRAY(state, data) {
            state.gifsArray.push(...data)
        },
        CHANGE_NOT_FOUND_GIF(state, data){
            state.notFoundGif = data
        }
    },
    modules: {}
})
