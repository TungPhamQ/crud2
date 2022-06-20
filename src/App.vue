<template>
    <div id="app">
        <CrudApp :posts="posts" />
    </div>
</template>

<script>
import CrudApp from './components/CrudApp.vue'

export default {
    name: 'App',
    components: {
        CrudApp,
    },
    data() {
        return {
            posts: [],
        }
    },
    methods: {

    },
    mounted() {
        this.$store.dispatch("getPosts");
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
