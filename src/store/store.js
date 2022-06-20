import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    posts: [
        
    ]
}

//to handle state
const getters = {
    
}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {commit('GET_POSTS', response.data)})
    },
    deletePost({commit}, post) {
        commit('DELETE_POST', post)
    },
    addPost({commit}, input){
        commit('ADD_POST', input)
    }
    
}

//to handle mutations
const mutations = {
    GET_POSTS(state, posts) {
        state.posts = posts
    },
    DELETE_POST(state, post){
        state.posts.splice(state.posts.indexOf(post), 1) 
    },
    ADD_POST (state, input) {
        state.posts.push(input)
    },
    
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})