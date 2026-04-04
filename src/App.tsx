import React, { useMemo, useState } from "react";

const plantImages = {
  "Monstera Deliciosa":
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop",
  "Phalaenopsis Orchid":
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop",
  "Bird of Paradise":
    "https://images.unsplash.com/photo-1593691509543-c55fb32e5f99?w=1200&q=80&auto=format&fit=crop",
  "Anthurium":
    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1200&q=80&auto=format&fit=crop",
  "ZZ Plant":
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop",
  "Hoya Carnosa":
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=1200&q=80&auto=format&fit=crop",
} as const;

const plants = [
  {
    name: "Monstera Deliciosa",
    category: "TROPICAL",
    collection: "Statement Plants",
    description:
      "A sculptural tropical with iconic split leaves and strong visual presence.",
    price: "$42.00",
    features: [
      "Bright indirect light preferred",
      "Best when allowed to dry slightly between waterings",
      "Strong fit for interiors with vertical room to grow",
    ],
    careNote:
      "Best for bright rooms and collectors who want a dramatic foliage focal point.",
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Phalaenopsis Orchid",
    category: "FLOWERING",
    collection: "Elegant Bloomers",
    description:
      "A refined flowering plant that brings long-lasting blooms and a polished look.",
    price: "$36.00",
    features: [
      "Long bloom window in stable indoor conditions",
      "Works well in decorative gift-oriented spaces",
      "Likes warmth, airflow, and consistent but careful watering",
    ],
    careNote:
      "Best for gifting, dining tables, and calm, elegant interiors.",
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Bird of Paradise",
    category: "TROPICAL",
    collection: "Statement Plants",
    description:
      "A large-leaf tropical that gives interiors a lush, architectural feel.",
    price: "$68.00",
    features: [
      "High light plant with strong growth potential",
      "Excellent for open corners and large rooms",
      "Creates a clean, premium tropical silhouette",
    ],
    careNote:
      "Best for sunny interiors and buyers who want a bold, resort-like plant.",
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Anthurium",
    category: "FLOWERING",
    collection: "Collector Tropicals",
    description:
      "Glossy foliage and colorful blooms make this a strong premium indoor pick.",
    price: "$48.00",
    features: [
      "High humidity-friendly tropical",
      "Good choice for warm interiors and collectors",
      "Pairs well with refined decorative pots and plant styling",
    ],
    careNote:
      "Best for tropical-leaning plant lovers who want color and shine.",
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "ZZ Plant",
    category: "LOW LIGHT",
    collection: "Easy Care",
    description:
      "A resilient plant with thick glossy foliage and a reputation for tolerance.",
    price: "$29.00",
    features: [
      "Handles lower-light interiors better than many tropicals",
      "Low-maintenance feel for busy buyers",
      "Strong fit for offices, shelves, and entry points",
    ],
    careNote:
      "Best for beginners, darker rooms, and low-effort plant ownership.",
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Hoya Carnosa",
    category: "VINES",
    collection: "Trailing Plants",
    description:
      "A waxy-leaved trailing plant with a softer, more intimate collector appeal.",
    price: "$31.00",
    features: [
      "Great on shelves and hanging placements",
      "Collector-friendly without feeling too difficult",
      "Adds texture and softer movement to a plant arrangement",
    ],
    careNote:
      "Best for shelves, hanging displays, and smaller-space plant styling.",
    buyUrl: "https://www.amazon.com/",
  },
] as const;

const articles = [
  {
    slug: "this-week-in-plants",
    title: "This Week in Plants",
    kicker: "Weekly Plant World",
    summary:
      "A recurring editorial post translating current plant-world movement into buyer-friendly recommendations and stronger home-growing decisions.",
    intro:
      "This week in plants, the through-line is clarity: which plants perform well in real interiors, which categories continue to attract buyers, and where styling, care logic, and collector interest overlap.",
    sections: [
      {
        heading: "What is rising right now",
        body:
          "Statement tropicals still lead visual interest, but easy-care plants remain the strongest entry point for new buyers. That means a smart storefront should balance aspiration with approachability: a Bird of Paradise for drama, a ZZ Plant for trust, and a flowering plant like a Phalaenopsis Orchid for polish.",
      },
      {
        heading: "How to interpret plant trends better",
        body:
          "A lot of plant content online is trend-first and care-second. A better curation method is to group plants by function: statement plants, low-light plants, flowering plants, and trailing plants. That gives buyers an easier path to choosing something that fits their actual room and routine.",
      },
      {
        heading: "What this means for your shop",
        body:
          "Lead with a small, refined collection. Keep the assortment intentional. Explain why each plant belongs in the collection. That creates trust faster than a giant grid of random options.",
      },
    ],
  },
  {
    slug: "collector-notes",
    title: "Collector Notes",
    kicker: "Weekly Plant World",
    summary:
      "A short editorial on what collectors are paying attention to, from tropical foliage appeal to the quiet return of elegant flowering plants.",
    intro:
      "Collectors do not only buy rarity — they buy shape, mood, texture, and identity. The strongest collections right now mix sculptural foliage with plants that soften and personalize a space.",
    sections: [
      {
        heading: "The foliage story",
        body:
          "Plants like Monstera Deliciosa and Bird of Paradise continue to perform because they create immediate visual structure. Their value is not just botanical; it is architectural. They change the way a room feels.",
      },
      {
        heading: "The softer counterbalance",
        body:
          "Hoya and orchid categories bring a quieter intimacy. They are less about scale and more about repetition, detail, bloom, and proximity. That balance is what makes a plant assortment feel curated instead of one-note.",
      },
      {
        heading: "What to watch",
        body:
          "As more buyers become plant-literate, descriptions matter more. The stores that win will be the ones that explain placement, care rhythm, and design fit — not just plant names.",
      },
    ],
  },
  {
    slug: "care-briefing",
    title: "Care Briefing",
    kicker: "Weekly Plant World",
    summary:
      "A practical weekly note connecting evidence-based care ideas with the actual plants featured on your shop floor.",
    intro:
      "Good plant care advice should reduce uncertainty, not increase it. The fastest way to help buyers is to connect care principles to plant categories they understand.",
    sections: [
      {
        heading: "Watering is a category problem",
        body:
          "Not every plant wants the same rhythm. Orchids, tropical foliage plants, and low-light plants all handle moisture differently. Grouping care advice by plant type gives buyers a cleaner mental model than one-size-fits-all instructions.",
      },
      {
        heading: "Light is usually the hidden variable",
        body:
          "Many plant disappointments are really placement issues. A Bird of Paradise can underperform in a dim room, while a ZZ Plant can remain beautiful where other plants struggle. Curation should help buyers self-select into the right light zone.",
      },
      {
        heading: "What to communicate clearly",
        body:
          "For every featured plant, tell buyers three things: where it wants to live, how often to think about watering, and what aesthetic role it plays in a room. That alone makes your site more useful than most plant catalogs.",
      },
    ],
  },
] as const;

const collections = [
  "All",
  "Statement Plants",
  "Elegant Bloomers",
  "Collector Tropicals",
  "Easy Care",
  "Trailing Plants",
] as const;

function CanopyLogo() {
  return (
    <div className="select-none">
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "68px",
          fontWeight: 300,
          lineHeight: 1,
          color: "#2a231c",
          letterSpacing: "-0.01em",
          position: "relative",
          display: "inline-block",
        }}
      >
        CS
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#2a231c" }} />
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#2a231c",
              transform: "rotate(45deg)",
              margin: "0 6px",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, height: "1px", background: "#2a231c" }} />
        </div>
      </div>

      <div style={{ marginTop: "14px" }}>
        <div
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#2a231c",
          }}
        >
          Canopy Standard
        </div>
        <div
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8a9e7a",
            marginTop: "3px",
          }}
        >
          Refined Plants
        </div>
      </div>
    </div>
  );
}

function VineTopLeft() {
  return (
    <svg
      viewBox="0 0 340 300"
      className="pointer-events-none absolute left-0 top-0 w-[200px] md:w-[280px]"
      aria-hidden="true"
      style={{ opacity: 0.55 }}
    >
      <path
        d="M-10 0 C 20 40, 30 90, 20 140 C 12 185, 30 230, 60 270"
        fill="none"
        stroke="#5a7a4a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 0 C 70 30, 75 70, 65 110 C 55 150, 70 190, 100 230"
        fill="none"
        stroke="#7aaa60"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[
        [18, 48, -30],
        [22, 100, 20],
        [14, 155, -20],
        [62, 80, 10],
        [68, 140, -15],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x}, ${y}) rotate(${r})`}>
          <path
            d="M0,0 C-10,-18, -24,-22, -14,-8 C-6,2, 0,0 0,0Z"
            fill={i % 2 === 0 ? "#5d8c48" : "#6aaa52"}
          />
          <path
            d="M0,0 C10,-16, 22,-18, 14,-6 C6,2, 0,0 0,0Z"
            fill={i % 2 === 0 ? "#7ab560" : "#4e8040"}
          />
        </g>
      ))}
    </svg>
  );
}

function VineTopRight() {
  return (
    <svg
      viewBox="0 0 340 300"
      className="pointer-events-none absolute right-0 top-0 w-[200px] md:w-[280px]"
      aria-hidden="true"
      style={{ opacity: 0.55 }}
    >
      <path
        d="M350 0 C 320 40, 310 90, 320 140 C 328 185, 310 230, 280 270"
        fill="none"
        stroke="#5a7a4a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M290 0 C 270 30, 265 70, 275 110 C 285 150, 270 190, 240 230"
        fill="none"
        stroke="#7aaa60"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[
        [322, 48, 30],
        [318, 100, -20],
        [326, 155, 20],
        [278, 80, -10],
        [272, 140, 15],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x}, ${y}) rotate(${r})`}>
          <path
            d="M0,0 C10,-18, 24,-22, 14,-8 C6,2, 0,0 0,0Z"
            fill={i % 2 === 0 ? "#5d8c48" : "#6aaa52"}
          />
          <path
            d="M0,0 C-10,-16, -22,-18, -14,-6 C-6,2, 0,0 0,0Z"
            fill={i % 2 === 0 ? "#7ab560" : "#4e8040"}
          />
        </g>
      ))}
    </svg>
  );
}

function ProductCard({
  plant,
  onView,
}: {
  plant: (typeof plants)[number];
  onView: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgUrl = plantImages[plant.name];

  return (
    <div
      className="flex flex-col overflow-hidden border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderRadius: "2px" }}
    >
      <div className="relative h-56 w-full overflow-hidden bg-stone-50">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-stone-200 border-t-stone-500" />
          </div>
        )}

        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-stone-400">
            Unavailable
          </div>
        ) : (
          <img
            src={imgUrl}
            alt={plant.name}
            className={`h-full w-full object-cover transition-all duration-700 hover:scale-105 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#8a9e7a",
            marginBottom: "8px",
          }}
        >
          {plant.category}
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "24px",
            fontWeight: 400,
            color: "#2a231c",
            lineHeight: 1.15,
            marginBottom: "10px",
          }}
        >
          {plant.name}
        </h2>

        <p
          className="mb-3 text-xs uppercase tracking-[0.16em] text-stone-400"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          {plant.collection}
        </p>

        <p
          className="flex-1 text-sm leading-relaxed text-stone-500"
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 300,
          }}
        >
          {plant.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "26px",
              fontWeight: 600,
              color: "#2a231c",
            }}
          >
            {plant.price}
          </span>

          <button
            onClick={onView}
            className="transition-colors duration-200"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#3d5c30",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2a3f20";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#3d5c30";
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductDetail({
  plant,
  onBack,
}: {
  plant: (typeof plants)[number];
  onBack: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgUrl = plantImages[plant.name];

  return (
    <div
      className="border border-stone-100 bg-white p-8 shadow-sm md:p-12"
      style={{ borderRadius: "2px" }}
    >
      <button
        onClick={onBack}
        className="mb-10 flex items-center gap-2 transition-colors"
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#5a7a4a",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to plants
      </button>

      <div className="grid gap-12 md:grid-cols-2">
        <div
          className="overflow-hidden bg-stone-50"
          style={{ borderRadius: "2px" }}
        >
          <div className="relative h-[320px] md:h-[480px]">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-500" />
              </div>
            )}

            {imgError ? (
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-stone-400">
                Unavailable
              </div>
            ) : (
              <img
                src={imgUrl}
                alt={plant.name}
                className={`h-full w-full object-cover transition-opacity duration-700 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#8a9e7a",
              marginBottom: "12px",
            }}
          >
            {plant.category}
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "40px",
              fontWeight: 400,
              color: "#2a231c",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            {plant.name}
          </h2>

          <p
            className="mb-5 text-xs uppercase tracking-[0.18em] text-stone-400"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {plant.collection}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "#c8b89a" }} />
            <div
              style={{
                width: "4px",
                height: "4px",
                background: "#c8b89a",
                transform: "rotate(45deg)",
                margin: "0 6px",
              }}
            />
            <div style={{ flex: 1, height: "1px", background: "#e8e0d4" }} />
          </div>

          <p
            className="mb-5 text-sm leading-7 text-stone-500"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            {plant.description}
          </p>

          <p
            className="mb-8 text-sm leading-7 text-stone-500"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            {plant.careNote}
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "36px",
              fontWeight: 600,
              color: "#2a231c",
              marginBottom: "24px",
            }}
          >
            {plant.price}
          </p>

          <div className="mb-8">
            <p
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#8a9e7a",
                marginBottom: "14px",
              }}
            >
              Why It Belongs Here
            </p>

            <ul className="space-y-3">
              {plant.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-stone-600"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "4px",
                      background: "#5a7a4a",
                      transform: "rotate(45deg)",
                      marginTop: "7px",
                      flexShrink: 0,
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <a
              href={plant.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#3d5c30",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2a3f20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#3d5c30";
              }}
            >
              Buy Now
            </a>

            <button
              onClick={onBack}
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#3d5c30",
                background: "none",
                border: "1px solid #c8d8b8",
                padding: "14px 28px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f4f8f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({
  article,
  onOpen,
}: {
  article: (typeof articles)[number];
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="w-full border border-stone-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderRadius: "2px" }}
    >
      <p
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#8a9e7a",
          marginBottom: "10px",
        }}
      >
        {article.kicker}
      </p>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "26px",
          fontWeight: 400,
          color: "#2a231c",
          lineHeight: 1.15,
          marginBottom: "12px",
        }}
      >
        {article.title}
      </h3>

      <p
        className="text-sm leading-7 text-stone-500"
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
        }}
      >
        {article.summary}
      </p>

      <div className="mt-5">
        <span
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3d5c30",
          }}
        >
          Read article
        </span>
      </div>
    </button>
  );
}

function ArticleDetail({
  article,
  onBack,
}: {
  article: (typeof articles)[number];
  onBack: () => void;
}) {
  return (
    <div
      className="border border-stone-100 bg-white p-8 shadow-sm md:p-12"
      style={{ borderRadius: "2px" }}
    >
      <button
        onClick={onBack}
        className="mb-10 flex items-center gap-2 transition-colors"
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#5a7a4a",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to articles
      </button>

      <p
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#8a9e7a",
          marginBottom: "12px",
        }}
      >
        {article.kicker}
      </p>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "42px",
          fontWeight: 400,
          color: "#2a231c",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {article.title}
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          marginBottom: "24px",
        }}
      >
        <div style={{ width: "40px", height: "1px", background: "#c8b89a" }} />
        <div
          style={{
            width: "4px",
            height: "4px",
            background: "#c8b89a",
            transform: "rotate(45deg)",
            margin: "0 6px",
          }}
        />
        <div style={{ flex: 1, height: "1px", background: "#e8e0d4" }} />
      </div>

      <p
        className="mb-10 text-base leading-8 text-stone-600"
        style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
        }}
      >
        {article.intro}
      </p>

      <div className="space-y-10">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "30px",
                fontWeight: 400,
                color: "#2a231c",
                marginBottom: "12px",
              }}
            >
              {section.heading}
            </h2>

            <p
              className="text-sm leading-8 text-stone-600"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <button
          onClick={onBack}
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#3d5c30",
            background: "none",
            border: "1px solid #c8d8b8",
            padding: "14px 28px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f4f8f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "none";
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedPlant, setSelectedPlant] =
    useState<(typeof plants)[number] | null>(null);
  const [selectedArticle, setSelectedArticle] =
    useState<(typeof articles)[number] | null>(null);
  const [activeCollection, setActiveCollection] =
    useState<(typeof collections)[number]>("All");

  const visiblePlants = useMemo(() => {
    if (activeCollection === "All") return plants;
    return plants.filter((p) => p.collection === activeCollection);
  }, [activeCollection]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #f7f4ef; }
      `}</style>

      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f2ede5 0%, #f7f4ef 50%, #eef3ec 100%)",
        }}
      >
        <VineTopLeft />
        <VineTopRight />

        <div
          className="pointer-events-none fixed inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
            opacity: 0.4,
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <header className="mb-14 flex items-start justify-between gap-6">
            <CanopyLogo />

            <nav className="hidden gap-8 pt-2 md:flex">
              {["Shop", "Collections", "Weekly Notes"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#4a3d30",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3d5c30";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4a3d30";
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </header>

          {!selectedPlant && !selectedArticle && (
            <>
              <div className="mb-10">
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    color: "#8a9e7a",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Scientifically Curated Plant Floor
                </p>

                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "#2a231c",
                    lineHeight: 1.2,
                  }}
                >
                  Refined plants, grouped by care logic,
                  <br />
                  not random trend chasing
                </h1>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "1px",
                      background: "#c8b89a",
                    }}
                  />
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "#c8b89a",
                      transform: "rotate(45deg)",
                      margin: "0 6px",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "#aaa",
                    marginTop: "10px",
                  }}
                >
                  Inspired by plant science themes like soil quality, resource use,
                  plant form, and flowering diversity.
                </p>
              </div>

              <div className="mb-10 flex flex-wrap gap-3">
                {collections.map((collection) => {
                  const active = activeCollection === collection;
                  return (
                    <button
                      key={collection}
                      onClick={() => setActiveCollection(collection)}
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: active ? "#fff" : "#4a3d30",
                        background: active ? "#3d5c30" : "rgba(255,255,255,0.7)",
                        border: active
                          ? "1px solid #3d5c30"
                          : "1px solid #ddd4c7",
                        padding: "10px 16px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {collection}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {visiblePlants.map((plant) => (
                  <ProductCard
                    key={plant.name}
                    plant={plant}
                    onView={() => setSelectedPlant(plant)}
                  />
                ))}
              </div>

              <section className="mt-16">
                <div className="mb-8">
                  <p
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#8a9e7a",
                      marginBottom: "8px",
                    }}
                  >
                    Weekly Editorial
                  </p>

                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "30px",
                      fontWeight: 400,
                      color: "#2a231c",
                    }}
                  >
                    Plant World Notes
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {articles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                      onOpen={() => setSelectedArticle(article)}
                    />
                  ))}
                </div>
              </section>
            </>
          )}

          {selectedPlant && (
            <ProductDetail
              plant={selectedPlant}
              onBack={() => setSelectedPlant(null)}
            />
          )}

          {selectedArticle && (
            <ArticleDetail
              article={selectedArticle}
              onBack={() => setSelectedArticle(null)}
            />
          )}

          <footer className="mt-20 flex items-center justify-between border-t border-stone-200 pt-8">
            <p
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "9px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#bbb",
              }}
            >
              © 2026 Canopy Standard
            </p>

            <p
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "9px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#bbb",
              }}
            >
              Refined Plants
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}