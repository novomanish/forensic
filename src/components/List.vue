<template>
  <div>
    <datatable
      :rows="list"
      :columns="columns"
      :perPage="50"
    ></datatable>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Api from './api'
  import DataTable from 'vue-materialize-datatable'

  const List = {
    props: [
      'url'
    ],
    data() {
      var list = Api.get(this.url)
      var columns = Object.keys(list[0]).map(c => {
        return {
          "label": c,
          "field":c
        }
      })

      return {
        list,
        columns,
        options:{}
      }
    },

    methods: {
      ...mapActions([
        'go'
      ])
    },
    components: {
      "datatable": DataTable
    }
  }

  export default List
</script>

<style scoped>
  >>> .actions {
    margin-left:initial !important;
  }

</style>
