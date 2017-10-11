<template>
  <div id="app">
    <table width="100%">
      <tbody valign="top">
      <tr>
        <td class="side">
          <SideMenu></SideMenu>
        </td>
        <td class="">
          <router-view></router-view>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import SideMenu from './SideMenu.vue'
  import MachinesList from './MachinesList.vue'
  import Machine from './Machine.vue'
  import VueRouter from 'vue-router'
  import('vuetify/dist/vuetify.min.css')


  export default {
    name: 'app',

    components: {
      SideMenu,
      MachinesList,
      Machine,
      VueRouter
    }

  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  @import url(http://fonts.googleapis.com/icon?family=Material+Icons);

  ul.tabs {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #E1E1E1;
  }

  ul.tabs li {
    float: left;
    display: block;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  ul.tabs li.router-link-exact-active, ul.tabs li:hover {
    background-color: #B3B3B3;
  }

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

  .side {
    min-width: 230px;
    max-width: 230px;
    min-height: 600px;
    border-right: 1px solid #e6e6e6;
  }
</style>
