import "clsx";
import { c as cn, B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { z as push, I as fallback, J as attr_class, F as escape_html, K as clsx, O as bind_props, C as pop, P as attr } from "../../../chunks/index.js";
function ProjectBodyCard($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  let desc = fallback($$props["desc"], "");
  let className = fallback($$props["class"], "");
  $$payload.out += `<div${attr_class(clsx(cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)))}><h3 class="text-lg font-semibold tracking-tighter mt-3 mb-1">${escape_html(title)}</h3> <p class="text-sm leading-5">${escape_html(desc)}</p></div>`;
  bind_props($$props, { title, desc, class: className });
  pop();
}
function ProjectCard($$payload, $$props) {
  let title = fallback($$props["title"], "");
  let desc = fallback($$props["desc"], "");
  let image = $$props["image"];
  let link = fallback($$props["link"], "");
  $$payload.out += `<a${attr("href", link)}><div class="rounded-3xl shadow-3xl relative overflow-hidden group card border-[1px] svelte-g706ab"><img${attr("src", image)} placeholder="blur"${attr("alt", title + " mockup")} class="w-[25rem] object-cover object-center m-0"> <div class="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"></div> `;
  ProjectBodyCard($$payload, {
    title,
    desc,
    class: "absolute pb-0.5 px-4 md:pb-10 inset-x-0 bottom-2 flex flex-col justify-end size-full"
  });
  $$payload.out += `<!----></div></a>`;
  bind_props($$props, { title, desc, image, link });
}
const nexomockup = "/_app/immutable/assets/nexo_mockup.BQrQL36w.png";
const strayvoidmockup = "/_app/immutable/assets/strayvoid_mockup.qYt_PjMJ.png";
const lifemapmockup = "/_app/immutable/assets/lifemap_mockup.CSwFbW8e.png";
function Projects($$payload) {
  $$payload.out += `<div class="min-h-screen flex flex-col items-center justify-center py-8 pb-[80px] md:pb-8 w-full">`;
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="text-4xl mb-8 md:mb-12 px-4 text-center">Projects I'm working on:</h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BlurFade($$payload, {
    delay: 0.2,
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-full flex justify-center items-center px-4"><div class="siatka grid gap-8 w-full max-w-[800px] svelte-n88ytz">`;
      ProjectCard($$payload2, {
        title: "Nexo",
        desc: "My own personal bot for Discord, written in Python using the discord.py library.",
        image: nexomockup,
        link: "nexo_project"
      });
      $$payload2.out += `<!----> `;
      ProjectCard($$payload2, {
        title: "Strayvoid",
        desc: "This is my first ever game. 2d pixelart platformer. Learning godot and generally game-dev. Maybe when i finish it it will be on steam but only maybe.",
        image: strayvoidmockup,
        link: "https://github.com/f1rq/Strayvoid"
      });
      $$payload2.out += `<!----> `;
      ProjectCard($$payload2, {
        title: "LifeMap",
        desc: "LifeMap is a personal life tracker that visually organizes important events, goals, and memories in a timeline and map format.",
        image: lifemapmockup,
        link: "https://github.com/f1rq/LifeMap"
      });
      $$payload2.out += `<!----></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload) {
  Projects($$payload);
  $$payload.out += `<!----> `;
  Navigations($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
