<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app>
        <SideMenu></SideMenu>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-title>Innovate 2017 - Forenic MVP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon :to="{name: 'machine'}">
          <v-icon>home</v-icon>
        </v-btn>
      </v-toolbar>
      <main>
        <v-content>
          <v-container fluid>
           <router-view></router-view>
          </v-container>
        </v-content>
      </main>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
  import SideMenu from './SideMenu.vue'
  import MachinesList from './MachinesList.vue'
  import Machine from './Machine.vue'
  import VueRouter from 'vue-router'
  import('vuetify/dist/vuetify.min.css')
  import 'vuetify/src/stylus/main.styl'
  import VApp from "vuetify/es5/components/VApp/VApp";


  export default {
    name: 'app',

    components: {
      VApp,
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
</style>
