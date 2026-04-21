import { useEffect, useState } from "react";

type Article = {
  title: string;
  source: string;
  url: string;
  image: string;
  date: string;
};

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🌿 Plant Intelligence Digest
      </h1>

      <p style={{ marginBottom: "40px", color: "#555" }}>
        Weekly insights curated from global plant science, ecology, and horticulture.
      </p>

      {loading && <p>Loading articles...</p>}

      <div style={{ display: "grid", gap: "20px" }}>
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            style={{
              display: "block",
              padding: "20px",
              border: "1px solid #eee",
              borderRadius: "12px",
              textDecoration: "none",
              color: "black",
            }}
          >
            {article.image && (
              <img
                src={article.image}
                alt=""
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}

            <p style={{ fontSize: "12px", color: "#777" }}>
              {article.source}
            </p>

            <h2 style={{ fontSize: "18px", margin: "5px 0" }}>
              {article.title}
            </h2>

            <p style={{ fontSize: "12px", color: "#999" }}>
              {new Date(article.date).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}  
