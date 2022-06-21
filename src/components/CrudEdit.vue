<template>
    <div class="edit">
        <label>UserID
            <input placeholder="" v-model.number="input.userId">
            <br>
        </label>

        <label>Title
            <input placeholder="" v-model="input.title">
            <br>
        </label>

        <label>Body
            <textarea placeholder="" v-model="input.body"></textarea>
            <br>
        </label>
        <button v-if="!this.input.id" @click="addPost">Add new post</button>
        <button v-if="this.input.id" @click="updatePost">Update post</button>
    </div>
</template>

<script>
export default {
    name: "CrudEdit",

    data() {
        return {
            input: {
                userId: '',
                id: '',
                title: '',
                body: '',
            },
            // post: this.$store.state.post
        }
    },
    components: {},
    methods: {
        addPost: function () {
            this.input.id = Math.floor(Math.random() * 10);
            this.$store.dispatch('addPost', this.input);

            this.input = {
                userId: '',
                id: '',
                title: '',
                body: '',
            }
        },
        updatePost: function () {
            this.$store.dispatch('editPost', this.input);
            this.input = {
                userId: '',
                id: '',
                title: '',
                body: '',
            }
        }
    },
    computed: {
        post() {
            return this.$store.state.post;
        }
    },
    watch: {
        post(newPost) {
            this.input = newPost;
        }
    }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
