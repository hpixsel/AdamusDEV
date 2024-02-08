import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/4.JzyHDEvl.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/bielsania-copy.P6FDrXxq.js","_app/immutable/chunks/scheduler.APco6yQQ.js","_app/immutable/chunks/index.mJqjfQbj.js","_app/immutable/chunks/bielsania.vnMTWoJr.js","_app/immutable/chunks/dynamic-import-helper.0gtGTknh.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/4.3HfYZQoX.css"];
export const fonts = [];
