<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'prefetch'}">Prefetch</v-btn>
        <v-btn flat :to="{name: 'shimcache'}">Shim Cache</v-btn>
        <v-btn flat :to="'wip'">Lnk Files</v-btn>
        <v-btn flat :to="{name: 'jumplist'}">Jump List</v-btn>
        <v-btn flat :to="'wip'">Open MRU</v-btn>
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
