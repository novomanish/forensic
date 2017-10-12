<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'overview'}">Overview</v-btn>
        <v-btn flat :to="{name: 'processlist'}">
          <v-badge v-if="threatCount('processlist') > 0" color="red">
            <span slot="badge" v-html="threatCount('processlist')"></span>
            Process List
          </v-badge>
          <template v-else>Process List</template>
        </v-btn>
        <v-btn flat :to="{name: 'netstat'}">
          <v-badge v-if="threatCount('netstat') > 0" color="red">
            <span slot="badge" v-html="threatCount('netstat')"></span>
            Network Connections
          </v-badge>
          <template v-else>Network Connections</template>
          </v-btn>
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
    props: [
      'machine'
    ],
    methods: {
      threatCount(module){
        let items = [];
        switch(module){
          case 'processlist': items = Api.get(`/machine/${this.machine}/processlist`); break;
          case 'netstat': items = Api.get(`/machine/${this.machine}/netstat`); break;
        }

        return items.filter(i => !!i['Threat']).length
      }
    }
  }

  export default Summary
</script>

<style scoped>

</style>
