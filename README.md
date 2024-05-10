# Example Node for Node-RED Dashboard


This repository contains an example, third-party, node for the Node-RED Dashboard. 

To get started, clone this repository:

```bash
# if using HTTPS:
git clone https://github.com/FlowFuse/node-red-dashboard-2-ui-example.git

# if using SSH:
git clone git@github.com:FlowFuse/node-red-dashboard-2-ui-example.git
```

Then, you can install it's dependencies with:

```bash
npm install
```

## Development with Dashboard 2.0

You can read our [contribution guide](https://dashboard.flowfuse.com/contributing/widgets/third-party.html) for details on developing your own Dashboard 2.0 integrations & widgets.

This project is intended to be used as a starting point for creating your own custom nodes that can integrate directly with [Node-RED Dashboard 2.0](https://github.com/FlowFuse/flowforge-nr-dashboard).

Note that if you're looking to contribute directly to Node-RED Dashboard 2.0, then use the examples already in the core repository to build on, as they are structured differently to external/third-party widgets.

## Architecture

All third-party (non-core) nodes for Node-RED Dashboard 2.0 are structured such that they extend the core `ui-template` node, and provide access such that you can define custom HTML, CSS, and JavaScript for your widget.