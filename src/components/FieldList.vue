<template>
  <div>
    <waterfall :line-gap="400" :watch="fields">
      <!-- each component is wrapped by a waterfall slot -->
      <template v-for="(value, label) in fields">
        <waterfall-slot
          :width="500"
          :height="80"
        >
          <div class="label">{{label}}: </div>
          <div class="value">{{value}}</div>
        </waterfall-slot>

      </template>
    </waterfall>
  </div>
</template>

<script>
  import Api from './api'
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  const FieldList = {
    props: [
      'fields'
    ],

    components: {
      Waterfall,
      WaterfallSlot
    }
  }

  export default FieldList
</script>

<style scoped>

  .label, .value {
    padding-left: 10px;
    padding-top: 10px;
    width: 30%;
    float:left;
  }

  .value {
    width: 60%;
    max-height: 50px;
    border-right:1px solid black;
    overflow:scroll
  }
</style>
