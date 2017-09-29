<template>
  <div id="app">
    <table width="100%">
      <tbody valign="top">
        <tr>
          <td width="30%">
            <SideMenu></SideMenu>
          </td>
          <td>
            
            <MachinesList v-if="$store.state.url === '/machine'"></MachinesList>
            
            <Machine v-if="$store.state.url.startsWith('/machine/')"></Machine>
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

  export default {
    name: 'app',

    components: {
      SideMenu,
      MachinesList,
      Machine
    }
    
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
</style>
