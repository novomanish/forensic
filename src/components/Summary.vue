<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'overview'}">Overview</v-btn>
        <v-btn flat :to="{name: 'processlist'}">Process List</v-btn>
        <v-btn flat :to="{name: 'netstat'}">Network Connections</v-btn>
        <v-btn flat :to="{name: 'services'}">Services</v-btn>
        <v-btn flat :to="{name: 'softwarelist'}">Software List</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
  import Api from './api'

  const Summary = {
  }

  export default Summary
</script>

<style scoped>

</style>
