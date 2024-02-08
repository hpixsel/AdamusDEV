import { _ as __vite_glob_0_0 } from "../../../chunks/bielsania-copy.js";
import { _ as __vite_glob_0_1 } from "../../../chunks/bielsania.js";
import { _ as __variableDynamicImportRuntimeHelper } from "../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const imports = /* @__PURE__ */ Object.assign({ "./content/bielsania-copy.md": __vite_glob_0_0, "./content/bielsania.md": __vite_glob_0_1 });
  const posts = [];
  for (const path in imports) {
    const post = imports[path];
    const slug = path.split("/", -1).at(-1).replace(".md", "");
    const postData = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./content/bielsania-copy.md": () => import("../../../chunks/bielsania-copy.js").then((n) => n._), "./content/bielsania.md": () => import("../../../chunks/bielsania.js").then((n) => n._) }), `./content/${slug}.md`);
    const content = postData.default;
    if (post) {
      posts.push({
        slug,
        content,
        ...post.metadata
      });
    }
  }
  return { posts };
}
export {
  load
};
