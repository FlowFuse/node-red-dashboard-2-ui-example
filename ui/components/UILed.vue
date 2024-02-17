<template>
    <div class="nrdb-ui-led" :style="`--ui-led-shadow-width: ${size * 0.1}px; --ui-led-border-width: ${size * 0.15}px; --ui-led-color: ${color}; flex-direction: ${flexDirection}`">
        <label v-if="props.label" class="nrdb-ui-led-label v-label" :style="`justify-content: ${labelAlignment}`">{{ props.label }}</label>
        <span ref="led" class="nrdb-ui-led-bulb" :class="`${hasValue ? 'nrdb-ui-led-bulb-on' : ''} nrdb-ui-led-bulb--${props.shape} ${props.showGlow && hasValue ? 'nrdb-ui-led-bulb--glow' : ''} ${props.showBorder ? 'nrdb-ui-led-bulb--border' : ''}`">{{ value !== null ? value : 'No Message Received' }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UILed',
    inject: ['$socket'],
    props: {
        id: { type: String, required: true },
        props: { type: Object, default: () => ({}) },
        state: { type: Object, default: () => ({ enabled: false, visible: false }) }
    },
    data () {
        return {
            size: 24
        }
    },
    computed: {
        ...mapState('data', ['messages']),
        hasValue: function () {
            return this.messages[this.id] !== undefined
        },
        flexDirection: function () {
            return this.props.labelPlacement === 'left' ? 'row' : 'row-reverse'
        },
        labelAlignment: function () {
            return this.props.labelAlignment
        },
        color: function () {
            if (this.hasValue && this.props.evaluated) {
                const msg = this.messages[this.id]
                // check which, if any, color we should be displaying
                for (const i in this.props.evaluated) {
                    const state = this.props.evaluated[i]
                    if (typeof (state.value) === 'object') {
                        if (JSON.stringify(state.value) === JSON.stringify(msg.payload)) {
                            return state.color
                        }
                    } else if (state.value === msg.payload) {
                        return state.color
                    }
                }
            }
            return 'gray'
        }
    },
    mounted () {
        this.$socket.on('widget-load:' + this.id, (msg) => {
            // load the latest message from the Node-RED datastore when this widget is loaded
            // storing it in our vuex store so that we have it saved as we navigate around
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            })
        })
        this.$socket.on('msg-input:' + this.id, (msg) => {
            // store the latest message in our client-side vuex store when we receive a new message
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            })
        })
        // tell Node-RED that we're loading a new instance of this widget
        this.$socket.emit('widget-load', this.id)

        this.$nextTick(() => {
            this.size = this.$refs.led.clientWidth
        })
    },
    unmounted () {
        /* Make sure, any events you subscribe to on SocketIO are unsubscribed to here */
        this.$socket?.off('widget-load' + this.id)
        this.$socket?.off('msg-input:' + this.id)
    }
}
</script>

<style scoped>
.nrdb-ui-led {
    --ui-led-border-width: 12px;
    --ui-led-shadow-width: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.nrdb-ui-led-label {
    flex-grow: 1;
}

.nrdb-ui-led-bulb {
    display: block;
    height: 65%;
    aspect-ratio: 1 / 1;
    background-color: var(--ui-led-color);
    box-shadow: inset #4413138a 0 -1px var(--ui-led-shadow-width) var(--ui-led-shadow-width);
}

.nrdb-ui-led-bulb-on {
    background: radial-gradient(#ffffff96, #ffffff00 70%), var(--ui-led-color);
}

.nrdb-ui-led-bulb--square {
    border-radius: 25%;
}

.nrdb-ui-led-bulb--circle {
    border-radius: 50%;
}

.nrdb-ui-led-bulb--border {
    border-width: var(--ui-led-border-width);
    border-color: #222;
    border-style: solid;
}

.nrdb-ui-led-bulb--glow {
    box-shadow: 0 0 calc(1.25 * var(--ui-led-border-width)) var(--ui-led-color), inset #44131340 0 -1px var(--ui-led-shadow-width) var(--ui-led-shadow-width);
}
</style>
