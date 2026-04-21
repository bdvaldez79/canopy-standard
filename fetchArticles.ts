import { SOURCES } from "./sources";
import { isPlantArticle } from "./plantFilter";

type Article = {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
};

async function fetchFeed(rssUrl: string): Promise<string> {
  const res = await fetch(rssUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${rssUrl}`);
  }
  return await res.text();
}

function parseItems(xml: string, sourceName: string): Article[] {
  const items = xml.match(/<item[\s\S]*?<\/item>/g) || [];

  return items.map((item) => {
    const getTag = (tag: string) => {
      const match = item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
      return match ? match[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : "";
    };

    const title = getTag("title");
    const url = getTag("link");
    const summary = getTag("description");
    const date = getTag("pubDate");

    return {
      title,
      source: sourceName,
      date,
      summary,
      url,
    };
  });
}

async function getPlantArticles() {
  const allArticles: Article[] = [];

  for (const source of SOURCES) {
    try {
      const xml = await fetchFeed(source.rss);
      const parsed = parseItems(xml, source.name);

      const filtered = parsed.filter((article) =>
        isPlantArticle(`${article.title} ${article.summary}`)
      );

      allArticles.push(...filtered);
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }

  const unique = allArticles.filter(
    (article, index, self) =>
      index === self.findIndex((a) => a.title === article.title)
  );

  unique.sort((a, b) => {
    const aTime = new Date(a.date).getTime() || 0;
    const bTime = new Date(b.date).getTime() || 0;
    return bTime - aTime;
  });

  return unique.slice(0, 12);
}

getPlantArticles().then((articles) => {
  console.log(JSON.stringify(articles, null, 2));
});
