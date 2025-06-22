import "clsx";
import { B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { P as attr } from "../../../chunks/index.js";
const nexo_screenshot = "/_app/immutable/assets/nexo_screenshot.Bcm4Ri0h.png";
function Nexo_desc($$payload) {
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out += `<div class="cheight1 flex flex-col items-center justify-center svelte-1utbc06"><h1 class="ctext1 text-4xl mb-8 text-center svelte-1utbc06">Nexo bot for Discord</h1> `;
      BlurFade($$payload2, {
        delay: 0.1 * 2,
        children: ($$payload3) => {
          $$payload3.out += `<div class="siatka grid gap-8 svelte-1utbc06"><div class="mwp svelte-1utbc06"><div class="flex justify-center px-4 py-4"><img${attr("src", nexo_screenshot)} alt="nexo bot screenshot" class="w-[32rem] rounded-2xl shadow-2xl border"></div></div> <div class="mwm svelte-1utbc06"><div class="flex justify-center px-4 py-4"><img${attr("src", nexo_screenshot)} alt="nexo bot screenshot" class="rounded-2xl shadow-2xl border"></div></div> <div class="flex flex-col justify-center items-center sm:block mb-24"><p class="ctext2 max-w-96 text-xl svelte-1utbc06">My own personal bot for Discord, written in Python using the discord.py library. It's purpose is to use on my own <a href="https://discord.gg/YU5yWFt7vB" class="text-[#7289DA] hover:text-[#425082] transition-colors">Discord server</a>, and it has or will have a lot of features, such as: moderation, fun, and more. It's still under development, but it's already usable.
                        It contains commands such as:</p> <ul class="list-disc list-inside my-2 ml-4"><li>/mute</li> <li>/warn</li> <li>/warnlist</li> <li>/clear</li> <li>/ping</li> <li>/kick</li> <li>/ban</li></ul> <p class="ctext2 max-w-96 text-xl svelte-1utbc06">and much more, also I'm still adding new features. Suggestions are welcome.</p></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload) {
  Nexo_desc($$payload);
  $$payload.out += `<!----> `;
  Navigations($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
