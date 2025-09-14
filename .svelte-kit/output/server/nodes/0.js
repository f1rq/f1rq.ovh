import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D2ECa0NV.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BogjC8C8.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/o0PIXUts.js"];
export const stylesheets = ["_app/immutable/assets/0.BQ9j5qze.css"];
export const fonts = [];
