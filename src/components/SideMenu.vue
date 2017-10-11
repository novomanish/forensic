<template>
  <div>
    <v-card>
      <v-card-media src="/logo.jpg" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Forensic Demo</h3>
      </v-card-title>
    </v-card>

    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title">
          Home
        </v-list-tile-title>
        <v-spacer></v-spacer>
        <v-btn icon :to="{name: 'machine'}">
          <v-icon>home</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <router-view name="menu"></router-view>
  </div>
</template>

<script>

  const SideMenu = {
  }

  export default SideMenu
</script>

<style scoped>
  >>> ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  >>> li {
    width: 100%;
    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
  }

</style>
