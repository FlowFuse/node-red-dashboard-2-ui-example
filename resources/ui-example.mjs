import { markRaw as m, openBlock as l, createElementBlock as p, Fragment as c, createElementVNode as r, toDisplayString as a, renderList as f } from "vue";
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, _ = {
  name: "UIExample",
  props: {
    id: { type: String, required: !0 },
    props: { type: Object, default: () => ({}) }
  },
  setup(e) {
    console.log(m);
  },
  data() {
    return {
      id: "test-id",
      props: {}
    };
  }
};
function y(e, t, n, i, o, x) {
  return l(), p(c, null, [
    r("p", {
      onClick: t[0] || (t[0] = (u) => e.test({ hello: "world" }))
    }, " This is a 3rd Party Widget "),
    r("h1", null, "Widget ID: " + a(o.id), 1),
    r("ul", null, [
      (l(!0), p(c, null, f(o.props, (u, d, v) => (l(), p("li", null, [
        r("label", null, a(d), 1)
      ]))), 256))
    ])
  ], 64);
}
const k = /* @__PURE__ */ g(_, [["render", y]]), s = {
  UIExample: k
}, h = {
  install(e) {
    for (const t in s)
      if (s.hasOwnProperty(t)) {
        const n = s[t];
        e.component(n.name, n);
      }
  }
};
export {
  h as default
};
