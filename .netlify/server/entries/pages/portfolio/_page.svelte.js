import { c as create_ssr_component, e as each, d as add_attribute, f as escape, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
const css = {
  code: ".projects__item.svelte-z6z8ov.svelte-z6z8ov:nth-of-type(2n){background-color:var(--clr-bg-secondary)}.projects__item.svelte-z6z8ov.svelte-z6z8ov{padding-block:2rem}.projects__item__img.svelte-z6z8ov.svelte-z6z8ov{border-radius:0.25rem;overflow:hidden;border:1px solid var(--clr-primary);aspect-ratio:16/9}.projects__item__img.svelte-z6z8ov img.svelte-z6z8ov{object-fit:cover;width:100%;height:100%}.projects__item__text.svelte-z6z8ov.svelte-z6z8ov{margin-top:1rem}.projects__item__text.svelte-z6z8ov>p{margin-top:0.5rem}.projects__item__text.svelte-z6z8ov>.btn.svelte-z6z8ov{margin-top:1rem}@media(min-width: 60rem){.projects__item.svelte-z6z8ov>div.svelte-z6z8ov{display:flex;gap:2rem;align-items:flex-start}.projects__item__img.svelte-z6z8ov.svelte-z6z8ov{width:50%}.projects__item__text.svelte-z6z8ov.svelte-z6z8ov{width:50%;margin-top:0}.projects__item__text.svelte-z6z8ov>p{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="projects">${each(data.posts, (project) => {
    return `<div class="projects__item svelte-z6z8ov"><div class="wrapper svelte-z6z8ov"><div class="projects__item__img svelte-z6z8ov"><img${add_attribute("src", "/src/lib/assets/" + project.imgs[0], 0)}${add_attribute("alt", project.title, 0)} class="svelte-z6z8ov"></div> <div class="projects__item__text svelte-z6z8ov"><h1>${escape(project.title)}</h1> ${validate_component(project.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <a${add_attribute("href", "/portfolio/" + project.slug, 0)} class="btn svelte-z6z8ov" data-btn-fit>Więcej szczegółów</a> </div></div> </div>`;
  })} </div>`;
});
export {
  Page as default
};
