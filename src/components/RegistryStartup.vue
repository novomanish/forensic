<template>
  <div>
    <List v-bind:url="url" />
  </div>
</template>

<script>
  import List from './List'

  const Overview = {
    props: [
      'machine'
    ],
    computed: {
      url(){
        return `/machine/${this.machine}/persistence/startup`
      }
    },

    methods: {
    },
    components: {
      List
    }
  }

  export default Overview
</script>

<style scoped>
</style>
