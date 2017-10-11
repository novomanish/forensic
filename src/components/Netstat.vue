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
          <td><router-link :to="{name:'processlist', query:{ProcessId: props.item['Process ID']}}"> {{ props.item['Process ID']}}</router-link></td>
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
      var items = Api.get(`/machine/${this.machine}/netstat`)
      return {
        items,
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
