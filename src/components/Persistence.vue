<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'startup'}">Startup Programs</v-btn>
        <v-btn flat :to="{name: 'entry'}">Registry Entries</v-btn>
        <v-btn flat :to="{path: 'wip'}">Scheduled Tasks</v-btn>
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
