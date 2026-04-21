declare const process: {
  env: Record<string, string | undefined>;
};

type NewsApiArticle = {
  title?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name?: string;
  };
};

export default async function handler(req: any, res: any) {
  const queries = [
    "plant science news",
    "houseplant trends",
    "tropical plant stories",
    "nursery launches",
    "plant care developments",
  ];

  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Missing NEWS_API_KEY",
      });
    }

    const results = await Promise.all(
      queries.map(async (query) => {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            query
          )}&language=en&sortBy=publishedAt&pageSize=2&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`News API request failed for query: ${query}`);
        }

        const data = await response.json();
        return Array.isArray(data.articles) ? data.articles : [];
      })
    );

    const articles = results
      .flat()
      .filter((article: NewsApiArticle) => article.title && article.url)
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
      .slice(0, 6);

    return res.status(200).json({ articles });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
}