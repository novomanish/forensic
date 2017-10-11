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
  const PrimaryMenu = {
    data() {
      return {
        'items': [
          {
            title:"Machines",
            to: {name: 'machine'},
            icon: "dashboard"
          },
          {
            title:"Evidence Lookup",
            to: {name: 'wip'},
            icon: "question_answer"
          }
        ]
      }
    }
  }

  export default PrimaryMenu
</script>

<style scoped>

</style>
