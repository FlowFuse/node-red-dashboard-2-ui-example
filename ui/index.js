/* eslint-disable no-prototype-builtins */

// local
import components from './components'

const plugin = {
    install (Vue) {
        // Our Components & Directives
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export default plugin
