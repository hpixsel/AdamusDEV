import teamJson from "./team.json";

export async function load({ params }) {
	const post = await import(`../content/${params.slug}.md`);
	const { title, github, link, imgs, tools, team } = post.metadata;
	const content = post.default;
  
  const filteredTeam = teamJson.filter(person => {
    if(team.includes(person.id)) return person
  })
  
	return {
    title,
    github,
    link,
    imgs,
    tools,
    team: filteredTeam,
		content,
	};
}