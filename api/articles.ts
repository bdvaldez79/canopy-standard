declare const process: {
  env: Record<string, string | undefined>;
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
      return res.status(500).json({ error: "Missing NEWS_API_KEY" });
    }

    const results = await Promise.all(
      queries.map(async (q) => {
        const r = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            q
          )}&language=en&sortBy=publishedAt&pageSize=2&apiKey=${apiKey}`
        );

        const data = await r.json();
        return data.articles || [];
      })
    );

    const articles = results
      .flat()
      .filter((a: any) => a.title && a.url)
      .slice(0, 6)
      .map((a: any) => ({
        title: a.title,
        source: a.source?.name || "Unknown",
        url: a.url,
        image: a.urlToImage || "",
        date: a.publishedAt || "",
      }));

    return res.status(200).json({ articles });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch articles" });
  }
}