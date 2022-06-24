<template>
    <div class="table">
        <table style="width:100%">
            <thead>
                <HeaderTable :header="header" />
            </thead>

            <tbody>
                <tr v-for="post in $store.state.posts" :key="post.id">
                    <ListTable v-for="(item, itemId) in header" :key="itemId" :post="post" :item="item" />

                    <FunctionButton name="Edit" variant="info" @click.native="editPost(post)" />
                    <FunctionButton name="X" variant="danger" @click.native="deletePost(post)" />

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HeaderTable from './Table/HeaderTable.vue';
import ListTable from './Table/ListTable.vue';
import FunctionButton from './Table/FunctionButton.vue';

export default {
    name: "CrudTable",
    props: {
        header: Array
    },
    data() {
        return {
            post: {},
            // buttons: [
            //     {
            //         name: "Edit1",
            //         functionOfButton: "editPost(post)",
            //         variant: "info",
            //     },
            //     {
            //         name: "X",
            //         functionOfButton: "deletePost(post)",
            //         variant: "danger",
            //     }
            // ],
        };
    },
    computed: {},
    methods: {
        deletePost: function (post) {
            this.$store.dispatch("deletePost", post);
        },
        // editPost: function (post) {
        //     this.$store.dispatch("editPost", post);
        // },
        editPost: function (post) {
            this.$store.commit("EDIT_POST", post);
        },
    },
    components: { HeaderTable, ListTable, FunctionButton }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
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
