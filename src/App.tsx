import React from "react";
import { Card, CardContent, Button } from "./ui";

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and maintenance.",
    price: "$34.99",
    kind: "sprayer",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: "$49.99",
    kind: "meter",
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: "$89.99",
    kind: "cart",
  },
];

function ProductArt({ kind }: { kind: string }) {
  if (kind === "sprayer") {
    return (
      <svg viewBox="0 0 640 360" className="w-full h-48 bg-[#f5fbf6]">
        <defs>
          <linearGradient id="sprayBg" x1="0" x2="1">
            <stop offset="0%" stopColor="#eef8ef" />
            <stop offset="100%" stopColor="#f8fcf8" />
          </linearGradient>
          <linearGradient id="bottleFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5d86a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#d9ae2d" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <rect width="640" height="360" fill="url(#sprayBg)" />
        <ellipse cx="200" cy="300" rx="120" ry="26" fill="#dcefdc" />
        <ellipse cx="375" cy="270" rx="110" ry="18" fill="#e5f4e5" />

        <rect x="150" y="130" width="165" height="34" rx="17" fill="#2d7c33" />
        <rect x="275" y="112" width="118" height="78" rx="20" fill="#57ad54" />
        <rect x="386" y="127" width="70" height="36" rx="18" fill="#2e3136" />
        <rect x="448" y="133" width="46" height="24" rx="10" fill="#f1c84e" />
        <rect
          x="122"
          y="160"
          width="42"
          height="104"
          rx="18"
          transform="rotate(24 122 160)"
          fill="#469847"
        />
        <rect
          x="110"
          y="182"
          width="16"
          height="94"
          rx="8"
          transform="rotate(24 110 182)"
          fill="#1b5b22"
        />
        <path d="M207 156 L247 102 L268 118 L233 166 Z" fill="#f1c84e" />
        <rect x="300" y="194" width="82" height="96" rx="16" fill="url(#bottleFill)" stroke="#cda02d" strokeWidth="4" />
        <rect x="324" y="178" width="34" height="18" rx="8" fill="#cda02d" />
        <path d="M492 145 C533 137, 573 130, 625 126" stroke="#95d7ff" strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M520 132 C553 118, 588 109, 632 104" stroke="#bee8ff" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="562" cy="118" r="5" fill="#95d7ff" />
        <circle cx="584" cy="112" r="4" fill="#95d7ff" />
        <circle cx="606" cy="108" r="3.5" fill="#95d7ff" />
        <circle cx="622" cy="104" r="3" fill="#95d7ff" />
      </svg>
    );
  }

  if (kind === "meter") {
    return (
      <svg viewBox="0 0 640 360" className="w-full h-48 bg-[#f5fbf6]">
        <defs>
          <linearGradient id="meterBg" x1="0" x2="1">
            <stop offset="0%" stopColor="#eef8ef" />
            <stop offset="100%" stopColor="#f8fcf8" />
          </linearGradient>
        </defs>

        <rect width="640" height="360" fill="url(#meterBg)" />
        <rect y="250" width="640" height="110" fill="#6f4a40" />
        <ellipse cx="320" cy="248" rx="210" ry="28" fill="#7d564b" />

        <ellipse cx="150" cy="250" rx="68" ry="28" fill="#8bc34a" />
        <rect x="135" y="185" width="16" height="64" rx="8" fill="#4b8b3b" />
        <ellipse cx="490" cy="254" rx="78" ry="32" fill="#8bc34a" />
        <rect x="478" y="180" width="20" height="74" rx="8" fill="#4b8b3b" />
        <ellipse cx="220" cy="244" rx="55" ry="24" fill="#7fb84a" />
        <ellipse cx="420" cy="248" rx="62" ry="26" fill="#7fb84a" />

        <rect x="262" y="70" width="116" height="160" rx="28" fill="#2f8c46" />
        <rect x="286" y="92" width="68" height="48" rx="10" fill="#dff0fa" stroke="#33404e" strokeWidth="4" />
        <text x="320" y="125" textAnchor="middle" fontSize="28" fontFamily="Arial" fill="#33404e">30</text>
        <circle cx="320" cy="164" r="16" fill="#1f5f28" />
        <rect x="292" y="186" width="18" height="24" rx="8" fill="#1f5f28" />
        <rect x="330" y="186" width="18" height="24" rx="8" fill="#1f5f28" />
        <rect x="302" y="226" width="8" height="134" fill="#b7c0c6" />
        <rect x="330" y="226" width="8" height="134" fill="#b7c0c6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 360" className="w-full h-48 bg-[#f5fbf6]">
      <defs>
        <linearGradient id="cartBg" x1="0" x2="1">
          <stop offset="0%" stopColor="#eef8ef" />
          <stop offset="100%" stopColor="#f8fcf8" />
        </linearGradient>
      </defs>

      <rect width="640" height="360" fill="url(#cartBg)" />
      <rect x="0" y="270" width="640" height="90" fill="#d8ecd5" />
      <ellipse cx="320" cy="282" rx="190" ry="18" fill="#c1dbbc" />

      <rect x="155" y="145" width="300" height="88" rx="14" fill="#2f7d32" />
      <rect x="172" y="162" width="266" height="54" rx="8" fill="#3f9444" />

      <line x1="172" y1="162" x2="172" y2="216" stroke="#1b5e20" strokeWidth="4" />
      <line x1="238" y1="162" x2="238" y2="216" stroke="#1b5e20" strokeWidth="4" />
      <line x1="304" y1="162" x2="304" y2="216" stroke="#1b5e20" strokeWidth="4" />
      <line x1="370" y1="162" x2="370" y2="216" stroke="#1b5e20" strokeWidth="4" />
      <line x1="436" y1="162" x2="436" y2="216" stroke="#1b5e20" strokeWidth="4" />

      <rect x="446" y="126" width="62" height="10" rx="5" fill="#2d2d2d" />
      <rect x="500" y="100" width="10" height="30" rx="5" fill="#2d2d2d" />

      <circle cx="220" cy="248" r="31" fill="#191919" />
      <circle cx="220" cy="248" r="14" fill="#f1c84e" />
      <circle cx="390" cy="248" r="31" fill="#191919" />
      <circle cx="390" cy="248" r="14" fill="#f1c84e" />

      <circle cx="500" cy="98" r="12" fill="#82c67a" />
      <circle cx="526" cy="82" r="14" fill="#5faa58" />
      <circle cx="552" cy="98" r="12" fill="#82c67a" />
      <rect x="490" y="100" width="70" height="42" rx="14" fill="#92cf8a" />
    </svg>
  );
}

const categories = ["All", "Irrigation", "Monitoring", "Workflow Gear"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3fbf4] to-white p-8 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
            Tropical plant tools
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-green-900 md:text-5xl">
            Canopy Standard 🌿
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
            Smart tools for plant care and growing systems. Clean picks for irrigation,
            monitoring, and workflow gear.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-green-700 text-white shadow"
                    : "bg-white text-green-800 ring-1 ring-green-200 hover:bg-green-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {filteredProducts.map((p) => (
            <Card key={p.name} className="border border-green-100 hover:shadow-lg transition-shadow">
              <ProductArt kind={p.kind} />

              <CardContent>
                <div className="mb-2 inline-block rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-green-700">
                  {p.badge}
                </div>

                <h2 className="text-xl font-semibold text-green-900">
                  {p.name}
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                  {p.category}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {p.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">{p.price}</p>
                </div>

                <Button className="mt-4">View Product</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="rounded-3xl bg-green-900 px-6 py-8 text-white md:px-8">
          <h3 className="text-2xl font-semibold">Built for collectors who want cleaner decisions.</h3>
          <p className="mt-2 max-w-2xl text-green-100">
            Start with the right tools, reduce guesswork, and build a more reliable growing setup.
          </p>
        </section>
      </div>
    </div>
  );
}