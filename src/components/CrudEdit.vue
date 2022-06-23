<template>
    <form class="edit" @submit="onSubmit">
        <h3>EDITOR</h3>
        <div class="edit-control">
            <label>UserID
                <input v-model="input.userId" required>
                <br>
            </label>
        </div>
        <div class="edit-control">
            <label>Title
                <input v-model="input.title" required>
                <br>
            </label>
        </div>
        <div class="edit-control">
            <label>Body
                <textarea v-model="input.body" @keyup.enter="addPost" required></textarea>
                <br>
            </label>
        </div>
        <div class="btn">
            <b-button type="submit" v-if="!this.input.id" variant="success">Add New Post
            </b-button>
            <b-button type="submit" v-if="this.input.id" variant="warning">Update Post</b-button>
        </div>
    </form>
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
        }
    },
    components: {},

    methods: {
        onSubmit(event) {
            event.preventDefault();
            if (!this.input.id)
                this.addPost();
            else this.updatePost();

        },
        addPost: function () {
            this.input.id = Math.floor(Math.random() * 10 + 1);
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
        },

    },
    computed: {
        post() {
            return this.$store.state.post;
        },

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
.edit {
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
    margin: auto;
    margin-bottom: 50px;
    padding: 20px;
    width: 40%;
    position: relative;
    top: 30px;
    text-align: center;
}

.edit-control {
    text-align: left;
}

label {
    width: 100%;
}

input,
textarea {
    color: #586068;
    font-size: 16px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: all .2s ease;
}

textarea {
    height: fit-content;
    min-height: 150px;
}


.btn {
    /* text-align: center; */
    width: 50%;
    margin: auto;

}

.error {
    font-size: 13px;
    color: red;
}
</style>
