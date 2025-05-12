import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE.NAME,
    description: "Recent projects and updates",
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.date,
      link: `/projects/${project.slug}/`,
    })),
  });
}
