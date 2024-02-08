export async function load({ params }) {
  const imports = import.meta.glob("./content/*.md", {eager: true})

  const posts = []
  for (const path in imports) {
    const post = imports[path]
    const slug = path.split('/', -1).at(-1).replace(".md", "")
    
    const postData = await import(`./content/${slug}.md`);
    const content = postData.default;
    
    if (post) {
      posts.push({
        slug,
        content,
        ...post.metadata,
      })
    }
  }

  return {posts}
}