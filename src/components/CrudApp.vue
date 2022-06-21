<template>
    <div style="width:100%">
        <CrudEdit />
        <CrudList />
    </div>
</template>

<script>
import CrudList from './CrudList.vue';
import CrudEdit from './CrudEdit.vue';


export default {
    name: "CrudApp",
    data() {
        return {

        }
    },
    components: { CrudList, CrudEdit },
    props: {
        posts: Array
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
