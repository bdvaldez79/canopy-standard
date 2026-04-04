import React from "react";
import { Card, CardContent, Button } from "./ui";

const products = [
  {
    code: "CS-A01",
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and maintenance.",
    price: 34.99,
    kind: "sprayer",
  },
  {
    code: "CS-A02",
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: 49.99,
    kind: "meter",
  },
  {
    code: "CS-A03",
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: 89.99,
    kind: "cart",
  },
];

function ProductArt({ kind }: { kind: string }) {
  if (kind === "sprayer") {
    return (
      <svg viewBox="0 0 600 320" className="w-full h-40 object-cover bg-[#edf7ee]">
        <rect width="600" height="320" fill="#edf7ee" />
        <circle cx="520" cy="70" r="34" fill="#d7f0da" />
        <circle cx="95" cy="255" r="70" fill="#d7f0da" />
        <rect x="120" y="120" width="170" height="36" rx="18" fill="#2f7d32" />
        <rect x="250" y="102" width="110" height="70" rx="18" fill="#4fa84f" />
        <rect x="352" y="117" width="72" height="36" rx="16" fill="#2d2d2d" />
        <rect x="418" y="123" width="48" height="24" rx="10" fill="#f0c94a" />
        <rect x="100" y="145" width="48" height="94" rx="18" transform="rotate(25 100 145)" fill="#3e9140" />
        <rect x="92" y="164" width="16" height="90" rx="8" transform="rotate(25 92 164)" fill="#1f5f28" />
        <path d="M175 147 L218 94 L238 110 L204 156 Z" fill="#f0c94a" />
        <rect x="269" y="174" width="78" height="92" rx="18" fill="#f2c94c" fillOpacity="0.75" stroke="#d0a72f" strokeWidth="4" />
        <rect x="291" y="160" width="34" height="18" rx="8" fill="#d0a72f" />
        <path d="M466 130 C500 118, 535 112, 585 110" stroke="#9ed8ff" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M497 112 C520 100, 550 90, 595 84" stroke="#bde7ff" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="548" cy="98" r="5" fill="#9ed8ff" />
        <circle cx="568" cy="90" r="4" fill="#9ed8ff" />
        <circle cx="586" cy="84" r="3" fill="#9ed8ff" />
      </svg>
    );
  }

  if (kind === "meter") {
    return (
      <svg viewBox="0 0 600 320" className="w-full h-40 object-cover bg-[#eef8ef]">
        <rect width="600" height="320" fill="#eef8ef" />
        <rect y="220" width="600" height="100" fill="#5d4037" />
        <ellipse cx="300" cy="225" rx="170" ry="30" fill="#6d4c41" />
        <ellipse cx="300" cy="230" rx="140" ry="22" fill="#4e342e" />
        <rect x="235" y="60" width="130" height="150" rx="28" fill="#2f8a46" />
        <rect x="262" y="85" width="76" height="48" rx="10" fill="#d9eef7" stroke="#2d3e50" strokeWidth="4" />
        <text x="300" y="118" textAnchor="middle" fontSize="28" fill="#2d3e50" fontFamily="Arial">30</text>
        <circle cx="300" cy="155" r="16" fill="#1f5f28" />
        <rect x="274" y="176" width="20" height="26" rx="8" fill="#1f5f28" />
        <rect x="306" y="176" width="20" height="26" rx="8" fill="#1f5f28" />
        <rect x="282" y="206" width="10" height="110" fill="#b0bec5" />
        <rect x="308" y="206" width="10" height="110" fill="#b0bec5" />
        <circle cx="95" cy="200" r="34" fill="#66bb6a" />
        <circle cx="520" cy="210" r="44" fill="#66bb6a" />
        <rect x="82" y="135" width="20" height="60" fill="#388e3c" />
        <rect x="510" y="138" width="24" height="76" fill="#388e3c" />
        <ellipse cx="150" cy="210" rx="52" ry="26" fill="#7cb342" />
        <ellipse cx="450" cy="220" rx="62" ry="30" fill="#7cb342" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 320" className="w-full h-40 object-cover bg-[#edf7ee]">
      <rect width="600" height="320" fill="#edf7ee" />
      <rect y="250" width="600" height="70" fill="#b7ddb5" />
      <rect x="120" y="125" width="300" height="95" rx="14" fill="#2f7d32" />
      <rect x="138" y="143" width="264" height="58" rx="8" fill="#3f9444" />
      <line x1="138" y1="143" x2="138" y2="201" stroke="#184d1d" strokeWidth="4" />
      <line x1="204" y1="143" x2="204" y2="201" stroke="#184d1d" strokeWidth="4" />
      <line x1="270" y1="143" x2="270" y2="201" stroke="#184d1d" strokeWidth="4" />
      <line x1="336" y1="143" x2="336" y2="201" stroke="#184d1d" strokeWidth="4" />
      <line x1="402" y1="143" x2="402" y2="201" stroke="#184d1d" strokeWidth="4" />
      <rect x="395" y="100" width="45" height="14" rx="7" fill="#2d2d2d" />
      <rect x="418" y="78" width="16" height="28" rx="6" fill="#2d2d2d" />
      <circle cx="175" cy="230" r="34" fill="#1f1f1f" />
      <circle cx="175" cy="230" r="17" fill="#f0c94a" />
      <circle cx="365" cy="230" r="34" fill="#1f1f1f" />
      <circle cx="365" cy="230" r="17" fill="#f0c94a" />
      <circle cx="485" cy="92" r="10" fill="#7bc67e" />
      <circle cx="505" cy="77" r="12" fill="#5dae61" />
      <circle cx="528" cy="94" r="11" fill="#7bc67e" />
      <rect x="470" y="94" width="60" height="40" rx="12" fill="#8bcf8d" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-1">
        Canopy Standard 🌿
      </h1>

      <p className="text-gray-600 mb-6">
        Smart tools for plant care & growing systems
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.code}>
            <ProductArt kind={product.kind} />

            <CardContent>
              <h2 className="text-lg font-semibold text-green-800">
                {product.name}
              </h2>

              <p className="text-xs text-gray-400 uppercase mt-1">
                {product.category}
              </p>

              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>

              <p className="font-bold mt-3">
                ${product.price.toFixed(2)}
              </p>

              <Button className="mt-4">View Product</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}