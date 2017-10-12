<template>
  <div>
    <v-card>
      <v-card-title>
        <v-btn small :to="{name: 'processlist', query:!Threat ? {Threat:true} : ''}">
          <v-icon v-if="Threat">close</v-icon>
          Filter Suspicious
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
    <v-data-table
      light
      v-model="selected"
      v-bind:items="filtered"
      v-bind:search="search"
      v-bind:pagination.sync="pagination"
      item-key="ProcessId"
      class="elevation-1"
      :rows-per-page-items="[50, {text: 'All', value:-1}]"
    >
      <template slot="headers" scope="props">
        <tr>
          <th>Process Id</th>
          <th>Caption</th>
          <th>Parent Process Id</th>
          <th>Executable Path</th>
          <th>Creation Date</th>
          <th>Host</th>
        </tr>
      </template>
      <template slot="items" scope="props">
        <tr :active="props.selected">
          <td>
            <v-tooltip v-if="props.item['Threat']" right>
              <v-icon color="orange" slot="activator">warning</v-icon>
              <span v-html="props.item['Threat']['desc']"></span>
            </v-tooltip>
            {{ props.item['ProcessId']}}
          </td>
          <td>{{ props.item['Caption']}}</td>
          <td><router-link :to="{name:'processlist', query:{ProcessId:props.item['ParentProcessId']}}"> {{ props.item['ParentProcessId']}}</router-link></td>
          <td>{{ props.item['ExecutablePath']}}</td>
          <td>{{ getDate(props.item['CreationDate'])}}</td>
          <td>{{ props.item['Hostname']}}</td>
        </tr>
      </template>
    </v-data-table>
    </v-card>
  </div>
</template>

<script>
  import Api from './api'

  const List = {
    props: [
      'machine',
      'ProcessId',
      'Threat'
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
        const filtered = (this.ProcessId) ? this.items.filter(i => i['ProcessId'] == this.ProcessId) :
          (this.Threat) ? this.items.filter(i => !!i['Threat']):this.items
        return filtered;
      },
      threatCount() {
        return this.items.filter(i => !!i['Threat']).length;
      }
    },
    data() {
      var items = Api.get(`/machine/${this.machine}/processlist`)
      return {
        items,
        search: '',
        pagination: {
          sortBy: 'Caption'
        },
        selected: [
        ]
      }
    },

    methods: {
      getDate(d){
        return d.substr(0, 8);
      }
    },
    components: {
    }
  }

  export default List
</script>

<style scoped>

</style>
