import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    posts: [],
    post:{}
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {commit('GET_POSTS', response.data)})
    },
    
    deletePost({commit}, post) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`,)
        .then(response => {
            console.log(response);
            commit('DELETE_POST', post)   

        })
        .catch(err => console.log(err))
    },
    async addPost ({commit},input) {
       try {
        const res  = await axios.post('https://jsonplaceholder.typicode.com/posts/',{
            input
         })
         console.log(res)
         commit('ADD_POST', input)
       } 
       catch(err) {
        console.log(err)
       }
    },

    async editPost({commit}, post,input){
        try{
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,
            {
                input
            }
        )
            console.log(res);
            commit('EDIT_POST', post);
        }
        catch(err) { console.log(err)}
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
        state.posts = [...state.posts, input]
    },
    EDIT_POST (state, post) {
        state.post = post;
    },
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})