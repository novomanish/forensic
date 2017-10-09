<template>
  <div>
    <table border="0" width="100%">
    <tr>
      <td width="200px" style="padding: 20px" align="center">
        <img src="/system.png"/>
      </td>
      <td valign="top" style="padding: 10px">
        <span class="field bold" style="">{{data['Host Name']}}</span>
        <br/>
        <br/>
        <span class="field" >{{data['OS Version']}}</span>
      </td>
    </tr>
    </table>

    <hr style="border-top:0; border-bottom:1px solid #ddd"/>

    <router-view></router-view>
  </div>
</template>

<script>
  import Api from './api'

  const Machine = {
    props: [
      'machine'
    ],
    data() {
      return {
        data: Api.get(`/machine/${this.machine}`)
      }
    },

    computed: {},

    methods: {
    },
    components: {
    }
  }

  export default Machine
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
  .field {
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 0 0 0;
    border-bottom: 1px solid #ccc;
  }

  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
  }
</style>
