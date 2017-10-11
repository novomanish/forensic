<template>
  <div>
    <v-data-table
      light
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:pagination.sync="pagination"
      class="elevation-1"
      :rows-per-page-items="[50, {text: 'All', value:-1}]"
    >
      <template slot="items" scope="props">
        <tr>
          <td v-for="head in headers" v-html="props.item[head.value]"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import Api from './api'
  import DataTable from 'vue-materialize-datatable'

  const List = {
    props: [
      'url'
    ],
    computed: {
      headers() {
        var columns = Object.keys(this.items[0]).map(c => {
          return {
            "text": c,
            "value":c,
            "align": "left"
          }
        })
        return columns
      }
    },
    data() {
      var items = Api.get(this.url)
      return {
        items,
        pagination: {
          sortBy: 'Host Name'
        },
        selected: []
      }
    },

    methods: {
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
