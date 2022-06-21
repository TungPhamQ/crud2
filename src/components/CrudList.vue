<template>
    <div class="list">
        <table style="width:100%">
            <thead>
                <tr>
                    <th v-for="(item, index) in header" :key="index" :colspan="item.colspan">{{ item.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in this.$store.state.posts" :key="post.id">
                    <td v-for="item in post" :key="item.id"> {{ item }} </td>
                    <td><button @click="editPost(post)">Edit</button></td>
                    <td><button @click="deletePost(post)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'CrudList',
    props: {
        header: Array
    },
    data() {
        return {
            post: {},

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
table,
th,
td {
    border: 1px solid black;
}
</style>
