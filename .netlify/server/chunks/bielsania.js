import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "isFeatured": true,
  "slug": "bielsania",
  "title": "Bielsania",
  "github": "https://github.com/hpixsel/Bielsania",
  "link": "https://bielsania.netlify.app",
  "imgs": [
    "bielsania/main.png",
    "bielsania/projects.png",
    "bielsania/team.png",
    "bielsania/contact.png"
  ],
  "tools": [
    {
      "icon": "astro",
      "name": "Astro",
      "href": "https://astro.build/"
    }
  ],
  "team": [
    {
      "name": "Adamus Kacper",
      "icon": "adamus.jpg",
      "link": "https://github.com/hpixsel"
    }
  ]
};
const Bielsania = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1xknrau">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At viverra et hac lacus. Vitae consectetur imperdiet ipsum ac. A tortor purus nunc sit duis eu adipiscing aliquam. Massa sit pellentesque feugiat lectus morbi a purus. A tortor purus nunc sit duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At viverra et hac lacus. Vitae consectetur imperdiet ipsum ac. A tortor purus nunc sit duis eu adipiscing aliquam. Massa sit pellentesque feugiat lectus morbi a purus. A tortor purus nunc sit duis.</p>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bielsania,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
