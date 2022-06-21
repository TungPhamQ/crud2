<template>
    <div class="list">
        <table style="width:100%">
            <thread>
                <CrudHeader :header="header"></CrudHeader>
            </thread>
            <tbody>
                <tr v-for="post in this.$store.state.posts" :key="post.id">
                    <td v-for="(item, index) in post" :key="index"> {{ item }} </td>
                    <td><button @click="editPost(post)">Edit</button></td>
                    <td><button @click="deletePost(post)">Delete</button></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CrudHeader from './CrudHeader.vue';

export default {
    name: 'CrudList',
    props: {
    },
    components: { CrudHeader },
    data() {
        return {
            post: {},
            header: [
                'userId',
                'id',
                'title',
                'body',
            ]
        }
    },
    methods: {
        deletePost: function (post) {
            this.$store.dispatch('deletePost', post)
        },
        editPost: function (post) {
            // this.$store.dispatch('editPost', post)
            this.$store.dispatch('editPost', post);
        }
    },

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* table,
th,
td {
    border: 1px solid black;
} */
</style>
