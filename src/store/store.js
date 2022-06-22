import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    posts: [],
    post:{}
}

//to handle state
const getters = {
    getPost(){
    }
}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {commit('GET_POSTS', response.data)})
    },
    // deletePost({commit}, post) {
    //     commit('DELETE_POST', post)
    // },
    
    //  deletePost(id) {
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)    
    //         // eslint-disable-next-line
    //         .then(response => this.posts = this.posts.filter(post => post.id !== id))
    //         .catch(err => console.log(err))
    // },
    deletePost({commit}, post) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`,)
        .then(response => console.log(response))
        .catch(err => console.log(err))
        commit('DELETE_POST', post)   
    },
    async addPost ({commit},input) {
       try {
        const res  = await axios.post('https://jsonplaceholder.typicode.com/posts/',{
            
         })
         console.log(res)
         commit('ADD_POST', input)
       } catch(err) {
        console.log(err)
       }
    },

    editPost({commit}, post,input){
        axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,
            {
                input
            }
        )
        .then(response => console.log(response))
        commit('EDIT_POST', post);
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
        // state.posts.push(input)
        state.posts = [...state.posts, input]
    },
    EDIT_POST (state, post) {
        state.post = post;
        console.log(state.post);
    },
    // UPDATE_POST (state, post){
    //     state.post = post;
    //     console.log(state.post);
    // }
    
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})