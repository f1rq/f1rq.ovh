import "clsx";
import { m as motionValue, c as cn, a as motion, B as BlurFade, N as Navigations } from "../../../chunks/navigations.js";
import { z as push, K as fallback, M as attr_class, N as clsx, O as slot, P as invalid_default_snippet, Q as bind_props, B as pop, F as escape_html, I as store_get, R as attr, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { u as useMotionTemplate } from "../../../chunks/use-motion-template.js";
import { $ as $format } from "../../../chunks/runtime.js";
function SkillsMagicCard($$payload, $$props) {
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
  $$payload.out.push(`<div${attr_class(clsx(cn("group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-base-100 border text-black dark:text-white justify-center py-4", className)), "svelte-1rb3xwz")}><div class="relative z-10 w-[90px]"><!---->`);
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out.push(`<div class="flex items-center justify-center text-center"><p class="text-2xl">Magic Card</p></div>`);
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
const svelte_logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.2,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2098.1%20118'%20style='enable-background:new%200%200%2098.1%20118;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FF3E00;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpath%20class='st0'%20d='M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3%20c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1%20c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6'/%3e%3cpath%20class='st1'%20d='M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1%20c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72%20c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7%20c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5%20c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1%20c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1%20c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5%20c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9'/%3e%3c/svg%3e";
const python_logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20id='python'%3e%3cpath%20d='M18.231%207.357h.001v-.004z'%3e%3c/path%3e%3cpath%20fill='%23F2BB30'%20d='M20.699%2017.748c1.666%200%202.282-1.162%202.861-2.904.6-1.794.574-3.52%200-5.818-.413-1.655-1.194-2.904-2.861-2.904h-2.147v2.541c0%201.971-1.672%203.632-3.578%203.632H9.252c-1.565%200-2.861%201.339-2.861%202.909v5.454c0%201.553%201.35%202.464%202.861%202.909%201.81.53%203.552.626%205.721%200%201.441-.418%202.861-1.26%202.861-2.909v-2.181h-5.717v-.728h8.582zm-5.367%202.181c.594%200%201.077.488%201.077%201.088%200%20.606-.482%201.093-1.077%201.093a1.09%201.09%200%200%201-1.077-1.093%201.088%201.088%200%200%201%201.077-1.088z'%3e%3c/path%3e%3cpath%20fill='%2335668F'%20d='M3.444%2017.749H5.41v-2.615c0-1.891%201.634-3.558%203.578-3.558h5.721c1.591%200%202.861-1.312%202.861-2.909V3.209c0-1.553-1.307-2.717-2.861-2.978-1.918-.317-4.002-.299-5.721.006l.001-.001c-2.422.428-2.86%201.322-2.86%202.977v2.181h5.727v.729H3.98C2.314%206.123.856%207.125.402%209.027c-.525%202.181-.546%203.541%200%205.818.406%201.693%201.377%202.904%203.042%202.904zM8.63%203.937a1.084%201.084%200%200%201-1.077-1.088A1.089%201.089%200%200%201%208.63%201.756c.59%200%201.077.492%201.077%201.093S9.225%203.937%208.63%203.937z'%3e%3c/path%3e%3c/svg%3e";
const tailwind_logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2054%2033'%3e%3cg%20clip-path='url(%23prefix__clip0)'%3e%3cpath%20fill='%2338bdf8'%20fill-rule='evenodd'%20d='M27%200c-7.2%200-11.7%203.6-13.5%2010.8%202.7-3.6%205.85-4.95%209.45-4.05%202.054.513%203.522%202.004%205.147%203.653C30.744%2013.09%2033.808%2016.2%2040.5%2016.2c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C36.756%203.11%2033.692%200%2027%200zM13.5%2016.2C6.3%2016.2%201.8%2019.8%200%2027c2.7-3.6%205.85-4.95%209.45-4.05%202.054.514%203.522%202.004%205.147%203.653C17.244%2029.29%2020.308%2032.4%2027%2032.4c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C23.256%2019.31%2020.192%2016.2%2013.5%2016.2z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='prefix__clip0'%3e%3cpath%20fill='%23fff'%20d='M0%200h54v32.4H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const Html_Logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-52.5%200%20361%20361'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin%20meet'%3e%3cpath%20d='M255.555%2070.766l-23.241%20260.36-104.47%2028.962-104.182-28.922L.445%2070.766h255.11z'%20fill='%23E44D26'/%3e%3cpath%20d='M128%20337.95l84.417-23.403%2019.86-222.49H128V337.95z'%20fill='%23F16529'/%3e%3cpath%20d='M82.82%20155.932H128v-31.937H47.917l.764%208.568%207.85%2088.01H128v-31.937H85.739l-2.919-32.704zM90.018%20236.542h-32.06l4.474%2050.146%2065.421%2018.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M24.18%200h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83%2016.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47%200h16.923l10.41%2017.062L168.203%200h16.93v48.558h-16.164V24.49l-11.166%2017.265h-.28L146.35%2024.49v24.068h-15.88V0zM193.21%200h16.235v32.508h22.824v16.05h-39.06V0z'/%3e%3cpath%20d='M127.89%20220.573h39.327l-3.708%2041.42-35.62%209.614v33.226l65.473-18.145.48-5.396%207.506-84.08.779-8.576H127.89v31.937zM127.89%20155.854v.078h77.143l.64-7.178%201.456-16.191.763-8.568H127.89v31.86z'%20fill='%23FFF'/%3e%3c/svg%3e";
const CSS_Logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20width='102.3716mm'%20height='144.49777mm'%20viewBox='0%200%20362.73401%20511.99998'%20id='svg3476'%20version='1.1'%20inkscape:version='0.91%20r13725'%20sodipodi:docname='CSS3.svg'%3e%3cdefs%20id='defs3478'%20/%3e%3csodipodi:namedview%20id='base'%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1.0'%20inkscape:pageopacity='0.0'%20inkscape:pageshadow='2'%20inkscape:zoom='0.35'%20inkscape:cx='181.367'%20inkscape:cy='256'%20inkscape:document-units='px'%20inkscape:current-layer='layer1'%20showgrid='false'%20fit-margin-top='0'%20fit-margin-left='0'%20fit-margin-right='0'%20fit-margin-bottom='0'%20inkscape:window-width='1366'%20inkscape:window-height='704'%20inkscape:window-x='0'%20inkscape:window-y='27'%20inkscape:window-maximized='1'%20/%3e%3cmetadata%20id='metadata3481'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cg%20inkscape:label='Calque%201'%20inkscape:groupmode='layer'%20id='layer1'%20transform='translate(-193.633,-276.3622)'%3e%3cg%20id='g3013'%20transform='translate(119,276.3622)'%3e%3cpolygon%20id='polygon2989'%20points='437.367,100.62%20404.321,470.819%20255.778,512%20107.644,470.877%2074.633,100.62%20'%20style='fill:%23264de4'%20/%3e%3cpolygon%20id='polygon2991'%20points='376.03,447.246%20404.27,130.894%20256,130.894%20256,480.523%20'%20style='fill:%232965f1'%20/%3e%3cpolygon%20id='polygon2993'%20points='150.31,268.217%20154.38,313.627%20256,313.627%20256,268.217%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2995'%20points='256,176.305%20255.843,176.305%20142.132,176.305%20146.26,221.716%20256,221.716%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2997'%20points='256,433.399%20256,386.153%20255.801,386.206%20205.227,372.55%20201.994,336.333%20177.419,336.333%20156.409,336.333%20162.771,407.634%20255.791,433.457%20'%20style='fill:%23ebebeb'%20/%3e%3cpath%20id='path2999'%20d='m%20160,0%2055,0%200,23%20-32,0%200,23%2032,0%200,23%20-55,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3001'%20d='m%20226,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3003'%20d='m%20292,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpolygon%20id='polygon3005'%20points='311.761,313.627%20306.49,372.521%20255.843,386.191%20255.843,433.435%20348.937,407.634%20349.62,399.962%20360.291,280.411%20361.399,268.217%20369.597,176.305%20255.843,176.305%20255.843,221.716%20319.831,221.716%20315.699,268.217%20255.843,268.217%20255.843,313.627%20'%20style='fill:%23ffffff'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const JS_Logo = "/_app/immutable/assets/Javascript_Logo.DpxT93Ny.svg";
const Mysql_Logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2025.6%2025.6'%3e%3cpath%20d='M179.076%2094.886c-3.568-.1-6.336.268-8.656%201.25-.668.27-1.74.27-1.828%201.116.357.355.4.936.713%201.428.535.893%201.473%202.096%202.32%202.72l2.855%202.053c1.74%201.07%203.703%201.695%205.398%202.766.982.625%201.963%201.428%202.945%202.098.5.357.803.938%201.428%201.16v-.135c-.312-.4-.402-.98-.713-1.428l-1.34-1.293c-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.1c.98-.1%202.14-.447%203.078-.715%201.518-.4%202.9-.312%204.46-.713l2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436l-3.658-7.763c-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.5-1.205%202.9%201.785%205.755%202.8%207.228.76%201.026%201.74%202.186%202.277%203.346.3.758.4%201.562.713%202.365.713%201.963%201.383%204.15%202.32%205.98.5.937%201.025%201.92%201.65%202.767.357.5.982.714%201.115%201.517-.625.893-.668%202.23-1.025%203.347-1.607%205.042-.982%2011.288%201.293%2015%20.715%201.115%202.4%203.57%204.686%202.632%202.008-.803%201.56-3.346%202.14-5.577.135-.535.045-.892.312-1.25v.1l1.83%203.703c1.383%202.186%203.793%204.462%205.8%205.98%201.07.803%201.918%202.187%203.256%202.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65%201.83-2.143%203.034-.848%201.918-.936%204.283-1.248%206.737-.18.045-.1%200-.18.1-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937%201.652-3.882%201.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.5-.535-1.294-.178-1.83.088-.357.268-.5.623-.58.58-.5%202.232.134%202.812.4%201.65.67%203.033%201.294%204.416%202.23.625.446%201.295%201.294%202.098%201.518h.938c1.428.312%203.033.1%204.37.5%202.365.76%204.506%201.874%206.426%203.08%205.844%203.703%2010.664%208.968%2013.92%2015.26.535%201.026.758%201.963%201.25%203.034.938%202.187%202.098%204.417%203.033%206.56.938%202.097%201.83%204.24%203.168%205.98.67.937%203.346%201.427%204.55%201.918.893.4%202.275.76%203.08%201.25%201.516.937%203.033%202.008%204.46%203.034.713.534%202.945%201.65%203.078%202.54zm-45.5-38.772a7.09%207.09%200%200%200-1.828.223v.1h.088c.357.714.982%201.205%201.428%201.83l1.027%202.142.088-.1c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z'%20transform='matrix(.390229%200%200%20.38781%20-46.300037%20-16.856717)'%20fill-rule='evenodd'%20fill='%2300678c'/%3e%3c/svg%3e";
const discordpy_logo = "/_app/immutable/assets/discordpy_logo.B5e03DV7.png";
const ArduinoLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2499'%20height='2500'%20viewBox='0%200%201372.201%201372.684'%3e%3cpath%20fill='%2300979D'%20stroke='%2381C9CB'%20stroke-width='.932'%20stroke-miterlimit='10'%20d='M1371.701%20686.024c0%20378.658-306.972%20685.605-685.549%20685.605C307.451%201371.629.5%201064.682.5%20686.024.5%20307.455%20307.451.483%20686.152.483c378.594.001%20685.549%20306.972%20685.549%20685.541z'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='-16.3'%20y1='16.071'%20x2='1354.901'%20y2='16.071'%20gradientTransform='matrix(1%200%200%20-1%2016.8%20702.696)'%3e%3cstop%20offset='.117'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3cstop%20offset='.252'%20stop-color='%23c0d1d3'%20stop-opacity='.153'/%3e%3cstop%20offset='.387'%20stop-color='%2391b3b7'%20stop-opacity='.306'/%3e%3cstop%20offset='.52'%20stop-color='%236d9fa3'%20stop-opacity='.457'/%3e%3cstop%20offset='.65'%20stop-color='%234d9195'%20stop-opacity='.604'/%3e%3cstop%20offset='.776'%20stop-color='%2330888b'%20stop-opacity='.746'/%3e%3cstop%20offset='.895'%20stop-color='%23148386'%20stop-opacity='.881'/%3e%3cstop%20offset='1'%20stop-color='%23008184'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='-16.8'%20y1='16.071'%20x2='1355.401'%20y2='16.071'%20gradientTransform='matrix(1%200%200%20-1%2016.8%20702.696)'%3e%3cstop%20offset='0'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3cstop%20offset='.153'%20stop-color='%23c0d1d3'%20stop-opacity='.153'/%3e%3cstop%20offset='.306'%20stop-color='%2391b3b7'%20stop-opacity='.306'/%3e%3cstop%20offset='.457'%20stop-color='%236d9fa3'%20stop-opacity='.457'/%3e%3cstop%20offset='.604'%20stop-color='%234d9195'%20stop-opacity='.604'/%3e%3cstop%20offset='.746'%20stop-color='%2330888b'%20stop-opacity='.746'/%3e%3cstop%20offset='.881'%20stop-color='%23148386'%20stop-opacity='.881'/%3e%3cstop%20offset='1'%20stop-color='%23008184'/%3e%3c/linearGradient%3e%3cpath%20opacity='.5'%20fill='url(%23a)'%20stroke='url(%23b)'%20stroke-miterlimit='10'%20d='M1371.701%20686.595c0%20378.65-306.972%20685.606-685.549%20685.606C307.451%201372.201.5%201065.23.5%20686.595.5%20308.019%20307.451%201.048%20686.152%201.048c378.594.016%20685.549%20306.97%20685.549%20685.547z'/%3e%3cg%20fill='%23FFF'%3e%3cpath%20d='M947.959%20931.196c-12.909%200-26.127-.929-39.127-2.864-108.978-15.554-181.848-93.822-222.665-153.989-40.946%2060.166-113.811%20138.512-222.74%20154.045a275.864%20275.864%200%200%201-39.133%202.785c-67.753%200-131.358-25.217-179.201-71.003-48.299-46.165-74.951-108.114-74.951-174.171%200-66.14%2026.651-128.004%2075.021-174.253%2047.797-45.793%20111.449-70.936%20179.231-70.936%2012.918%200%2026.067.928%2039.023%202.783%20108.932%2015.535%20181.794%2093.813%20222.743%20153.99%2040.825-60.177%20113.689-138.432%20222.658-153.99%2013-1.863%2026.148-2.783%2039.066-2.783%2067.753%200%20131.401%2025.208%20179.197%2070.936%2048.345%2046.249%2074.937%20108.113%2074.937%20174.253%200%2066.057-26.524%20128.006-74.868%20174.171-47.881%2045.785-111.434%2071.026-179.191%2071.026M734.42%20686.024c21.283%2040.534%2084.067%20141.676%20186.692%20156.375%208.984%201.236%2018.028%201.923%2026.839%201.923%2092.185%200%20167.225-71.002%20167.225-158.322s-75.023-158.321-167.291-158.321c-8.812%200-17.853.629-26.753%201.921-102.644%2014.664-165.428%20115.806-186.712%20156.424M424.393%20527.702c-92.308%200-167.36%2070.998-167.36%20158.321%200%2087.305%2075.021%20158.322%20167.245%20158.322%208.852%200%2017.897-.688%2026.879-1.922%20102.629-14.697%20165.394-115.783%20186.689-156.375-21.237-40.535-84.061-141.761-186.689-156.376-8.877-1.341-17.945-1.97-26.764-1.97'/%3e%3cpath%20d='M354.37%20662.051h152.625v49.181H354.37zM1016.484%20662.051h-51.671v-51.747h-49.348v51.747h-51.648v49.181h51.648v51.737h49.348v-51.737h51.671z'/%3e%3c/g%3e%3c/svg%3e";
function Skills($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<div class="h-screen flex flex-col items-center justify-center">`);
  BlurFade($$payload, {
    delay: 0.1,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1 class="text-4xl mb-12 text-center">${escape_html(store_get($$store_subs ??= {}, "$_", $format)("skills_title"))}</h1>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  BlurFade($$payload, {
    delay: 0.1 * 2,
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="gapphone grid grid-cols-4 gap-4 container svelte-fpkt7e"><a href="https://svelte.dev" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ff770094] transition-all duration-300",
        gradientColor: "#4D2506",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", svelte_logo)} alt="svelte_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://tailwindcss.com/" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#a5f3fcaa] transition-all duration-300",
        gradientColor: "#007c91",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", tailwind_logo)} alt="tailwind_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://www.python.org/" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ffde57aa] transition-all duration-300",
        gradientColor: "#8a7830",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", python_logo)} alt="python_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://discordpy.readthedocs.io/en/stable/" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ffde57aa] transition-all duration-300",
        gradientColor: "#8a7830",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", discordpy_logo)} alt="discordpy_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://www.mysql.com/" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#00758F] transition-all duration-300",
        gradientColor: "#01414f",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", Mysql_Logo)} alt="mysql_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ff770094] transition-all duration-300",
        gradientColor: "#4D2506",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", Html_Logo)} alt="html_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#264de4] transition-all duration-300",
        gradientColor: "#13297d",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", CSS_Logo)} alt="css_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#F0DB4F] transition-all duration-300",
        gradientColor: "#80742a",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", JS_Logo)} alt="javascript_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a> <a href="https://www.arduino.cc/" target="_blank">`);
      SkillsMagicCard($$payload2, {
        class: "cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#19989e] transition-all duration-300",
        gradientColor: "#0c4e52",
        gradientSize: 100,
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="transition-all duration-500 flex gap-1.5 justify-center items-center"><img${attr("src", ArduinoLogo)} alt="arduino_logo" class="size-12"/></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></a></div>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Skills($$payload);
  $$payload.out.push(`<!----> `);
  Navigations($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
