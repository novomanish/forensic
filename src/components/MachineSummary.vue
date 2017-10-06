<template>
  <div>
    <div id="people">
      <datatable
        :rows="summary"
        :columns="columns"
        :perPage="50"
      ></datatable>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Api from './api'
  import DataTable from 'vue-materialize-datatable'

  const MachineSummary = {
    data() {
      var summary = Api.get(`${this.$store.state.url}/summary`)
      var columns = Object.keys(summary[0]).map(c => {
        return {
          "label": c,
          "field":c
        }
      })

      return {
        summary,
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

  export default MachineSummary
</script>

<style scoped>
  @import url(http://fonts.googleapis.com/icon?family=Material+Icons);

</style>
