<template>
    <div class="edit">
        <div>
            <label v-for="(input, index) in inputs" :key="index">
                {{ input.label }}
                <input :type="input.type" :placeholder="input.placeholder" v-bind:value="input.value">
                {{ input.value }}
                <br>
            </label>
            <button @click="$store.dispatch('addPost', postInput)">Add new post</button>
            {{ postInput }}

        </div>
    </div>
</template>

<script>

export default {
    name: "CrudEdit",
    data() {
        return {
            inputs: [
                {
                    label: "UserId",
                    name: 'userId',
                    type: Number,
                    placeholder: 'nhap user Id',
                    value: ''
                },
                {
                    label: "Title",
                    name: 'title',
                    type: String,
                    placeholder: 'nhap title',
                    value: ''
                },
                {
                    label: "Body",
                    name: 'body',
                    type: String,
                    placeholder: 'nhap body',
                    value: ''
                },
            ],
            postInput: [
                {
                    userId: this.inputs[0].value,
                }
            ]
        }
    },
    components: {},
    props: {

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
