import React from “react”;
import { Card, CardContent, Button } from “./ui”;

// ── Inline SVG illustrations — no external URLs needed ───────────────────────

function SprayerIllustration() {
return (
<svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="160" fill="#e8f5e9" />
{/* Tank body */}
<rect x="60" y="60" width="50" height="70" rx="8" fill="#81c784" stroke="#388e3c" strokeWidth="2" />
{/* Tank cap */}
<rect x="72" y="50" width="26" height="14" rx="4" fill="#66bb6a" stroke="#388e3c" strokeWidth="2" />
{/* Hose */}
<path d="M110 90 Q140 90 145 75 Q150 60 165 58" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" fill="none" />
{/* Nozzle */}
<rect x="158" y="50" width="20" height="10" rx="3" fill="#2e7d32" />
{/* Water spray dots */}
<circle cx="182" cy="48" r="2" fill="#64b5f6" opacity="0.8" />
<circle cx="186" cy="54" r="1.5" fill="#64b5f6" opacity="0.7" />
<circle cx="183" cy="59" r="1.5" fill="#64b5f6" opacity="0.6" />
<circle cx="188" cy="44" r="1" fill="#64b5f6" opacity="0.5" />
<circle cx="190" cy="50" r="1" fill="#64b5f6" opacity="0.5" />
{/* Handle */}
<path d="M60 80 Q45 80 45 95 Q45 110 60 110" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" fill="none" />
{/* Label stripe */}
<rect x="63" y="80" width="44" height="16" rx="3" fill="#a5d6a7" />
<line x1="68" y1="86" x2="102" y2="86" stroke="#388e3c" strokeWidth="1.5" strokeLinecap="round" />
<line x1="68" y1="91" x2="95" y2="91" stroke="#388e3c" strokeWidth="1.5" strokeLinecap="round" />
</svg>
);
}

function MoistureMeterIllustration() {
return (
<svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="160" fill="#e8f5e9" />
{/* Probe stick */}
<rect x="93" y="85" width="14" height="60" rx="4" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
{/* Probe tip */}
<polygon points="100,148 94,158 106,158" fill="#5d4037" />
{/* Device body */}
<rect x="65" y="30" width="70" height="62" rx="10" fill="#f5f5f5" stroke="#bdbdbd" strokeWidth="2" />
{/* Screen */}
<rect x="73" y="38" width="54" height="34" rx="5" fill="#c8e6c9" stroke="#81c784" strokeWidth="1.5" />
{/* Gauge arc */}
<path d="M85 65 A15 15 0 0 1 115 65" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" fill="none" />
<path d="M85 65 A15 15 0 0 1 108 57" stroke="#43a047" strokeWidth="4" strokeLinecap="round" fill="none" />
{/* Needle */}
<line x1="100" y1="65" x2="108" y2="54" stroke="#e53935" strokeWidth="2" strokeLinecap="round" />
<circle cx="100" cy="65" r="3" fill="#424242" />
{/* % label */}
<text x="100" y="78" textAnchor="middle" fontSize="7" fill="#2e7d32" fontFamily="monospace">68%</text>
{/* Buttons */}
<rect x="73" y="78" width="14" height="8" rx="3" fill="#a5d6a7" stroke="#66bb6a" strokeWidth="1" />
<rect x="91" y="78" width="14" height="8" rx="3" fill="#a5d6a7" stroke="#66bb6a" strokeWidth="1" />
<rect x="109" y="78" width="14" height="8" rx="3" fill="#a5d6a7" stroke="#66bb6a" strokeWidth="1" />
{/* Soil mound */}
<ellipse cx="100" cy="148" rx="40" ry="8" fill="#8d6e63" opacity="0.3" />
</svg>
);
}

function NurseryCartIllustration() {
return (
<svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="160" fill="#e8f5e9" />
{/* Cart bed */}
<rect x="30" y="70" width="130" height="45" rx="6" fill="#a5d6a7" stroke="#388e3c" strokeWidth="2" />
{/* Cart sides */}
<rect x="30" y="60" width="6" height="55" rx="3" fill="#81c784" stroke="#388e3c" strokeWidth="1.5" />
<rect x="154" y="60" width="6" height="55" rx="3" fill="#81c784" stroke="#388e3c" strokeWidth="1.5" />
{/* Handle */}
<path d="M156 72 Q175 72 175 55 Q175 40 160 40 L140 40" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" fill="none" />
{/* Wheels */}
<circle cx="55" cy="125" r="14" fill="#616161" stroke="#424242" strokeWidth="2" />
<circle cx="55" cy="125" r="6" fill="#9e9e9e" />
<circle cx="135" cy="125" r="14" fill="#616161" stroke="#424242" strokeWidth="2" />
<circle cx="135" cy="125" r="6" fill="#9e9e9e" />
{/* Axle */}
<line x1="55" y1="115" x2="135" y2="115" stroke="#616161" strokeWidth="3" />
{/* Plant pot 1 */}
<rect x="48" y="48" width="28" height="24" rx="3" fill="#ef9a9a" stroke="#e57373" strokeWidth="1.5" />
<path d="M48 50 L52 72 L72 72 L76 50Z" fill="#e57373" opacity="0.3" />
{/* Plant leaves 1 */}
<ellipse cx="62" cy="42" rx="10" ry="7" fill="#66bb6a" transform="rotate(-20 62 42)" />
<ellipse cx="62" cy="42" rx="10" ry="7" fill="#81c784" transform="rotate(20 62 42)" />
<line x1="62" y1="48" x2="62" y2="36" stroke="#388e3c" strokeWidth="1.5" />
{/* Plant pot 2 */}
<rect x="98" y="45" width="32" height="27" rx="3" fill="#ffcc80" stroke="#ffa726" strokeWidth="1.5" />
{/* Plant leaves 2 */}
<ellipse cx="114" cy="36" rx="12" ry="8" fill="#388e3c" transform="rotate(-15 114 36)" />
<ellipse cx="114" cy="36" rx="12" ry="8" fill="#43a047" transform="rotate(15 114 36)" />
<ellipse cx="114" cy="36" rx="8" ry="12" fill="#4caf50" />
<line x1="114" y1="45" x2="114" y2="30" stroke="#2e7d32" strokeWidth="1.5" />
</svg>
);
}

// ── Product data ─────────────────────────────────────────────────────────────

const products = [
{
code: “CS-A01”,
name: “Professional Hose-End Sprayer”,
category: “IRRIGATION”,
description: “Reliable sprayer for plant feeding and maintenance.”,
price: 34.99,
Illustration: SprayerIllustration,
},
{
code: “CS-A02”,
name: “Digital Soil Moisture Meter”,
category: “MONITORING”,
description: “Helps prevent overwatering and underwatering.”,
price: 49.99,
Illustration: MoistureMeterIllustration,
},
{
code: “CS-A03”,
name: “Heavy-Duty Nursery Cart”,
category: “WORKFLOW GEAR”,
description: “Move plants and tools easily.”,
price: 89.99,
Illustration: NurseryCartIllustration,
},
];

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
return (
<div className="min-h-screen bg-green-50 p-8">
<h1 className="text-3xl font-bold text-green-800 mb-1">
Canopy Standard 🌿
</h1>

```
  <p className="text-gray-600 mb-6">
    Smart tools for plant care & growing systems
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <Card key={product.code}>
        {/* SVG illustration — no external URL needed */}
        <div className="w-full h-40">
          <product.Illustration />
        </div>

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

          <p className="font-bold mt-3">${product.price.toFixed(2)}</p>

          <Button className="mt-4">View Product</Button>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
```

);
}