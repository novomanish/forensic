<template>
  <div>
    <List :url="`/machine/${machine}/processlist`" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import List from './List'

  const Summary = {
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

  export default Summary
</script>

<style scoped>
</style>
