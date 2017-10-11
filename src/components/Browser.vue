<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'ie'}">
          <v-avatar size="30px">
            <img src="/ie.png" alt="avatar">
          </v-avatar> &nbsp;
          Internet Explorer
        </v-btn>
        <v-btn flat :to="{name: 'chrome'}">
          <v-avatar size="30px">
            <img src="/chrome.png" alt="avatar">
          </v-avatar> &nbsp;
          Chrome</v-btn>
        <v-btn flat :to="{name: 'firefox'}">
          <v-avatar size="30px">
            <img src="/firefox.png" alt="avatar">
          </v-avatar> &nbsp;
          Firefox</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>

  const Browser = {
  }

  export default Browser
</script>

<style scoped>

</style>
