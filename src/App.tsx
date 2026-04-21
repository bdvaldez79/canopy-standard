import React, { useEffect, useMemo, useState } from "react";

type Article = {
  title: string;
  source: string;
  url: string;
  image: string;
  date: string;
};

const sourceColors: Record<string, string> = {
  "Nature Plants": "#2f5d50",
  Nature: "#2f5d50",
  "ScienceDaily": "#5f7f46",
  "Science News": "#48607a",
  "BBC News": "#7a4f4f",
  Reuters: "#6d5a3a",
  "AP News": "#6c5e78",
  "National Geographic": "#8a6b16",
  "The Guardian": "#355c8c",
  "Phys.org": "#5b4a74",
  Kew: "#4a7a4f",
  Unknown: "#6b7280",
};

function formatDate(value: string) {
  if (!value) return "Recent";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "Recent";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function sourceTone(source: string) {
  return sourceColors[source] || "#5a7a4a";
}

function shortSummary(title: string, source: string) {
  const t = title.toLowerCase();

  if (t.includes("forest") || t.includes("tree")) {
    return "A timely look at how plant systems, forests, and ecological change are shaping the wider environmental conversation.";
  }
  if (t.includes("orchid") || t.includes("flower")) {
    return "A focused plant story with relevance for collectors, flowering-plant enthusiasts, and design-minded growers.";
  }
  if (t.includes("soil") || t.includes("carbon") || t.includes("agriculture")) {
    return "Useful context on soil, resilience, and the plant–environment relationship that increasingly shapes modern horticulture.";
  }
  if (t.includes("houseplant") || t.includes("indoor") || t.includes("tropical")) {
    return "A strong signal for indoor growers, tropical collectors, and readers tracking how plant culture is evolving.";
  }
  if (source === "Nature Plants" || source === "Nature") {
    return "A higher-authority research signal with implications for plant science, cultivation logic, and the future of botanical understanding.";
  }
  if (source === "Kew") {
    return "A botanical-institution perspective that adds depth, taxonomy, and plant-world relevance beyond mainstream coverage.";
  }

  return "A curated plant-world update selected for relevance to botany, horticulture, ecological systems, and the broader future of plants.";
}

function articleCategory(article: Article) {
  const t = `${article.title} ${article.source}`.toLowerCase();

  if (
    t.includes("houseplant") ||
    t.includes("indoor") ||
    t.includes("tropical") ||
    t.includes("orchid")
  ) {
    return "Houseplants";
  }
  if (
    t.includes("forest") ||
    t.includes("tree") ||
    t.includes("ecosystem") ||
    t.includes("biodiversity")
  ) {
    return "Trees & Ecology";
  }
  if (
    t.includes("soil") ||
    t.includes("carbon") ||
    t.includes("crop") ||
    t.includes("agriculture")
  ) {
    return "Growing Systems";
  }
  return "Plant Science";
}

function inferAuthor(source: string) {
  return `${source} Desk`;
}

function LogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-14 w-14 shrink-0">
        <div className="absolute inset-0 rounded-full border border-[#c7d6c2] bg-white/80 shadow-sm" />
        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b8c9b1] bg-[#f5faf2]" />
        <div className="absolute left-[18px] top-[13px] h-5 w-4 rotate-[-28deg] rounded-[100%_0%_100%_0%/80%_0%_100%_20%] bg-[#6e9a57]" />
        <div className="absolute left-[28px] top-[22px] h-5 w-4 rotate-[28deg] rounded-[0%_100%_0%_100%/0%_80%_20%_100%] bg-[#8ab66d]" />
        <div className="absolute left-[26px] top-[18px] h-16 w-[1.5px] rotate-[12deg] bg-[#6d7f63]" />
      </div>

      <div>
        <div
          className="text-[28px] leading-none text-[#2a231c]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Canopy Standard
        </div>
        <div
          className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#7f8d73]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          Plant intelligence & curated discoveries
        </div>
      </div>
    </div>
  );
}

function DecorativeHeroBotanical() {
  return (
    <svg
      viewBox="0 0 900 360"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bgWash" x1="0" x2="1">
          <stop offset="0%" stopColor="#eef5eb" />
          <stop offset="100%" stopColor="#f8faf5" />
        </linearGradient>
        <linearGradient id="leafA" x1="0" x2="1">
          <stop offset="0%" stopColor="#6f9a58" />
          <stop offset="100%" stopColor="#95bf73" />
        </linearGradient>
        <linearGradient id="leafB" x1="0" x2="1">
          <stop offset="0%" stopColor="#7da964" />
          <stop offset="100%" stopColor="#afcf91" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="900" height="360" fill="url(#bgWash)" />

      <path
        d="M18 350 C 80 270, 110 210, 115 135 C 120 82, 136 42, 178 0"
        fill="none"
        stroke="#8daf7c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M876 350 C 820 286, 792 236, 786 168 C 782 108, 760 48, 720 0"
        fill="none"
        stroke="#8daf7c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {[
        [130, 58, -24, "url(#leafA)"],
        [110, 118, 18, "url(#leafB)"],
        [136, 180, -16, "url(#leafA)"],
        [780, 70, 28, "url(#leafB)"],
        [760, 128, -18, "url(#leafA)"],
        [786, 188, 22, "url(#leafB)"],
        [686, 292, 12, "url(#leafA)"],
        [220, 278, -22, "url(#leafB)"],
      ].map(([x, y, r, fill], i) => (
        <ellipse
          key={i}
          cx={x as number}
          cy={y as number}
          rx="34"
          ry="15"
          transform={`rotate(${r} ${x} ${y})`}
          fill={fill as string}
          opacity="0.65"
        />
      ))}

      <circle cx="450" cy="180" r="120" fill="#ffffff" opacity="0.28" />
      <circle cx="450" cy="180" r="180" fill="#ffffff" opacity="0.12" />
    </svg>
  );
}

function ArticleMeta({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  const color = sourceTone(article.source);

  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "mb-2" : "mb-3"}`}>
      <span
        className="inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white"
        style={{
          backgroundColor: color,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
        }}
      >
        {article.source}
      </span>

      <span
        className="text-[11px] uppercase tracking-[0.18em] text-[#8b8d81]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
      >
        {articleCategory(article)}
      </span>

      <span
        className="text-[11px] uppercase tracking-[0.18em] text-[#a1a297]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
      >
        {formatDate(article.date)}
      </span>
    </div>
  );
}

function FeaturedStory({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid overflow-hidden rounded-[28px] border border-[#e4e8de] bg-white shadow-[0_12px_50px_rgba(42,35,28,0.08)] transition hover:shadow-[0_16px_60px_rgba(42,35,28,0.12)] lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="relative min-h-[320px] overflow-hidden bg-[#edf4e9] lg:min-h-[460px]">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#dce9d5] to-[#f5faf2]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
      </div>

      <div className="flex flex-col justify-between p-7 md:p-10">
        <div>
          <ArticleMeta article={article} />
          <h2
            className="max-w-[18ch] text-[34px] leading-[1.02] text-[#2a231c] md:text-[44px]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            {article.title}
          </h2>

          <p
            className="mt-5 text-[15px] leading-8 text-[#59574f]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {shortSummary(article.title, article.source)}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.22em] text-[#8b8d81]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Why it matters
            </div>
            <div
              className="mt-2 text-[13px] text-[#6d6b63]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Curated for relevance, clarity, and real plant-world significance.
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#35542c]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Read story <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function SecondaryStoryCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-[24px] border border-[#e7eadf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden bg-[#eef5eb]">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#dce9d5] to-[#f7fbf5]" />
        )}
      </div>

      <div className="p-6">
        <ArticleMeta article={article} compact />
        <h3
          className="text-[28px] leading-[1.08] text-[#2a231c]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          {article.title}
        </h3>

        <p
          className="mt-4 text-[14px] leading-7 text-[#66645d]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {shortSummary(article.title, article.source)}
        </p>
      </div>
    </a>
  );
}

function CompactStoryRow({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid gap-4 rounded-[20px] border border-[#ebece5] bg-white p-5 transition hover:border-[#d9dfd2] hover:shadow-sm md:grid-cols-[130px_1fr]"
    >
      <div className="relative h-24 overflow-hidden rounded-[14px] bg-[#eef5eb] md:h-full">
        {article.image ? (
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#dce9d5] to-[#f7fbf5]" />
        )}
      </div>

      <div>
        <ArticleMeta article={article} compact />
        <h4
          className="text-[25px] leading-[1.08] text-[#2a231c]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          {article.title}
        </h4>

        <p
          className="mt-3 text-[14px] leading-7 text-[#66645d]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {shortSummary(article.title, article.source)}
        </p>

        <div
          className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#35542c]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          Open article →
        </div>
      </div>
    </a>
  );
}

function SidebarBrief({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-[#eceee7] py-4 last:border-b-0"
    >
      <div
        className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#8b8d81]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {article.source} · {formatDate(article.date)}
      </div>
      <div
        className="text-[22px] leading-[1.12] text-[#2a231c]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
      >
        {article.title}
      </div>
    </a>
  );
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(Array.isArray(data.articles) ? data.articles : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const featured = articles[0];
  const secondary = articles.slice(1, 4);
  const latest = articles.slice(4, 12);
  const sidebar = articles.slice(0, 5);

  const totalCount = useMemo(() => articles.length, [articles]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #f7f5ef;
          color: #2a231c;
          font-family: 'Inter', sans-serif;
        }

        a { color: inherit; text-decoration: none; }
      `}</style>

      <div className="min-h-screen bg-[linear-gradient(180deg,#f3efe6_0%,#f7f5ef_28%,#f2f6ef_100%)]">
        <header className="relative overflow-hidden border-b border-[#e6e7df]">
          <DecorativeHeroBotanical />

          <div className="relative mx-auto max-w-7xl px-5 py-6 md:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <LogoMark />

              <nav
                className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.22em] text-[#5a5a51]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                <a href="#top-stories" className="transition hover:text-[#35542c]">
                  Top Stories
                </a>
                <a href="#latest" className="transition hover:text-[#35542c]">
                  Latest
                </a>
                <a href="#briefing" className="transition hover:text-[#35542c]">
                  Briefing
                </a>
                <a href="/api/articles" target="_blank" className="transition hover:text-[#35542c]">
                  Raw Feed
                </a>
              </nav>
            </div>

            <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div
                  className="mb-4 text-[11px] uppercase tracking-[0.26em] text-[#7f8d73]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Plant journalism, redesigned
                </div>

                <h1
                  className="max-w-[14ch] text-[50px] leading-[0.95] text-[#2a231c] md:text-[72px]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  A real editorial home for plant intelligence.
                </h1>

                <p
                  className="mt-6 max-w-2xl text-[16px] leading-8 text-[#5f5c54]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Curated coverage of plant science, houseplant culture, tropical discoveries,
                  trees, ecology, and horticultural shifts — presented like a publication, not a raw feed.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Plant Science", "Houseplants", "Trees & Ecology", "Growing Systems"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#dbe3d3] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#4c5e42]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <aside
                id="briefing"
                className="rounded-[28px] border border-[#e6e7df] bg-white/80 p-6 shadow-sm backdrop-blur-sm"
              >
                <div
                  className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#7f8d73]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Editor’s briefing
                </div>

                <h2
                  className="text-[30px] leading-[1.04] text-[#2a231c]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  What’s moving in plants right now
                </h2>

                <p
                  className="mt-4 text-[14px] leading-7 text-[#66645d]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Today’s feed is shaped by relevance, source quality, and plant-world significance —
                  not generic news noise. {totalCount > 0 ? `${totalCount} stories currently in the stream.` : ""}
                </p>

                <div className="mt-6">
                  {sidebar.length > 0 ? (
                    sidebar.map((article) => (
                      <SidebarBrief key={`${article.source}-${article.title}`} article={article} />
                    ))
                  ) : (
                    <div className="text-sm text-[#77756f]">
                      No stories yet. Check back shortly.
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          {loading && (
            <div className="rounded-[24px] border border-[#e6e7df] bg-white p-10 text-center shadow-sm">
              <div
                className="text-[12px] uppercase tracking-[0.24em] text-[#7f8d73]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Loading plant intelligence
              </div>
              <div
                className="mt-4 text-[30px] text-[#2a231c]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Gathering fresh stories from across the plant world...
              </div>
            </div>
          )}

          {!loading && articles.length === 0 && (
            <div className="rounded-[24px] border border-[#e6e7df] bg-white p-10 text-center shadow-sm">
              <div
                className="text-[12px] uppercase tracking-[0.24em] text-[#7f8d73]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Feed unavailable
              </div>
              <div
                className="mt-4 text-[30px] text-[#2a231c]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                No curated plant stories are available right now.
              </div>
            </div>
          )}

          {!loading && featured && (
            <>
              <section id="top-stories">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <div
                      className="text-[11px] uppercase tracking-[0.24em] text-[#7f8d73]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      Featured coverage
                    </div>
                    <h2
                      className="mt-2 text-[36px] leading-none text-[#2a231c]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                    >
                      Top story
                    </h2>
                  </div>
                </div>

                <FeaturedStory article={featured} />
              </section>

              {secondary.length > 0 && (
                <section className="mt-12">
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                      <div
                        className="text-[11px] uppercase tracking-[0.24em] text-[#7f8d73]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                      >
                        Secondary features
                      </div>
                      <h2
                        className="mt-2 text-[36px] leading-none text-[#2a231c]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                      >
                        More essential reading
                      </h2>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                    {secondary.map((article) => (
                      <SecondaryStoryCard
                        key={`${article.source}-${article.title}`}
                        article={article}
                      />
                    ))}
                  </div>
                </section>
              )}

              {latest.length > 0 && (
                <section id="latest" className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
                  <div>
                    <div
                      className="text-[11px] uppercase tracking-[0.24em] text-[#7f8d73]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      Latest coverage
                    </div>
                    <h2
                      className="mt-2 text-[36px] leading-none text-[#2a231c]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                    >
                      New stories across the plant world
                    </h2>

                    <div className="mt-7 space-y-5">
                      {latest.map((article) => (
                        <CompactStoryRow
                          key={`${article.source}-${article.title}`}
                          article={article}
                        />
                      ))}
                    </div>
                  </div>

                  <aside className="h-fit rounded-[24px] border border-[#e6e7df] bg-white p-6 shadow-sm">
                    <div
                      className="text-[11px] uppercase tracking-[0.24em] text-[#7f8d73]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      Reading notes
                    </div>

                    <h3
                      className="mt-2 text-[28px] leading-[1.05] text-[#2a231c]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                    >
                      Why this feels better than a generic feed
                    </h3>

                    <div
                      className="mt-5 space-y-5 text-[14px] leading-7 text-[#66645d]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <p>
                        Stronger hierarchy. One featured story, several secondary narratives, then a dense reading list.
                      </p>
                      <p>
                        Better publication feel. More metadata, more context, less “raw API dump” energy.
                      </p>
                      <p>
                        Higher trust. Source labels, dates, and clear editorial framing help readers understand why a story is here.
                      </p>
                    </div>
                  </aside>
                </section>
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
} 