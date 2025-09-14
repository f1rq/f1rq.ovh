import "clsx";
import { G as head, B as pop, z as push, F as escape_html, I as store_get, J as unsubscribe_stores } from "../../chunks/index2.js";
import { B as BlurFade, N as Navigations } from "../../chunks/navigations.js";
import { $ as $format } from "../../chunks/runtime.js";
function Hero($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="/font/simple-icons.css"/>`);
  });
  $$payload.out.push(`<div class="hero min-h-screen text-right svelte-549brs"><div class="hero-content flex-col lg:flex-row-reverse"><div>`);
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1 class="text-5xl">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("hero_title"))}<span class="text-accent">f1rq</span></h1>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 2,
    children: ($$payload2) => {
      $$payload2.out.push(`<p class="py-6 svelte-549brs">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("hero_main1"))}<br/> <span class="font-[1000] text-xl">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("hero_main2"))}</span></p>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 3,
    children: ($$payload2) => {
      $$payload2.out.push(`<a href="https://github.com/f1rq" target="_blank" aria-label="github"><i class="fa-brands fa-github text-2xl svelte-549brs"></i></a> <a href="https://discord.gg/YU5yWFt7vB" target="_blank" aria-label="discord"><i class="fa-brands fa-discord text-2xl svelte-549brs"></i></a> <a href="https://open.spotify.com/user/dcfv3p5qxwa0sfdimxgyqabri" target="_blank" aria-label="spotify"><i class="fa-brands fa-spotify text-2xl svelte-549brs"></i></a> <a href="https://www.youtube.com/@_f1rq_" target="_blank" aria-label="youtube"><i class="fa-brands fa-youtube text-2xl svelte-549brs"></i></a> <a href="https://buymeacoffee.com/f1rq" target="_blank" aria-label="coffe"><i class="fa-solid fa-mug-saucer text-2xl svelte-549brs"></i></a>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out.push(`<!----> `);
  Navigations($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
