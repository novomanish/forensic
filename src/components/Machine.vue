<template>
    <div>
        <table border="1">
            <thead>
                <th v-for="(value, label) in machine">
                    {{ label }}
                </th>
            </thead>
            <tbody valign="top">
                <tr>
                    <td v-for="value in machine">
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Api from './api'

const Machine = {
    data() {
        return {
            machine: Api.get(this.$store.state.url)
        }
    },

    methods: {
        ...mapActions([
            'go'
        ])
    }
}

export default Machine
</script>
