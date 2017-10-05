<template>
  <div>
    <table border="1">
      <thead>
      <th v-for="(value, label) in machine">
        {{ label }}
      </th>
      </thead>
      <tbody valign="top">
      <tr>
        <td v-for="value in machine">
          {{ value }}
        </td>
      </tr>
      </tbody>
    </table>
    <vue-tabs>
      <v-tab title="Machine Summary">
        <MachineSummary></MachineSummary>
      </v-tab>

      <v-tab title="Process List">
        Third tab content
      </v-tab>

      <v-tab title="Network Connections">
        Third tab content
      </v-tab>

      <v-tab title="Services">
        Third tab content
      </v-tab>


      <v-tab title="Registry Information">
        Third tab content
      </v-tab>

      <v-tab title="Software List">
        Third tab content
      </v-tab>


    </vue-tabs>


  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Api from './api'
  import {VueTabs, VTab} from 'vue-nav-tabs'
  import 'vue-nav-tabs/themes/vue-tabs.css'
  import MachineSummary from './MachineSummary'


  const Machine = {
    data() {
      var raw = Api.get(this.$store.state.url)
      var attrs = ["Host Name", "OS Name", "OS Version", "OS Manufacturer", "OS Configuration"]

      var machine = {}
      attrs.forEach(a => machine[a] = raw[a]);


      return {
        machine
      }
    },

    methods: {
      ...mapActions([
        'go'
      ])
    },
    components: {
      VueTabs,
      VTab,
      MachineSummary
    }
  }

  export default Machine
</script>

<style scoped>
  .content {
    height: 50px;
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
  }
</style>
