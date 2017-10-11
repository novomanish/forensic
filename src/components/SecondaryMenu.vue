<template>
  <div>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
  const SecondaryMenu = {
    data() {
      return {
        'items': [
          {title: 'Summary', to: {name: 'overview'}, icon: 'accessibility'},
          {title: 'Browser Artifacts', to: {name: 'ie'}, icon: 'public'},
          {title: 'Persistence', to: {name: 'wip'}, icon: "history"},
          {title: 'Evidence of Execution', to: {name: 'wip'}, icon: 'group'},
          {title: 'Lateral Movement', to: {name: 'wip'}, icon: 'beach_access'},
          {title: 'Gather Evidence', to: {name: 'wip'}, icon: 'free_breakfast'}
        ]
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
