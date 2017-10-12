<template>
  <div>
    <v-card>
      <v-card-title>
        <v-btn small :to="{name: 'netstat', query:!Threat ? {Threat:true} : ''}">
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
      item-key="Process ID"
      class="elevation-1"
      :rows-per-page-items="[50, {text: 'All', value:-1}]"
    >
      <template slot="headers" scope="props">
        <tr>
          <th>Process Id</th>
          <th>Protocol</th>
          <th>Local Address</th>
          <th>Foreign Address</th>
          <th>State</th>
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

            <router-link :to="{name:'processlist', query:{ProcessId: props.item['Process ID']}}"> {{ props.item['Process ID']}}</router-link></td>
          <td>{{ props.item['Protocol']}}</td>
          <td>{{ props.item['Local Address']}}</td>
          <td>
            <v-menu offset-y>
              <v-btn color="primary" dark slot="activator">
                {{props.item['Foreign Address'] }}
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="vtLookup(props.item['Foreign Address']);">
                  <v-list-tile-title>VT Lookup</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="whoisLookup(props.item['Foreign Address']);">
                  <v-list-tile-title>WHOIS Lookup</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            </td>
          <td>{{ props.item['State']}}</td>
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
      },
      filtered(){
        const filtered = (this.Threat) ? this.items.filter(i => !!i['Threat']):this.items
        return filtered;
      },
      threatCount() {
        return this.items.filter(i => !!i['Threat']).length;
      }
    },
    data() {
      var items = Api.get(`/machine/${this.machine}/netstat`)
      return {
        items,
        search: '',
        pagination: {
        },
        selected: [
        ]
      }
    },

    methods: {
      getIp(address){
        return address.substr(0, address.indexOf(":"));
      },
      vtLookup(address){
        window.open(`https://www.virustotal.com/#/ip-address/${this.getIp(address)}`)
      },
      whoisLookup(address){
        window.open(`https://www.whois.com/whois/${this.getIp(address)}`)
      }
    },
    components: {
    }
  }

  export default List
</script>

<style scoped>

</style>
