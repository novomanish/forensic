<template>
  <div id="app">
    <table width="100%">
      <tbody valign="top">
        <tr>
          <td class="side">
            <SideMenu></SideMenu>
          </td>
          <td>
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
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

.side {
  width: 200px;
  min-height: 400px;
  border-right: 1px solid #e6e6e6;
}
</style>
