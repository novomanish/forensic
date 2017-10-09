<template>
  <div>
    <List :url="`/machine/${machine}/summary`" />
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
