(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".nrdb-ui-led[data-v-1c9d686c] {\n    --ui-led-border-width: 12px;\n    --ui-led-shadow-width: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n.nrdb-ui-led-label[data-v-1c9d686c] {\n    flex-grow: 1;\n}\n.nrdb-ui-led-bulb[data-v-1c9d686c] {\n    display: block;\n    height: 65%;\n    aspect-ratio: 1 / 1;\n    background-color: var(--ui-led-color);\n    box-shadow: inset #4413138a 0 -1px var(--ui-led-shadow-width) var(--ui-led-shadow-width);\n}\n.nrdb-ui-led-bulb-on[data-v-1c9d686c] {\n    background: radial-gradient(#ffffff96, #ffffff00 70%), var(--ui-led-color);\n}\n.nrdb-ui-led-bulb--square[data-v-1c9d686c] {\n    border-radius: 25%;\n}\n.nrdb-ui-led-bulb--circle[data-v-1c9d686c] {\n    border-radius: 50%;\n}\n.nrdb-ui-led-bulb--border[data-v-1c9d686c] {\n    border-width: var(--ui-led-border-width);\n    border-color: #222;\n    border-style: solid;\n}\n.nrdb-ui-led-bulb--glow[data-v-1c9d686c] {\n    box-shadow: 0 0 calc(1.25 * var(--ui-led-border-width)) var(--ui-led-color), inset #44131340 0 -1px var(--ui-led-shadow-width) var(--ui-led-shadow-width);\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vuex"), require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vuex", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["ui-led"] = {}, global.vuex, global.Vue));
})(this, function(exports2, vuex, vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    name: "UILed",
    inject: ["$socket"],
    props: {
      id: { type: String, required: true },
      props: { type: Object, default: () => ({}) },
      state: { type: Object, default: () => ({ enabled: false, visible: false }) }
    },
    data() {
      return {
        size: 24
      };
    },
    computed: {
      ...vuex.mapState("data", ["messages"]),
      hasValue: function() {
        return this.messages[this.id] !== void 0;
      },
      flexDirection: function() {
        return this.props.labelPlacement === "left" ? "row" : "row-reverse";
      },
      labelAlignment: function() {
        return this.props.labelAlignment;
      },
      color: function() {
        if (this.hasValue && this.props.evaluated) {
          const msg = this.messages[this.id];
          for (const i in this.props.evaluated) {
            const state = this.props.evaluated[i];
            if (typeof state.value === "object") {
              if (JSON.stringify(state.value) === JSON.stringify(msg.payload)) {
                return state.color;
              }
            } else if (state.value === msg.payload) {
              return state.color;
            }
          }
        }
        return "gray";
      }
    },
    mounted() {
      this.$socket.on("widget-load:" + this.id, (msg) => {
        this.$store.commit("data/bind", {
          widgetId: this.id,
          msg
        });
      });
      this.$socket.on("msg-input:" + this.id, (msg) => {
        this.$store.commit("data/bind", {
          widgetId: this.id,
          msg
        });
      });
      this.$socket.emit("widget-load", this.id);
      this.$nextTick(() => {
        this.size = this.$refs.led.clientWidth;
      });
    },
    unmounted() {
      var _a, _b;
      (_a = this.$socket) == null ? void 0 : _a.off("widget-load" + this.id);
      (_b = this.$socket) == null ? void 0 : _b.off("msg-input:" + this.id);
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: "nrdb-ui-led",
        style: vue.normalizeStyle(`--ui-led-shadow-width: ${$data.size * 0.1}px; --ui-led-border-width: ${$data.size * 0.15}px; --ui-led-color: ${$options.color}; flex-direction: ${$options.flexDirection}`)
      },
      [
        $props.props.label ? (vue.openBlock(), vue.createElementBlock(
          "label",
          {
            key: 0,
            class: "nrdb-ui-led-label v-label",
            style: vue.normalizeStyle(`justify-content: ${$options.labelAlignment}`)
          },
          vue.toDisplayString($props.props.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "span",
          {
            ref: "led",
            class: vue.normalizeClass(["nrdb-ui-led-bulb", `${$options.hasValue ? "nrdb-ui-led-bulb-on" : ""} nrdb-ui-led-bulb--${$props.props.shape} ${$props.props.showGlow && $options.hasValue ? "nrdb-ui-led-bulb--glow" : ""} ${$props.props.showBorder ? "nrdb-ui-led-bulb--border" : ""}`])
          },
          vue.toDisplayString(_ctx.value !== null ? _ctx.value : "No Message Received"),
          3
          /* TEXT, CLASS */
        )
      ],
      4
      /* STYLE */
    );
  }
  const UILed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c9d686c"], ["__file", "/Users/joepavitt/Documents/flowforge/development/nodes/node-red-dashboard-2-ui-led/ui/components/UILed.vue"]]);
  exports2.UILed = UILed;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
