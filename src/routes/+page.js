export async function load({ params }) {
  const imports = import.meta.glob("./portfolio/content/*.md", {eager: true})

  const posts = []
  for (const path in imports) {
    const post = imports[path]
    const slug = path.split('/', -1).at(-1).replace(".md", "")
    
    const postData = await import(`./portfolio/content/${slug}.md`);
    const content = postData.default;
    
    if (post) {
      posts.push({
        slug,
        content,
        ...post.metadata,
      })
    }
  }

  const featuredPosts = posts.filter(post => {
    if(post.isFeatured) return post
  })

  return {featuredPosts}
}