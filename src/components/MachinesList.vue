<template>
  <div>

    <datatable
      :rows="machines"
      :columns="columns"
      :perPage="50"
      :title="'Machines'"
      v-on:row-click="handleClick"
    ></datatable>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Api from './api'
  import DataTable from 'vue-materialize-datatable'

  const MachinesList = {
    data() {
      const machines = Api.get(this.$store.state.route.path);
      const columns = [
        "Host Name",
        "Threat Score",
        "OS Name",
        "OS Version",
        "IP Address",
        "User Name",
        "Time Zone",
        "Domain"
      ].map(c => {
        return {
          "label": c,
          "field":c,
          "html": (c === "Threat Score")
        }
      })

      machines.forEach(machine => {
        const score = machine["Threat Score"];

        machine["Threat Score"] = '<div style="width: 60px; background-color: #ddd; height: 5px; border-radius: 10px">'+
          `<div style="width:${score*60}px; background-color: orange; height: 5px; border-radius: 10px 0 0 10px"></div>`+
          '</div>'

      })

      return {
        machines,
        columns
      }
    },

    methods: {
      handleClick(machine) {
        this.$router.push('/machine/'+machine['Host Name'])
      },
      ...mapActions([
        'go'
      ])
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
