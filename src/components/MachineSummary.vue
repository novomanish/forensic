<template>
  <div>
    <table border="1">
      <thead>
      <th v-for="(value, label) in summary[0]">
        {{ label }}
      </th>
      </thead>
      <tbody valign="top">
      <tr v-for="item in summary">
        <td v-for="value in item">
          <div class="content">{{ value }}</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Api from './api'


  const MachineSummary = {
    data() {
      var summary = Api.get(`${this.$store.state.url}/summary`)
      var attrs = ["Host Name", "OS Name", "OS Version", "OS Manufacturer", "OS Configuration"]

      var machine = {}
      attrs.forEach(a => machine[a] = summary[a]);


      return {
        summary
      }
    },

    methods: {
      ...mapActions([
        'go'
      ])
    },
    components: {
    }
  }

  export default MachineSummary
</script>

<style scoped>
  .content {
    height: 50px;
    overflow: hidden;
    padding: 5px;
    max-width:150px;
  }

  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
  }
</style>
