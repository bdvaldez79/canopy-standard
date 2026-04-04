import React, { useState } from "react";

const IMAGES = {
  "Professional Hose-End Sprayer":
    "https://images.unsplash.com/photo-1610891170442-79392fc76493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Digital Soil Moisture Meter":
    "https://plus.unsplash.com/premium_photo-1661902899911-d7b89906e638?w=1200&q=80&auto=format&fit=crop",
  "Heavy-Duty Nursery Cart":
    "https://plus.unsplash.com/premium_photo-1663012834491-6ba79afac048?w=1200&q=80&auto=format&fit=crop",
} as const;

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and pest control.",
    price: "$34.99",
    features: [
      "Great for liquid fertilizer and treatment application",
      "Simple hose attachment setup",
      "Good coverage for garden beds and outdoor plants",
    ],
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: "$49.99",
    features: [
      "Fast moisture readings at the root zone",
      "Reduces watering guesswork",
      "Useful for collectors and indoor plant care",
    ],
    buyUrl: "https://www.amazon.com/",
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: "$89.99",
    features: [
      "Helps move pots, trays, and supplies",
      "Good for patios, greenhouses, and garden work",
      "Makes plant workflow easier and faster",
    ],
    buyUrl: "https://www.amazon.com/",
  },
] as const;

function VineTopLeft() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="pointer-events-none absolute left-0 top-0 w-[220px] opacity-70 md:w-[320px]"
      aria-hidden="true"
    >
      <path
        d="M10 8 C 40 28, 58 56, 62 95 C 70 150, 98 182, 150 214 C 180 232, 208 244, 246 252"
        fill="none"
        stroke="#6cab5a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M90 2 C 120 18, 138 40, 144 72 C 150 110, 174 132, 208 152 C 238 170, 270 184, 318 196"
        fill="none"
        stroke="#8bcf7a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [36, 28, -25],
        [54, 58, 16],
        [64, 96, -30],
        [78, 134, 22],
        [110, 176, -18],
        [144, 207, 14],
        [178, 228, -10],
        [126, 42, 24],
        [148, 76, -24],
        [184, 128, 20],
        [226, 160, -15],
        [268, 182, 18],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="16"
          ry="9"
          fill={i % 2 === 0 ? "#7fc96d" : "#5fa94d"}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function VineTopRight() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="pointer-events-none absolute right-0 top-0 w-[220px] opacity-70 md:w-[320px]"
      aria-hidden="true"
    >
      <path
        d="M410 8 C 380 28, 362 56, 358 95 C 350 150, 322 182, 270 214 C 240 232, 212 244, 174 252"
        fill="none"
        stroke="#6cab5a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M330 2 C 300 18, 282 40, 276 72 C 270 110, 246 132, 212 152 C 182 170, 150 184, 102 196"
        fill="none"
        stroke="#8bcf7a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [384, 28, 25],
        [366, 58, -16],
        [356, 96, 30],
        [342, 134, -22],
        [310, 176, 18],
        [276, 207, -14],
        [242, 228, 10],
        [294, 42, -24],
        [272, 76, 24],
        [236, 128, -20],
        [194, 160, 15],
        [152, 182, -18],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="16"
          ry="9"
          fill={i % 2 === 0 ? "#7fc96d" : "#5fa94d"}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function VineBottomLeft() {
  return (
    <svg
      viewBox="0 0 360 220"
      className="pointer-events-none absolute bottom-0 left-0 w-[180px] opacity-60 md:w-[240px]"
      aria-hidden="true"
    >
      <path
        d="M0 210 C 42 186, 66 165, 98 128 C 132 90, 170 68, 230 52"
        fill="none"
        stroke="#72b860"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[
        [42, 180, -20],
        [74, 156, 18],
        [106, 126, -24],
        [140, 96, 22],
        [178, 76, -15],
        [216, 58, 16],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="15"
          ry="8"
          fill={i % 2 === 0 ? "#86cd74" : "#5fa94d"}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function VineBottomRight() {
  return (
    <svg
      viewBox="0 0 360 220"
      className="pointer-events-none absolute bottom-0 right-0 w-[180px] opacity-60 md:w-[240px]"
      aria-hidden="true"
    >
      <path
        d="M360 210 C 318 186, 294 165, 262 128 C 228 90, 190 68, 130 52"
        fill="none"
        stroke="#72b860"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[
        [318, 180, 20],
        [286, 156, -18],
        [254, 126, 24],
        [220, 96, -22],
        [182, 76, 15],
        [144, 58, -16],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="15"
          ry="8"
          fill={i % 2 === 0 ? "#86cd74" : "#5fa94d"}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function ProductCard({
  product,
  onView,
}: {
  product: (typeof products)[number];
  onView: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgUrl = IMAGES[product.name];

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white/90 shadow-md backdrop-blur-sm">
      <div className="relative h-48 w-full bg-green-50">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          </div>
        )}

        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
            Image unavailable
          </div>
        ) : (
          <img
            src={imgUrl}
            alt={product.name}
            className={`h-48 w-full object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-semibold text-green-900">{product.name}</h2>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">
          {product.category}
        </p>
        <p className="mt-3 flex-1 text-sm text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-bold text-gray-900">{product.price}</p>

        <button
          onClick={onView}
          className="mt-5 w-full rounded-xl bg-green-600 py-2.5 font-medium text-white transition hover:bg-green-700"
        >
          View Product
        </button>
      </div>
    </div>
  );
}

function ProductDetail({
  product,
  onBack,
}: {
  product: (typeof products)[number];
  onBack: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgUrl = IMAGES[product.name];

  return (
    <div className="rounded-3xl border border-green-100 bg-white/90 p-5 shadow-lg backdrop-blur-sm md:p-8">
      <button
        onClick={onBack}
        className="mb-6 rounded-full border border-green-200 px-4 py-2 text-sm font-medium text-green-800 transition hover:bg-green-50"
      >
        ← Back to products
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-green-50">
          <div className="relative h-[260px] md:h-[420px]">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
              </div>
            )}

            {imgError ? (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                Image unavailable
              </div>
            ) : (
              <img
                src={imgUrl}
                alt={product.name}
                className={`h-full w-full object-cover transition-opacity duration-500 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
            {product.category}
          </p>

          <h2 className="text-3xl font-semibold text-green-900 md:text-4xl">
            {product.name}
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-bold text-gray-900">
            {product.price}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              Features
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Buy Now
            </a>

            <button
              onClick={onBack}
              className="rounded-xl border border-green-200 px-6 py-3 font-medium text-green-900 transition hover:bg-green-50"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[number] | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        .playfair-title {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eaf6ea] via-[#f3fbf4] to-[#ffffff]">
        <VineTopLeft />
        <VineTopRight />
        <VineBottomLeft />
        <VineBottomRight />

        <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <header className="mb-10 flex items-start justify-between gap-4">
            <div>
              <img
                src="/cs-logo.png"
                alt="Canopy Standard logo"
                className="mb-4 w-[220px] md:w-[300px]"
              />

              <p className="text-gray-600 text-sm md:text-base">
                Smart tools for plant care & pest control systems
              </p>

              <p className="mt-2 text-xs text-gray-400">
                Photos via{" "}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-600"
                >
                  Unsplash
                </a>
              </p>
            </div>

            <nav className="hidden gap-6 pt-2 text-sm text-green-900 md:flex">
              <a href="#" className="hover:text-green-600">
                Shop
              </a>
              <a href="#" className="hover:text-green-600">
                Collections
              </a>
              <a href="#" className="hover:text-green-600">
                About
              </a>
            </nav>
          </header>

          {!selectedProduct ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  onView={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          ) : (
            <ProductDetail
              product={selectedProduct}
              onBack={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}