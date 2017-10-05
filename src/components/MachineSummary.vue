<template>
    <div>
        <div slot="title">Tab Header</div>
        Tab Content
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Api from './api'
import {VueTabs, VTab} from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'


const MachineSummary = {
    data() {
        var raw = Api.get(this.$store.state.url)
        var attrs = ["Host Name", "OS Name", "OS Version", "OS Manufacturer", "OS Configuration"]

        var machine = {}
        attrs.forEach(a => machine[a] = raw[a]);


        return {
            machine
        }
    },

    methods: {
        ...mapActions([
            'go'
        ])
    },
    components: {
        VueTabs,
        VTab
    }
}

export default MachineSummary
</script>

<style scoped>
.content {
    height: 50px;
    overflow: hidden;
}

table {
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
}
</style>