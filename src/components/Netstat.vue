<template>
  <div>
    <List :url="`/machine/${machine}/netstat`" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import List from './List'

  const Netstat = {
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

  export default Netstat
</script>

<style scoped>
</style>
