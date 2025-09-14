import "clsx";
import { c as cn, B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { z as push, K as fallback, M as attr_class, F as escape_html, N as clsx, Q as bind_props, B as pop, R as attr, I as store_get, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { $ as $format } from "../../../chunks/runtime.js";
function ProjectBodyCard($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  let desc = fallback($$props["desc"], "");
  let className = fallback($$props["class"], "");
  $$payload.out.push(`<div${attr_class(clsx(cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)))}><h3 class="text-lg font-semibold tracking-tighter mt-3 mb-1">${escape_html(title)}</h3> <p class="text-sm leading-5">${escape_html(desc)}</p></div>`);
  bind_props($$props, { title, desc, class: className });
  pop();
}
function ProjectCard($$payload, $$props) {
  let title = fallback($$props["title"], "");
  let desc = fallback($$props["desc"], "");
  let image = $$props["image"];
  let link = fallback($$props["link"], "");
  $$payload.out.push(`<a${attr("href", link)}><div class="rounded-3xl shadow-3xl relative overflow-hidden group card border-[1px] svelte-oviq8z"><img${attr("src", image)} placeholder="blur"${attr("alt", title + " mockup")} class="w-[25rem] object-cover object-center m-0"/> <div class="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"></div> `);
  ProjectBodyCard($$payload, {
    title,
    desc,
    class: "absolute pb-0.5 px-4 md:pb-10 inset-x-0 bottom-2 flex flex-col justify-end size-full"
  });
  $$payload.out.push(`<!----></div></a>`);
  bind_props($$props, { title, desc, image, link });
}
const nexomockup = "/_app/immutable/assets/nexo_mockup.BQrQL36w.png";
const lifemapmockup = "/_app/immutable/assets/lifemap_mockup.CSwFbW8e.png";
function Projects($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<div class="min-h-screen flex flex-col items-center justify-center py-8 pb-[80px] md:pb-8 w-full">`);
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1 class="text-4xl mb-8 md:mb-12 px-4 text-center">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("projects_title"))}</h1>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.2,
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="w-full flex justify-center items-center px-4"><div class="siatka grid gap-8 w-full max-w-[800px] svelte-jfvkwq">`);
      ProjectCard($$payload2, {
        title: "LifeMap",
        desc: store_get($$store_subs ??= {}, "$_", $format)("projects_lifemap_desc"),
        image: lifemapmockup,
        link: "https://github.com/f1rq/LifeMap"
      });
      $$payload2.out.push(`<!----> `);
      ProjectCard($$payload2, {
        title: "Nexo",
        desc: store_get($$store_subs ??= {}, "$_", $format)("projects_nexo_desc"),
        image: nexomockup,
        link: "nexo_project"
      });
      $$payload2.out.push(`<!----></div></div>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Projects($$payload);
  $$payload.out.push(`<!----> `);
  Navigations($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
