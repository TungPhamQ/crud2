<template>
    <div class="table">
        <table style="width:100%">
            <thead>
                <tr>
                    <th v-for="(item, index) in header" :key="index" :colspan="item.colspan">{{ item.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in $store.state.posts" :key="post.id">
                    <td class="text-content" v-for="item in post" :key="item.id"> {{ item }} </td>
                    <td>
                        <b-button @click="editPost(post)" variant="info">Edit</b-button>
                    </td>
                    <td>
                        <b-button @click="deletePost(post)" variant="danger">X</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'CrudTable',
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
    text-align: center;
}

.table {
    background: #fff;
    width: 80%;
    margin: auto;
}
</style>
