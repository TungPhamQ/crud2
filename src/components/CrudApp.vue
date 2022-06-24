<template>
    <div style="width:100%" class="crud-app">
        <CrudEdit />
        <CrudTable :header="header" />
    </div>
</template>

<script>
import CrudTable from './CrudTable.vue';
import CrudEdit from './CrudEdit.vue';


export default {
    name: "CrudApp",
    data() {
        return {
            header: [

                {
                    name: 'userId',
                    colspan: 1,
                },
                {
                    name: 'body',
                    colspan: 1,
                },
                {
                    name: 'title',
                    colspan: 1,
                },
                {
                    name: 'id',
                    colspan: 1,
                },
            ]

        }
    },
    components: { CrudTable, CrudEdit },
    props: {
        posts: Array
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.crud-app {
    background: rgb(255, 250, 250);
    /* background: #000; */
    height: 100vh;
}
</style>
