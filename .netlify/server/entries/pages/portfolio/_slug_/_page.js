import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../content/bielsania-copy.md": () => import("../../../../chunks/bielsania-copy.js").then((n) => n._), "../content/bielsania.md": () => import("../../../../chunks/bielsania.js").then((n) => n._) }), `../content/${params.slug}.md`);
  const { title, github, link, imgs, tools, team } = post.metadata;
  const content = post.default;
  return {
    title,
    github,
    link,
    imgs,
    tools,
    team,
    content
  };
}
export {
  load
};
