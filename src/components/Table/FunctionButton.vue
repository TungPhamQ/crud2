<template>
    <td>
        <b-button :variant="variant">{{ name }} </b-button>
    </td>
</template>

<script>
export default {
    name: "FunctionButton",
    props: {
        name: String,
        variant: null
    },
}
</script>

<style>
</style>