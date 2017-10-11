<template>
  <div>
    <ul class="tabs">
      <router-link :to="{name: 'overview'}" tag="li" class="left">
        Overview
      </router-link>
      <router-link :to="{name: 'processlist'}" tag="li">
        Process List
      </router-link>
      <router-link :to="{name: 'netstat'}" tag="li">
        Network Connections
      </router-link>
      <router-link :to="{name: 'services'}" tag="li">
        Services
      </router-link>
      <router-link :to="{name: 'softwarelist'}" tag="li">
        Software List
      </router-link>
    </ul>

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
