export default async function handler(req: any, res: any) {
  const API_KEY = process.env.NEWS_API_KEY;

  const url = `https://newsapi.org/v2/everything?q=plants OR botany OR houseplants OR agriculture OR horticulture&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  // ✅ Only allow high-quality sources
  const allowedSources = [
    "BBC News",
    "The Guardian",
    "National Geographic",
    "Science News",
    "Nature",
    "Reuters",
    "AP News",
    "Frontiers",
    "Phys.org"
  ];

  // ✅ Filter + clean
  const articles = (data.articles || [])
    .filter((a: any) =>
      a.title &&
      a.url &&
      a.urlToImage &&
      allowedSources.includes(a.source?.name) &&
      !a.title.toLowerCase().includes("politics") &&
      !a.title.toLowerCase().includes("war")
    )
    .slice(0, 10)
    .map((a: any) => ({
      title: a.title,
      source: a.source.name,
      url: a.url,
      image: a.urlToImage,
      date: a.publishedAt,
    }));

  res.status(200).json({ articles });
} 