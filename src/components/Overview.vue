<template>
  <div>
    <List :url="`/machine/${machine}/summary`" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import List from './List'

  const Overview = {
    props: [
      'machine'
    ],
    computed: {
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
