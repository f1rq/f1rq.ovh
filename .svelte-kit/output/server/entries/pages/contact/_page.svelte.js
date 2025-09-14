import "clsx";
import { m as motionValue, c as cn, a as motion, B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { z as push, K as fallback, M as attr_class, N as clsx, O as slot, P as invalid_default_snippet, Q as bind_props, B as pop, F as escape_html, I as store_get, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { u as useMotionTemplate } from "../../../chunks/use-motion-template.js";
import { $ as $format } from "../../../chunks/runtime.js";
function MagicCard($$payload, $$props) {
  push();
  let gradientSize = fallback($$props["gradientSize"], 200);
  let gradientColor = fallback($$props["gradientColor"], "#262626");
  let gradientOpacity = fallback($$props["gradientOpacity"], 0.8);
  let className = fallback($$props["class"], "");
  let gradSize = motionValue(gradientSize);
  let gradColor = motionValue(gradientColor);
  let mouseX = motionValue(-gradientSize);
  let mouseY = motionValue(-gradientSize);
  let bg = useMotionTemplate`radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`;
  $$payload.out.push(`<div${attr_class(clsx(cn("group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-base-100 border text-black dark:text-white justify-center py-4", className)), "svelte-rmrul")}><div class="relative z-10"><!---->`);
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out.push(`<div class="flex items-center justify-center h-full text-center"><p class="text-2xl">Magic Card</p></div>`);
  });
  $$payload.out.push(`<!----></div> `);
  motion($$payload, {
    style: { background: bg, opacity: gradientOpacity },
    children: invalid_default_snippet,
    $$slots: {
      default: ($$payload2, { motion: motion2 }) => {
        $$payload2.out.push(`<div class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>`);
      }
    }
  });
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, {
    gradientSize,
    gradientColor,
    gradientOpacity,
    class: className
  });
  pop();
}
function Contact($$payload, $$props) {
  push();
  var $$store_subs;
  let isModalOpen = false;
  let isModalOpen2 = false;
  $$payload.out.push(`<div class="container flex flex-col min-h-screen justify-center items-center place-self-center">`);
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1 class="text-5xl mb-4">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("contact_title"))}</h1>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 2,
    children: ($$payload2) => {
      $$payload2.out.push(`<button class="mr-8 w-[13.5rem]">`);
      MagicCard($$payload2, {
        class: "m-4 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#7289DAAA] transition-all duration-300",
        gradientColor: "#425082",
        gradientSize: 200,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="group-hover:text-[#7289DA] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"><i class="fa-brands fa-discord"></i> Discord</div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></button>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 3,
    children: ($$payload2) => {
      $$payload2.out.push(`<a href="https://t.me/f1rqq" target="_blank">`);
      MagicCard($$payload2, {
        class: "mr-8 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#24A1DEAA] transition-all duration-300",
        gradientColor: "#0b5980",
        gradientSize: 200,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="group-hover:text-[#24A1DE] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"><i class="fa-brands fa-telegram text-3xl"></i> Telegram</div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 4,
    children: ($$payload2) => {
      $$payload2.out.push(`<button class="mr-8 w-[13.5rem]">`);
      MagicCard($$payload2, {
        class: "m-4 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#bf0404AA] transition-all duration-300",
        gradientColor: "#5e0000",
        gradientSize: 200,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="group-hover:text-[#bf0404] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"><i class="fa-solid fa-envelope"></i> E-Mail</div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></button>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <dialog${attr_class("modal modal-bottom sm:modal-middle", void 0, { "modal-open": isModalOpen })}><div class="modal-box"><h3 class="text-lg font-bold">Discord</h3> <p class="py-4">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("contact_discord"))}<span class="text-[#7289DA]">f1rq</span></p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog> <dialog${attr_class("modal modal-bottom sm:modal-middle", void 0, { "modal-open": isModalOpen2 })}><div class="modal-box"><h3 class="text-lg font-bold">E-Mail</h3> <p class="py-4">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("contact_email"))}<br/> <a href="mailto:contact@f1rq.ovh"><span class="text-[#bf0404] hover:text-[#ff0303] transition-colors">contact@f1rq.ovh</span></a></p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Contact($$payload);
  $$payload.out.push(`<!----> `);
  Navigations($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
