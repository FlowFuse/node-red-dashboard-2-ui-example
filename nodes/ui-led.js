module.exports = function (RED) {
    function UILedNode (config) {
        RED.nodes.createNode(this, config)

        const node = this

        // which group are we rendering this widget
        const group = RED.nodes.getNode(config.group)

        const base = group.getBase()

        // server-side event handlers
        const evts = {
            onInput: function (msg, send, done) {
                // store the latest value in our Node-RED datastore
                base.stores.data.save(base, node, msg)

                // send it to any connected nodes in Node-RED
                send(msg)
            }
        }

        // evaluated (server-side) the colour value options, so we can compute which colour to display client-side
        const evalColors = []
        config.states.forEach((state) => {
            const value = RED.util.evaluateNodeProperty(state.value, state.valueType, node)
            evalColors.push({
                value,
                color: state.color
            })
        })

        config.evaluated = evalColors

        // inform the dashboard UI that we are adding this node
        if (group) {
            group.register(node, config, evts)
        } else {
            node.error('No group configured')
        }
    }

    RED.nodes.registerType('ui-led', UILedNode)
}
