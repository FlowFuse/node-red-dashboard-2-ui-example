<template>
    <!-- Component must be wrapped in a block so props such as className and style can be passed in from parent -->
    <div className="ui-example-wrapper">
        <h1>Widget ID: {{ id }}</h1>
        <p @click="test({ hello: 'world' })">This is a 3rd Party Widget</p>
        <ul>
            <li v-for="(value, key, index) in props" :key="key">
                <label>#{{ index }} {{ key }}: {{ value }}</label>
            </li>
        </ul>
        <p>
            It supports using packages from npm, such as <code>to-title-case</code>:
        </p>
        <p>
            <input v-model="input.title" type="text"> => <span>{{ title }}</span>
        </p>
    </div>
</template>

<script>
import toTitleCase from 'to-title-case'
import { markRaw } from 'vue'

export default {
    name: 'UIExample',
    inject: ['$socket'],
    props: {
        id: { type: String, required: true },
        props: { type: Object, default: () => ({}) },
        state: { type: Object, default: () => ({ enabled: false, visible: false }) }
    },
    setup (props) {
        console.info('UIExample setup with:', props)
        console.debug('Vue function loaded correctly', markRaw)
    },
    onMounted () {
        console.info('This widget has mounted')
    },
    onInput (msg) {
        console.info('Custom onInput handler:')
        console.debug(msg)
    },
    test () {
        console.info('custom event handler:')
        console.debug(
            this.$socket.emit('my-custom-event', this.id, {
                payload: 'Test'
            })
        )
    },
    data () {
        return {
            input: {
                title: 'this is lower case...'
            }
        }
    },
    computed: {
        title () {
            return toTitleCase(this.input.title)
        }
    }
}
</script>

<style scoped>
/* CSS is auto scoped, but using named classes is still recommended */
.ui-example-wrapper {
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
}

h1 {
    margin-bottom: 10px
}

p {
    margin-bottom: 5px;
}

ul li {
   list-style-type: circle;
   list-style-position: inside;
   margin-left: 15px;
}

input {
    border: 1px solid black;
}
</style>
