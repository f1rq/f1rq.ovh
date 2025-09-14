import "clsx";
import { B as pop, z as push } from "../../chunks/index2.js";
import { r as registerLocaleLoader, i as init, g as getLocaleFromNavigator } from "../../chunks/runtime.js";
registerLocaleLoader("en", () => import("../../chunks/en.js"));
registerLocaleLoader("pl", () => import("../../chunks/pl.js"));
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator() || "en"
});
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator()
  });
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _layout as default
};
