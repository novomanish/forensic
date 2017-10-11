<template>
  <div>
    <ul class="menu">
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
          "Summary": {name:'overview'},
          "Browser Artifacts": {name:'wip'},
          "Persistence": {name:'wip'},
          "Evidence of Execution": {name:'wip'},
          "Lateral Movement": {name:'wip'},
          "Gather Evidence": {name:'wip'},
        }
      }
    }
  }

  export default SecondaryMenu
</script>

<style scoped>
  .menu li {
    background-size:25px;
    padding-left:50px;
    background-position:10px
  }

  li.router-link-active, li:hover {
        background-color: #e6e6e6;
  }

</style>
