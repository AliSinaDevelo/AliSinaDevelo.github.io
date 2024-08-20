

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.BNztVAv7.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.CbleGq3R.js","app/immutable/chunks/entry.Dv5uxQv-.js"];
export const stylesheets = [];
export const fonts = [];
