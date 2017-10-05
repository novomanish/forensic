<template>
    <div>
        <div class="demo-title">
            Forensic Demo
        </div>
        <ul>
            <li v-for="(url, label) in items"
             @click="go(url)"
             :class="$store.state.url.startsWith(url) ? 'selected' : '' ">
                {{ label }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const SideMenu = {
    data() {
        return {
            'items': {
                "Machines": "/machine",
                "dummy": "dummy"
            }
        }
    },

    methods: {
        ...mapActions([
            'go'
        ])
    }
}

export default SideMenu
</script>

<style scoped>
.selected {
    background-color: red
}

    .demo-title {
        height: 80px;
        border-bottom: 2px solid #e6e6e6;
        text-align: center;
        padding-top: 20px;
        font-weight: bold;
        font-size: 1.5em;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 200px;
    }
    li {
        font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer; 
    }
    li.selected, li:hover {
        background-color: #e6e6e6;
    }

</style>