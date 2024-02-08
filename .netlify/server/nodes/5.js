import * as universal from '../entries/pages/portfolio/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.ETv_Zn7U.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/dynamic-import-helper.0gtGTknh.js","_app/immutable/chunks/scheduler.APco6yQQ.js","_app/immutable/chunks/index.mJqjfQbj.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/5.LYbM9GYT.css"];
export const fonts = [];
