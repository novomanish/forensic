<template>
  <div>

    <v-data-table
      light
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:pagination.sync="pagination"
      item-key="Host Name"
      class="elevation-1"
    >
      <template slot="items" scope="props">
        <tr @click="handleClick(props)">
          <td v-for="head in headers" v-html="props.item[head.value]"></td>
        </tr>
      </template>
    </v-data-table>

  </div>
</template>

<script>
  import Api from './api'
  import DataTable from 'vue-materialize-datatable'

  const MachinesList = {
    computed: {
      items() {
        const items = this.machines;

        items.forEach(machine => {
          const score = machine["Threat Score"];

          machine["Threat Score"] = '<div style="width: 60px; background-color: #ddd; height: 5px; border-radius: 10px">'+
            `<div style="width:${score*60}px; background-color: orange; height: 5px; border-radius: 10px 0 0 10px"></div>`+
            '</div>'

        })
        console.log(items)
        return items;
      }
    },
    data() {
      return {
        machines: Api.get(this.$store.state.route.path),
        headers: [
          {text:"Host Name", value: "tmp", align: "left"},
          {text:"Threat Score", value: "Threat Score", align: "left"},
          {text:"OS Name", value: "OS Name", align: "left"},
          {text:"OS Version", value: "OS Version", align: "left"},
          {text:"IP Address", value: "IP Address", align: "left"},
          {text:"User Name", value: "User Name", align: "left"},
          {text:"Time Zone", value: "Time Zone", align: "left"},
          {text:"Domain", value: "Domain", align: "left"},
        ],
        pagination: {
          sortBy: 'Threat Score',
          descending: true
        },
        selected: []
      }
    },

    methods: {
      handleClick(props) {
        this.$router.push('/machine/'+props.item['Host Name'])
      }
    },

    components: {
      "datatable": DataTable
    }
  }

  export default MachinesList
</script>

<style scoped>
  >>> .actions {
    margin-left:initial !important;
  }

  >>> .table-footer {
       justify-content: flex-start !important;
  }
</style>
