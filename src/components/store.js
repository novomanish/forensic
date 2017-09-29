import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    url: '/machine'
}

const mutations = {
    navigate (state, payload){
        state.url = payload
    }
}

const actions = {
    // @context, payload
    go: ({commit}, payload) => {
        commit('navigate', payload)
    }
}

const getters = {
    url: state => state.url
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})