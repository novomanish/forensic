<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'rdp'}">Remote Desktop Connections</v-btn>
        <v-btn flat :to="{name: 'runmru'}">Run MRU</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
  import Api from './api'

  const Summary = {
    props: [
      'machine'
    ],
    methods: {}
  }

  export default Summary
</script>

<style scoped>

</style>
