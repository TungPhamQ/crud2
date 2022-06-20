<template>
    <div class="table">
        <CrudEdit />
        <CrudHeader :header="header"></CrudHeader>
        <CrudList />
    </div>
</template>

<script>
import CrudHeader from './CrudHeader.vue';
import CrudList from './CrudList.vue';
import CrudEdit from './CrudEdit.vue';


export default {
    name: "CrudApp",
    data() {
        return {
            header: [
                'userId',
                'id',
                'title',
                'body',
            ]
        }
    },
    components: { CrudHeader, CrudList, CrudEdit },
    props: {
        posts: Array
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
