<template>
    <!-- Component must be wrapped in a block so props such as className and style can be passed in from parent -->
    <div className="ui-example-wrapper">
        <h1>Example Integrated Widget: {{ id }}</h1>

        <!-- Note: We can use any Vuetify Components by default -->
        <h2>Using Vuetify Components</h2>
        <p>
            <a href="https://vuetifyjs.com/en/components/all/#containment" target="_blank">Vuetify</a> is included by default, so we can include any of their components.
            Here we have a button that will open a "Hello World" alert:
        </p>
        <pre>&lt;v-btn @click="alert('Hello World')"&gt;Alert "Hello World"&lt;/v-btn&gt;</pre>
        <v-btn @click="alert('Hello World')">Alert "Hello World"</v-btn>

        <h2>Accessing Properties</h2>
        <p>
            Your Vue component will be rendered and passed a few built-in properties.
        </p>

        <h3><code>this.id</code></h3>
        <p>Each widget has a unique ID, which can be used when sending messages to Node-RED via <code>this.$socket.emit()</code>.</p>
        <pre>{{ id }}</pre>

        <h3><code>this.props</code></h3>
        <p>
            The <code>props</code> object contains the properties defined in the widget's configuration in Node-RED.
            It is a snapshot of the properties at the time the widget was loaded
        </p>
        <pre>{{ props }}</pre>

        <h3><code>this.state</code></h3>
        <p>
            The <code>state</code> object contains any properties that have been overridden at runtime (after the node is deployed).
            Your node should support override of configuration options via <code>msg.ui_update.&lt;property&gt;</code>
        </p>
        <pre>{{ state }}</pre>

        <h2>Dynamic Properties</h2>
        <p>We have setup a dynamic property <code>example</code> which can be updated from Node-RED.</p>
        <p>
            We've wrapped this into a computed variable and used the built-in <code>getProperty()</code>
            function which automatically checks both <code>props</code> and <code>state</code>.
        </p>
        <pre>{{ example }}</pre>

        <h2>Communications with Node-RED</h2>
        <p>Events are sent back and forth between Node-RED and Dashboard 2.0 with SocketIO</p>
        <h3>Sending Node-RED Messages</h3>
        <p>You can send and receive the built-in events, as well as defining your own:</p>
        <v-btn @click="send({payload: 'Hello World'})">Send msg</v-btn>
        <h3>Sending Custom SocketIO Events</h3>
        <p>
            You can also send custom events, which can be handled by a custom event handler in Node-RED.
            The Node-RED-side's handler should have <code>(conn, id, msg)</code> as the input variables.
        </p>
        <v-btn @click="test()">Send 'my-custom-event'</v-btn>

        <h2>Data Retention &amp; VueX Stores</h2>
        <p>Dashboard 2.0 has a built-in VueX datastore. This can be used to store (and retrieve) the latest received messages.</p>
        <p>Note: the vuex store is cleared on refresh of a screen, at which point, data will be loaded from the Node-RED datastore, should it be present.</p>
        <p>Send a message to this node in order to see the value here:</p>
        <pre>{{ messages && messages[id] ? messages[id] : 'No Data' }}</pre>
        <p>Note that it persists, even after refresh. This is because, in our <code>onInput</code> event handler in our <code>ui-example.js</code> file, we store the message in the Node-RED datastore.</p>

        <!-- Note: We can use any Vuetify Components by default -->
        <h2>Styling with Vuetify &amp; CSS</h2>
        <p>
            We can define our own CSS within the widget's repository,
            and expose classes like <code class="ui-example-class">ui-example-class</code>
        </p>
        <p>
            Vuetify also comes with a handful of utility classes to assist with styling:
            <ul>
                <li v-for="guide in vuetifyStyles" :key="guide.label"><a :href="guide.url" target="_blank">{{ guide.label }}</a></li>
            </ul>
        </p>

        <h2>External Dependencies</h2>
        <p>
            Any additional libraries you require can be installed as in any other package.
            When the <code>npm run build</code> command is run, Vite will package everything
            up into the single <code>.umd.js</code> file.
        </p>
        <p>
            Here, we include the NPM package <code>to-title-case</code>, and bind it's
            functionality to a VueJS Computed Variable, which automatically re-calculates.
        </p>
        <p>
            <v-text-field v-model="input.title" type="text" />
            VueJS Computed Variable Output: <i>{{ titleCase }}</i>
        </p>
    </div>
</template>

<script>
import toTitleCase from 'to-title-case'
import { mapState } from 'vuex'

export default {
    name: 'UIExample',
    inject: ['$socket', '$dataTracker'],
    props: {
        /* do not remove entries from this - Dashboard's Layout Manager's will pass this data to your component */
        id: { type: String, required: true },
        props: { type: Object, default: () => ({}) },
        state: { type: Object, default: () => ({ enabled: false, visible: false }) }
    },
    setup (props) {
        console.info('UIExample setup with:', props)
    },
    data () {
        return {
            input: {
                title: 'some text here will base turned into title case.'
            },
            vuetifyStyles: [
                { label: 'Responsive Displays', url: 'https://vuetifyjs.com/en/styles/display/#display' },
                { label: 'Flex', url: 'https://vuetifyjs.com/en/styles/flex/' },
                { label: 'Spacing', url: 'https://vuetifyjs.com/en/styles/spacing/#how-it-works' },
                { label: 'Text & Typography', url: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography' }
            ]
        }
    },
    computed: {
        titleCase () {
            return toTitleCase(this.input.title)
        },
        ...mapState('data', ['messages']),
        // wrap our "example" property in a computed property to ensure it re-calculates when the property changes
        example () {
            // use the globally available "getProperty" function
            return this.getProperty('example')
        }
    },
    created () {
        // setup our event handlers, and informs Node-RED that this widget has loaded
        this.$dataTracker(this.id, this.onInput, this.onLoad, this.onDynamicProperties)
    },
    methods: {
        /*
            widget-action just sends a msg to Node-RED, it does not store the msg state server-side
            alternatively, you can use widget-change, which will also store the msg in the Node's datastore
        */
        send (msg) {
            this.$socket.emit('widget-action', this.id, msg)
        },
        /*
            (optional) Custom onInput function to handle incoming messages from Node-RED
        */
        onInput (msg) {
            // load the latest message from the Node-RED datastore when this widget is loaded
            // storing it in our vuex store so that we have it saved as we navigate around
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            })
        },
        /*
            (optional) Custom onLoad function to handle the loading state of the widget
            msg   - the latest message from the Node-RED datastore
            state - The Node-RED config, including any overrides saved to the server-side statestore
        */
        onLoad (msg, state) {
            // loads the last msg received into this node from the Node-RED datastore
            // state is auto-stored into the widget props, but is available here if you want to do anything else
        },
        /*
            (optional) Custom onDynamicProperties function to handle dynamic properties
            msg - the latest message from the Node-RED datastore
        */
        onDynamicProperties (msg) {
            // handle any dynamic properties that are sent from Node-RED
            const updates = msg.ui_update
            if (!updates) {
                return
            }
            if (typeof updates.example !== 'undefined') {
                // use the globally available "setDynamicProperties" function to store any updates to this property
                this.setDynamicProperties({ example: updates.example })
            }
        },
        alert (text) {
            alert(text)
        },
        /*
            You can also emit custom events to Node-RED, which can be handled by a custom event handler
            See the ui-example.js file for how to subscribe to these.
        */
        test () {
            console.info('custom event handler:')
            this.$socket.emit('my-custom-event', this.id, {
                payload: 'Custom Event'
            })
        }
    }
}
</script>

<style scoped>
/* CSS is auto scoped, but using named classes is still recommended */
@import "../stylesheets/ui-example.css";
</style>
