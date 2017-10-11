<template>
  <div>
    <v-data-table
      light
      v-model="selected"
      v-bind:items="filtered"
      v-bind:pagination.sync="pagination"
      item-key="ProcessId"
      class="elevation-1"
      :rows-per-page-items="[50, {text: 'All', value:-1}]"
    >
      <template slot="headers" scope="props">
        <tr>
          <th>Image Name</th>
          <th>Process Id</th>
          <th>Session#</th>
          <th>Session Name</th>
          <th>Mem Usage</th>
          <th>Status</th>
          <th>User Name</th>
          <th>Window Title</th>
          <th>CPU Time</th>
          <th>Host</th>
        </tr>
      </template>
      <template slot="items" scope="props">
        <tr :active="props.selected">
          <td>{{ props.item['Image Name']}}</td>
          <td><router-link :to="{name:'processlist', query:{ProcessId: props.item['PID']}}"> {{ props.item['PID']}}</router-link></td>
          <td>{{ props.item['Session#']}}</td>
          <td>{{ props.item['Session Name']}}</td>
          <td>{{ props.item['Mem Usage']}}</td>
          <td>{{ props.item['User Name']}}</td>
          <td>{{ props.item['CPU Time']}}</td>
          <td>{{ props.item['Window Title']}}</td>
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
    computed: {
      filtered(){
        return (this.pid) ? this.items.filter(i => i['ProcessId'] == this.pid) : this.items;
      }
    },
    data() {
      var items = Api.get(`/machine/${this.machine}/overview`)
      return {
        items,
        pagination: {
          sortBy: 'Host Name'
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
