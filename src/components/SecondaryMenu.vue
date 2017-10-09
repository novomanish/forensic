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
          "Machine Summary": {name:'summary'},
          "Process List": {name:'processlist'},
          "Network Connections": {name:'netstat'},
          "Services": {name:'services'},
          "Registry Information": {name:'reginfo'},
          "Software List": {name:'softwarelist'}
        }
      }
    }
  }

  export default SecondaryMenu
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
  }
  li {
    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
  }
  li.router-link-exact-active, li:hover {
    background-color: #e6e6e6;
  }

</style>
