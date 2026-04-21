export default async function handler(req: any, res: any) {
  const queries = [
    "plant science news",
    "houseplant trends",
    "tropical plants",
    "nursery plants business",
    "plant care research"
  ];

  try {
    const results = await Promise.all(
      queries.map(async (q) => {
        const r = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&language=en&sortBy=publishedAt&pageSize=2&apiKey=${process.env.NEWS_API_KEY}`
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
        source: a.source.name,
        url: a.url,
        image: a.urlToImage,
        date: a.publishedAt
      }));

    res.status(200).json({ articles });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
}
