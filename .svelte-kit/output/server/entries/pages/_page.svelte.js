import "clsx";
import { G as head } from "../../chunks/index.js";
import { B as BlurFade, N as Navigations } from "../../chunks/navigations.js";
function Hero($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="/font/simple-icons.css">`;
  });
  $$payload.out += `<div class="hero min-h-screen text-right svelte-1epqffq"><div class="hero-content flex-col lg:flex-row-reverse"><div>`;
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="text-5xl">Hi, I'm <span class="text-accent">f1rq</span></h1>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BlurFade($$payload, {
    delay: 0.1 * 2,
    children: ($$payload2) => {
      $$payload2.out += `<p class="py-6 svelte-1epqffq">I'm a programmer, and high school student from Poland and I like motorcycles a lot. I'm currently focused on Svelte, Python and planning to learn C# or C++ and learning video montage. I'm also trying to learn Japanese and Spanish.<br> <span class="font-[1000] text-xl">I'm open for freelance offers!</span></p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BlurFade($$payload, {
    delay: 0.1 * 3,
    children: ($$payload2) => {
      $$payload2.out += `<a href="https://github.com/f1rq" target="_blank" aria-label="github"><i class="fa-brands fa-github text-2xl svelte-1epqffq"></i></a> <a href="https://discord.gg/YU5yWFt7vB" target="_blank" aria-label="discord"><i class="fa-brands fa-discord text-2xl svelte-1epqffq"></i></a> <a href="https://open.spotify.com/user/dcfv3p5qxwa0sfdimxgyqabri" target="_blank" aria-label="spotify"><i class="fa-brands fa-spotify text-2xl svelte-1epqffq"></i></a> <a href="https://www.youtube.com/@_f1rq_" target="_blank" aria-label="youtube"><i class="fa-brands fa-youtube text-2xl svelte-1epqffq"></i></a> <a href="https://buymeacoffee.com/f1rq" target="_blank" aria-label="coffe"><i class="fa-solid fa-mug-saucer text-2xl svelte-1epqffq"></i></a>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div>`;
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out += `<!----> `;
  Navigations($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
