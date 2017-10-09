<template>
  <div>
    <List :url="`/machine/${machine}/softwarelist`" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import List from './List'

  const SoftwareList = {
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

  export default SoftwareList
</script>

<style scoped>
</style>
