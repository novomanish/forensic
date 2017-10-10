<template>
  <div>
    <ul>
      <router-link v-for="(menu, label) in items"
                   class="menu"
                   :key="menu.name"
                   tag="li"
                   :to="{name:menu.name}"
                   :style="`background-image: url(${menu.icon}) ;`"
      >
        {{ label }}
      </router-link>
    </ul>
  </div>
</template>

<script>
  const PrimaryMenu = {
    data() {
      return {
        'items': {
          "Machines": {
            name:"machine",
            icon: "/system.png"
          },
          "Evidence Lookup": {
            name:"machine1",
            icon: "/system1.png"
          }
        }
      }
    }
  }

  export default PrimaryMenu
</script>

<style scoped>
.menu {
  background-size:25px;
  padding-left:50px;
  background-position:10px
}
</style>
