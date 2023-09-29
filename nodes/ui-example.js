const fs = require('fs')
const path = require('path')

// import our client-side functions
const methods = require('../ui/methods')

module.exports = function(RED) {
    function UIExampleNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        fs.readFile(path.join(__dirname, '../ui', 'UIExample.vue'), 'utf8', (err, html) => {
            console.error('err', err)
            console.log('widget', html)

            config.type = 'ui-example'
            config.templateScope = 'local'
            config.head = [{
                type: 'script',
                data: {
                    defer: 'defer',
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'
                }
            }]
            config.format = html

            // methods that will be available to the widget in the Dashboard
            config.onMounted = methods.onMounted.toString()
            config.onInput = methods.onInput.toString()

            // methods that will be available to the widget in the Dashboard
            config.methods = {
                test: methods.test.toString()
            }     
    
            // which group are we rendering this widget
            const group = RED.nodes.getNode(config.group)
            
            // server-side event handlers
            const evts = {
                onAction: true,
                onInput: function (msg, send, done) {
                    console.log('on input')
                    console.log(msg)
                    // send(msg)
                },
                onSocket: {
                    'my-custom-event': function (id, msg) {
                        console.log('my-custom-event', id, msg)
                    }
                }
            }
    
            // inform the dashboard UI that we are adding this node
            if (group) {
                group.register(node, config, evts)
            } else {
                node.error('No group configured')
            }
        })

    }
    RED.nodes.registerType("ui-example", UIExampleNode);
}