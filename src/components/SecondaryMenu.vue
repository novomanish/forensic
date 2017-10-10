<template>
  <div>
    <ul>
      <router-link v-for="(menu, label) in item"
                   :key="menu.name"
                   tag="li"
                   :to="{name:menu.name}">
        {{ label }}
      </router-link>
    </ul>
  </div>
</template>

<script>
  const SecondaryMenu = {
    data() {
      return {
        'item': {
          "Summary": {name:'summary'},
          "Process List": {name:'processlist'},
          "Network Connections": {name:'netstat'},
          "Services": {name:'services'},
          "Software List": {name:'softwarelist'}
        }
      }
    }
  }

  export default SecondaryMenu
</script>

<style scoped>

</style>
