<template>
    <div style="width:100%">
        <CrudEdit />
        <CrudList :header="header" />
    </div>
</template>

<script>
import CrudList from './CrudList.vue';
import CrudEdit from './CrudEdit.vue';


export default {
    name: "CrudApp",
    data() {
        return {
            header: [
                {
                    name: 'UserID',
                    colspan: 1,
                },
                {
                    name: 'ID',
                    colspan: 1,
                },
                {
                    name: 'Title',
                    colspan: 1,
                },
                {
                    name: 'Body',
                    colspan: 1,
                },
                {
                    name: 'Function',
                    colspan: 2,
                },
            ]

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
