<template>
    <div class="list">
        <table style="width:100%">
            <tr v-for="post in this.$store.state.posts" :key="post.id">
                <td v-for="(item, index) in post" :key="index"> {{ item }} </td>
                <td><button>Edit</button></td>
                <td><button @click="$store.dispatch('deletePost', post)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CrudList',
    props: {
    },
    data() {
        return {

        }
    }
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
