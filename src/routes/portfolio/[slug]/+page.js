export async function load({ params }) {
	const post = await import(`../content/${params.slug}.md`);
	const { title, github, link, imgs, tools, team } = post.metadata;
	const content = post.default;

	return {
    title,
    github,
    link,
    imgs,
    tools,
    team,
		content,
	};
}