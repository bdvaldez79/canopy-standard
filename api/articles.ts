declare const process: {
  env: Record<string, string | undefined>;
};

type NewsApiArticle = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name?: string;
  };
};

export default async function handler(req: any, res: any) {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing NEWS_API_KEY" });
  }

  const allowedSources = [
    "BBC News",
    "Nature",
    "Reuters",
    "AP News",
    "Science News",
    "National Geographic",
    "The Guardian",
    "Frontiers",
    "Phys.org"
  ];

  const plantKeywords = [
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
    "nursery"
  ];

  const blockedWords = [
    "travel",
    "weekend",
    "island-hopping",
    "hotel",
    "vacation",
    "politics",
    "war",
    "celebrity",
    "fashion",
    "sports",
    "crime"
  ];

  const query =
    '(plants OR plant OR tree OR trees OR botany OR horticulture OR houseplants OR tropical OR orchid OR soil OR biodiversity OR ecology OR agriculture OR nursery)';

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=en&sortBy=publishedAt&pageSize=40&searchIn=title,description&apiKey=${apiKey}`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "News API request failed" });
    }

    const data = await response.json();

    const articles = (Array.isArray(data.articles) ? data.articles : [])
      .filter((article: NewsApiArticle) => {
        const sourceName = article.source?.name || "";
        const title = (article.title || "").toLowerCase();
        const description = (article.description || "").toLowerCase();
        const combined = `${title} ${description}`;

        const hasAllowedSource = allowedSources.includes(sourceName);
        const hasImage = !!article.urlToImage;
        const hasUrl = !!article.url;
        const hasTitle = !!article.title;

        const hasPlantKeyword = plantKeywords.some((word) =>
          combined.includes(word)
        );

        const hasBlockedWord = blockedWords.some((word) =>
          combined.includes(word)
        );

        return (
          hasAllowedSource &&
          hasImage &&
          hasUrl &&
          hasTitle &&
          hasPlantKeyword &&
          !hasBlockedWord
        );
      })
      .map((article: NewsApiArticle) => ({
        title: article.title || "",
        source: article.source?.name || "Unknown",
        url: article.url || "",
        image: article.urlToImage || "",
        date: article.publishedAt || "",
      }))
      .filter(
        (article, index, self) =>
          index === self.findIndex((a) => a.title === article.title)
      )
      .slice(0, 10);

    return res.status(200).json({ articles });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch articles" });
  }
} 