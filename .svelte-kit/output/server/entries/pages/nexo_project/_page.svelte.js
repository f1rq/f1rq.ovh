import "clsx";
import { B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { B as pop, z as push, F as escape_html, I as store_get, R as attr, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { $ as $format } from "../../../chunks/runtime.js";
const nexo_screenshot = "/_app/immutable/assets/nexo_screenshot.Bcm4Ri0h.png";
function Nexo_desc($$payload, $$props) {
  push();
  var $$store_subs;
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="cheight1 flex flex-col items-center justify-center svelte-xgx8j0"><h1 class="ctext1 text-4xl mb-8 text-center svelte-xgx8j0">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_title"))}</h1> `);
      BlurFade($$payload2, {
        delay: 0.1 * 2,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="siatka grid gap-8 svelte-xgx8j0"><div class="mwp svelte-xgx8j0"><div class="flex justify-center px-4 py-4"><img${attr("src", nexo_screenshot)} alt="nexo bot screenshot" class="w-[32rem] rounded-2xl shadow-2xl border"/></div></div> <div class="mwm svelte-xgx8j0"><div class="flex justify-center px-4 py-4"><img${attr("src", nexo_screenshot)} alt="nexo bot screenshot" class="rounded-2xl shadow-2xl border"/></div></div> <div class="flex flex-col justify-center items-center sm:block mb-24"><p class="ctext2 max-w-96 text-xl svelte-xgx8j0">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_desc1"))}<a href="https://discord.gg/YU5yWFt7vB" class="text-[#7289DA] hover:text-[#425082] transition-colors">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_desc2"))}</a>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_desc3"))}
                        ${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_desc4"))}</p> <ul class="list-disc list-inside my-2 ml-4"><li>/mute</li> <li>/warn</li> <li>/warnlist</li> <li>/clear</li> <li>/ping</li> <li>/kick</li> <li>/ban</li></ul> <p class="ctext2 max-w-96 text-xl svelte-xgx8j0">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("nexo_desc5"))}</p></div></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Nexo_desc($$payload);
  $$payload.out.push(`<!----> `);
  Navigations($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
