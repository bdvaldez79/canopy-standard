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
      <svg viewBox="0 0 600 320" className="w-full h-44 bg-[#edf7ee]">
        <rect width="600" height="320" fill="#edf7ee" />
        <rect x="120" y="140" width="200" height="30" rx="15" fill="#2f7d32" />
        <rect x="300" y="120" width="100" height="70" rx="15" fill="#4caf50" />
        <rect x="390" y="135" width="70" height="30" rx="15" fill="#2b2b2b" />
        <rect x="450" y="140" width="40" height="20" rx="8" fill="#f4c542" />
        <rect x="260" y="180" width="70" height="90" rx="15" fill="#f4c542" opacity="0.7" />
        <path d="M490 150 Q540 140 580 130" stroke="#7ec8ff" strokeWidth="6" fill="none" />
      </svg>
    );
  }

  if (kind === "meter") {
    return (
      <svg viewBox="0 0 600 320" className="w-full h-44 bg-[#eef8ef]">
        <rect width="600" height="320" fill="#eef8ef" />
        <rect y="220" width="600" height="100" fill="#6d4c41" />
        <rect x="250" y="80" width="100" height="140" rx="20" fill="#2f8a46" />
        <rect x="270" y="100" width="60" height="40" rx="8" fill="#e3f2fd" />
        <text x="300" y="130" textAnchor="middle" fontSize="20" fill="#000">30</text>
        <rect x="290" y="220" width="8" height="100" fill="#999" />
        <rect x="310" y="220" width="8" height="100" fill="#999" />
      </svg>
    );
  }

  // ✅ FIXED CART (THIS IS WHAT YOU WANTED)
  return (
    <svg viewBox="0 0 600 320" className="w-full h-44 bg-[#edf7ee]">
      <rect width="600" height="320" fill="#edf7ee" />

      {/* ground */}
      <rect x="0" y="250" width="600" height="70" fill="#c8e6c5" />

      {/* cart body */}
      <rect x="150" y="150" width="300" height="80" rx="12" fill="#2f7d32" />

      {/* panels */}
      <line x1="200" y1="150" x2="200" y2="230" stroke="#1b5e20" strokeWidth="3" />
      <line x1="250" y1="150" x2="250" y2="230" stroke="#1b5e20" strokeWidth="3" />
      <line x1="300" y1="150" x2="300" y2="230" stroke="#1b5e20" strokeWidth="3" />
      <line x1="350" y1="150" x2="350" y2="230" stroke="#1b5e20" strokeWidth="3" />

      {/* handle */}
      <rect x="450" y="135" width="60" height="10" rx="5" fill="#333" />
      <rect x="500" y="110" width="10" height="30" rx="5" fill="#333" />

      {/* wheels */}
      <circle cx="220" cy="250" r="28" fill="#1a1a1a" />
      <circle cx="220" cy="250" r="12" fill="#f4c542" />

      <circle cx="380" cy="250" r="28" fill="#1a1a1a" />
      <circle cx="380" cy="250" r="12" fill="#f4c542" />

      {/* shadow */}
      <ellipse cx="300" cy="275" rx="180" ry="15" fill="#b7d7b5" opacity="0.4" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3fbf4] to-white p-10">
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Canopy Standard 🌿
      </h1>
      <p className="text-gray-600 mb-8">
        Smart tools for plant care & growing systems
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Card key={i}>
            <ProductArt kind={p.kind} />

            <CardContent>
              <h2 className="text-lg font-semibold text-green-800">
                {p.name}
              </h2>

              <p className="text-xs text-gray-400 mb-1">{p.category}</p>

              <p className="text-gray-600 text-sm mb-3">
                {p.description}
              </p>

              <p className="font-bold mb-4">{p.price}</p>

              <Button>View Product</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}