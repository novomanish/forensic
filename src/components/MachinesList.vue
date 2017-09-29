<template>
    <div>
        <table>
            <thead>
                <th v-for="(value, key) in machines[0]">
                    {{ key }}
                </th>
            </thead>
            <tbody valign="top">
                <tr v-for="machine in machines"
                 @click="go('/machine/'+machine['Host Name'])">
                    <td v-for="value in machine">
                        <div class="content">{{ value }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Api from './api'

const MachinesList = {
    data() {
        return {
            machines: Api.get(this.$store.state.url)
        }
    },

    methods: {
        ...mapActions([
            'go'
        ])
    }
}

export default MachinesList
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
tr {
    cursor: pointer;
}
tr:hover {
    background-color: #e6e6e6;
}
</style>