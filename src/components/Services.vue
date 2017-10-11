<template>
  <div>
    <v-data-table
      light
      v-model="selected"
      v-bind:items="items"
      v-bind:pagination.sync="pagination"
      item-key="Process ID"
      class="elevation-1"
      :rows-per-page-items="[50, {text: 'All', value:-1}]"
    >
      <template slot="headers" scope="props">
        <tr>
          <th>Display Name</th>
          <th>Name</th>
          <th>Process Id</th>
          <th>Path Name</th>
          <th>Start Mode</th>
          <th>State</th>
          <th>Host</th>
        </tr>
      </template>
      <template slot="items" scope="props">
        <tr :active="props.selected">
          <td>{{ props.item['DisplayName']}}</td>
          <td>{{ props.item['Name']}}</td>
          <td><router-link :to="{name:'processlist', query:{ProcessId: props.item['ProcessId']}}"> {{ props.item['ProcessId']}}</router-link></td>
          <td>{{ props.item['PathName']}}</td>
          <td>{{ props.item['StartMode']}}</td>
          <td>{{ props.item['State']}}</td>
          <td>{{ props.item['Hostname']}}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import Api from './api'

  const List = {
    props: [
      'machine',
      'ProcessId'
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
      var items = Api.get(`/machine/${this.machine}/services`)
      return {
        items,
        pagination: {
        },
        selected: [
        ]
      }
    },

    methods: {
    },
    components: {
    }
  }

  export default List
</script>

<style scoped>

</style>
