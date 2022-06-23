<template>
    <tr>
        <th v-for="item in header" :key="item.id" :colspan="item.colspan">{{ item.name }} </th>
    </tr>
</template>

<script>
export default {
    name: "HeaderTable",
    props: {
        header: Array,
    },

}
</script>

<style scoped>
th {
    border: 1px solid black;
    text-align: center;
}
</style>