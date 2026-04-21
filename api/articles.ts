declare const process: {
  env: Record<string, string | undefined>;
};

type RawArticle = {
  title: string;
  description: string;
  url: string;
  image: string;
  date: string;
  source: string;
};

const PLANT_KEYWORDS = [
  "plant",
  "plants",
  "tree",
  "trees",
  "forest",
  "forests",
  "botany",
  "botanical",
  "horticulture",
  "houseplant",
  "houseplants",
  "tropical",
  "orchid",
  "soil",
  "agriculture",
  "farming",
  "biodiversity",
  "ecosystem",
  "ecology",
  "photosynthesis",
  "crop",
  "crops",
  "nursery",
  "seed",
  "seeds",
  "pollen",
  "flower",
  "flowers",
  "fungi",
  "fungal",
  "conservation",
  "woodland",
  "rainforest",
  "carbon garden",
  "pollinator",
  "peat",
  "wetland",
  "mangrove",
  "native species",
  "invasive species",
  "oak",
  "orchids",
];

const BLOCKED_WORDS = [
  "vacation",
  "travel",
  "weekend",
  "hotel",
  "recipe",
  "fashion",
  "celebrity",
  "crime",
  "sports",
  "movie",
  "netflix",
  "tv show",
  "music video",
  "lottery",
  "horoscope",
];

const NEWSAPI_ALLOWED_SOURCES = [
  "BBC News",
  "Reuters",
  "The Guardian",
  "AP News",
  "Science News",
  "National Geographic",
  "Phys.org",
];

function cleanText(input: string = ""): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteUrl(url: string, base: string): string {
  try {
    return new URL(url, base).toString();
  } catch {
    return url;
  }
}

function hasPlantRelevance(article: Pick<RawArticle, "title" | "description">): boolean {
  const text = `${article.title} ${article.description}`.toLowerCase();

  const hasKeyword = PLANT_KEYWORDS.some((word) => text.includes(word));
  const hasBlockedWord = BLOCKED_WORDS.some((word) => text.includes(word));

  return hasKeyword && !hasBlockedWord;
}

function dedupeArticles(articles: RawArticle[]): RawArticle[] {
  return articles.filter(
    (article, index, self) =>
      index ===
      self.findIndex(
        (a) =>
          a.title.trim().toLowerCase() === article.title.trim().toLowerCase()
      )
  );
}

function sortByDateDesc(articles: RawArticle[]): RawArticle[] {
  return [...articles].sort((a, b) => {
    const aTime = new Date(a.date).getTime() || 0;
    const bTime = new Date(b.date).getTime() || 0;
    return bTime - aTime;
  });
}

function extractTag(block: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = block.match(regex);
  return match ? cleanText(match[1]) : "";
}

function extractAttr(block: string, tag: string, attr: string): string {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]+)"[^>]*>`, "i");
  const match = block.match(regex);
  return match ? cleanText(match[1]) : "";
}

function parseRssItems(xml: string, sourceName: string, baseUrl: string): RawArticle[] {
  const itemBlocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  const entryBlocks = xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  const blocks = itemBlocks.length > 0 ? itemBlocks : entryBlocks;

  return blocks
    .map((block) => {
      const title = extractTag(block, "title");
      const description =
        extractTag(block, "description") ||
        extractTag(block, "summary") ||
        extractTag(block, "content");
      const url =
        extractTag(block, "link") ||
        extractAttr(block, "link", "href") ||
        "";
      const image =
        extractAttr(block, "media:content", "url") ||
        extractAttr(block, "media:thumbnail", "url") ||
        extractAttr(block, "enclosure", "url") ||
        "";
      const date =
        extractTag(block, "pubDate") ||
        extractTag(block, "published") ||
        extractTag(block, "updated") ||
        "";

      return {
        title,
        description,
        url: absoluteUrl(url, baseUrl),
        image: absoluteUrl(image, baseUrl),
        date,
        source: sourceName,
      };
    })
    .filter((article) => article.title && article.url);
}

async function fetchRss(sourceName: string, rssUrl: string): Promise<RawArticle[]> {
  try {
    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
    });

    if (!response.ok) return [];

    const xml = await response.text();
    return parseRssItems(xml, sourceName, rssUrl);
  } catch {
    return [];
  }
}

async function fetchKewPressReleases(): Promise<RawArticle[]> {
  const url = "https://www.kew.org/about-us/press-media/press-releases";

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (!response.ok) return [];

    const html = await response.text();

    const links = Array.from(
      html.matchAll(/href="(\/about-us\/press-media\/press-releases\/[^"#?]+)"/gi)
    ).map((m) => absoluteUrl(m[1], url));

    const uniqueLinks = Array.from(new Set(links)).slice(0, 12);

    return uniqueLinks.map((link) => {
      const slug = link.split("/").pop()?.replace(/-/g, " ") || "Kew story";
      const title = slug.replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        title,
        description: "Plant and botanical news from Royal Botanic Gardens, Kew.",
        url: link,
        image: "",
        date: "",
        source: "Kew",
      };
    });
  } catch {
    return [];
  }
}

async function fetchNewsApiArticles(apiKey: string): Promise<RawArticle[]> {
  const query =
    '(plant OR plants OR tree OR trees OR botany OR horticulture OR houseplants OR tropical OR orchid OR soil OR biodiversity OR ecology OR agriculture OR nursery)';

  const domains = [
    "bbc.com",
    "reuters.com",
    "theguardian.com",
    "apnews.com",
    "nationalgeographic.com",
    "sciencenews.org",
    "phys.org",
  ].join(",");

  const url =
    `https://newsapi.org/v2/everything` +
    `?q=${encodeURIComponent(query)}` +
    `&language=en` +
    `&sortBy=publishedAt` +
    `&pageSize=30` +
    `&searchIn=title,description` +
    `&domains=${encodeURIComponent(domains)}` +
    `&apiKey=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) return [];

    const data = await response.json();

    const raw = Array.isArray(data.articles) ? data.articles : [];

    return raw
      .map((article: any) => ({
        title: cleanText(article.title || ""),
        description: cleanText(article.description || ""),
        url: article.url || "",
        image: article.urlToImage || "",
        date: article.publishedAt || "",
        source: article.source?.name || "Unknown",
      }))
      .filter(
        (article: RawArticle) =>
          article.title &&
          article.url &&
          NEWSAPI_ALLOWED_SOURCES.includes(article.source)
      );
  } catch {
    return [];
  }
}

export default async function handler(req: any, res: any) {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const [newsApiArticles, naturePlants, scienceDailyPlants, physPlants, kew] =
      await Promise.all([
        apiKey ? fetchNewsApiArticles(apiKey) : Promise.resolve([]),
        fetchRss("Nature Plants", "https://www.nature.com/nplants.rss"),
        fetchRss("ScienceDaily", "https://rss.sciencedaily.com/plants_animals.xml"),
        fetchRss(
          "Phys.org",
          "https://phys.org/rss-feed/biology-news/plants-animals/"
        ),
        fetchKewPressReleases(),
      ]);

    const articles = sortByDateDesc(
      dedupeArticles([
        ...newsApiArticles,
        ...naturePlants,
        ...scienceDailyPlants,
        ...physPlants,
        ...kew,
      ]).filter(hasPlantRelevance)
    ).slice(0, 18);

    return res.status(200).json({ articles });
  } catch {
    return res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
} 