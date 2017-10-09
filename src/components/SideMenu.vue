<template>
  <div>
    <router-link to="{name:'machine'}" tag="div" class="demo-title">
      <img src="/logo.jpg" width="130px"/><br />
      Forensic Demo
    </router-link>
    <router-view name="menu"></router-view>
  </div>
</template>

<script>

  const SideMenu = {
  }

  export default SideMenu
</script>

<style scoped>
  .demo-title {
    height: 180px;
    border-bottom: 2px solid #e6e6e6;
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
    font-size: 1.5em;
  }

</style>
