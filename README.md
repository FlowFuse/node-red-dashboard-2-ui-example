# UI LED (Node-RED Dashboard 2.0 Widget)

This repository contains the code base for `ui-led`, a third-party node for the [Node-RED Dashboard 2.0](https://dashboard.flowfuse.com).

<img width="500" alt="Screenshot 2024-02-17 at 09 55 55" src="https://github.com/FlowFuse/node-red-dashboard-2-ui-led/assets/99246719/e90ebb01-a62b-4332-bb2e-958c77d8a798">

## Configuration Options

The `ui-led` node has the following configuration options:

### General

<img width="500" alt="Screenshot 2024-02-17 at 10 02 43" src="https://github.com/FlowFuse/node-red-dashboard-2-ui-led/assets/99246719/8ed8de2a-d300-483d-a2c3-720fe296cf25">

- **Name**: The name of the node within the context of the Node-RED editor.
- **Group**: The UI Group that the LED will render inside.
- **Size**: The relative size of the LED with `width` x `height`

### Label Styling 

<img width="500" alt="Screenshot 2024-02-17 at 10 02 28" src="https://github.com/FlowFuse/node-red-dashboard-2-ui-led/assets/99246719/d82ee430-bdeb-4ae1-bc3b-0a375f41b72d">

- **Text**: The label to display next to the LED.
- **Placement**: Which side of the LED the label will be displayed.
- **Alignment**: Within the space to the left/right of the LED, how the label will be aligned in that space.

### LED Styling

<img width="500" alt="Screenshot 2024-02-17 at 10 01 59" src="https://github.com/FlowFuse/node-red-dashboard-2-ui-led/assets/99246719/0709968e-60cd-4f20-a082-46d4be0ff3b7">

- **Shape**: "Circle" or "Square"
- **Show Border**: Should the LED have a fixed border around the shape, emulating a physical LED.
- **Show Glow**: Should the LED have a glow effect.

### Values

<img width="500" alt="Screenshot 2024-02-17 at 10 01 44" src="https://github.com/FlowFuse/node-red-dashboard-2-ui-led/assets/99246719/debe5d84-454f-43f4-82b9-a48f29b12307">

- Maps a value to a respective color. If a value is provided that it doesn't recognise, a general grey color will be used.
