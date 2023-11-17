module.exports = function (RED) {
    function UIExampleNode (config) {
        RED.nodes.createNode(this, config)

        const node = this

        /*
        config.type = 'ui-example'
        config.templateScope = 'local'
        config.head = [{
            type: 'script',
            data: {
                defer: 'defer',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'
            }
        }]
        // config.format = html

        // methods that will be available to the widget in the Dashboard
        // config.onMounted = methods.onMounted
        // config.onInput = methods.onInput

        // methods that will be available to the widget in the Dashboard
        /* config.methods = {
            test: methods.test
        } */

        // which group are we rendering this widget
        const group = RED.nodes.getNode(config.group)

        // server-side event handlers
        const evts = {
            onAction: true,
            onInput: function (msg, send, done) {
                console.info('on input')
                console.debug(msg)
            },
            onSocket: {
                'my-custom-event': function (conn, id, msg) {
                    console.info('"my-custom-event" received:', conn.id, id, msg)
                    console.info('conn.id:', conn.id)
                    console.info('id:', id)
                    console.info('msg:', msg)
                    console.info('node.id:', node.id)
                    node.send(msg)
                }
            }
        }

        // inform the dashboard UI that we are adding this node
        if (group) {
            group.register(node, config, evts)
        } else {
            node.error('No group configured')
        }
    }

    RED.nodes.registerType('ui-example', UIExampleNode)
}
