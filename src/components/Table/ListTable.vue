<template>
    <td class="text-content"> {{ post[item.name] }}</td>
</template>

<script>
export default {
    name: "ListTable",
    props: {
        post: Object,
        item: Object,
    }
}
</script>

<style>
</style>