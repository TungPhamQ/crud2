<template>
    <div class="header">
        <thread>
            <tr>
                <th v-for="(item, index) in header" :key="index">{{ item }}</th>

            </tr>
        </thread>
    </div>
</template>

<script>

export default {
    name: 'CrudHeader',
    props: {
        header: Array
    },
    components: {},
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
