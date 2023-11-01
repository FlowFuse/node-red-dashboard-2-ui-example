<template>
    <p @click="test({'hello': 'world'})">
        This is a 3rd Party Widget
    </p>
    <h1>Widget ID: {{ id }}</h1>
    <ul>
        <li v-for="(value, key, index) in props">
            <label>{{ key }}</label>
        </li>
    </ul>
</template>

<script>

// does not work:
// import { DataTracker } from '@flowfuse/node-red-dashboard'
// import methods from './methods.js'
// import { Chart } from 'chart.js/auto'

// does work
import { markRaw } from 'vue'

export default {
    name: 'UIExample',
    props: {
        id: { type: String, required: true },
        props: { type: Object, default: () => ({}) }
    },
    setup (props) {
        console.log(markRaw)
    },
    data () {
        return {
            id: 'test-id',
            props: {},
        }
    },
}
</script>
