import React, { useState } from "react";

const UNSPLASH_IMAGES = {
  "Professional Hose-End Sprayer":
    "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=600&q=80&auto=format&fit=crop",

  "Digital Soil Moisture Meter":
    "https://plus.unsplash.com/premium_photo-1661902899911-d7b89906e638?w=600&q=80&auto=format&fit=crop",

  "Heavy-Duty Nursery Cart":
    "https://plus.unsplash.com/premium_photo-1663012834491-6ba79afac048?w=600&q=80&auto=format&fit=crop",
} as const;

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and pest control.",
    price: "$34.99",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: "$49.99",
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: "$89.99",
  },
] as const;

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const imgUrl = UNSPLASH_IMAGES[product.name];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 flex flex-col">
      <div className="relative w-full h-48 bg-green-50">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
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
            className={`w-full h-48 object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-green-900">
          {product.name}
        </h2>

        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
          {product.category}
        </p>

        <p className="text-sm text-gray-600 mt-2 flex-1">
          {product.description}
        </p>

        <p className="text-lg font-bold mt-3">{product.price}</p>

        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-medium">
          View Product
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3fbf4] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          Canopy Standard 🌿
        </h1>

        <p className="text-gray-600 mb-2">
          Smart tools for plant care & pest control systems
        </p>

        <p className="text-xs text-gray-400 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}