import React, { useState } from “react”;

const IMAGES = {
“Professional Hose-End Sprayer”:
“https://images.unsplash.com/photo-1610891170442-79392fc76493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D”,
“Digital Soil Moisture Meter”:
“https://plus.unsplash.com/premium_photo-1661902899911-d7b89906e638?w=1200&q=80&auto=format&fit=crop”,
“Heavy-Duty Nursery Cart”:
“https://plus.unsplash.com/premium_photo-1663012834491-6ba79afac048?w=1200&q=80&auto=format&fit=crop”,
} as const;

const products = [
{
name: “Professional Hose-End Sprayer”,
category: “IRRIGATION”,
description: “Reliable sprayer for plant feeding and pest control.”,
price: “$34.99”,
features: [
“Great for liquid fertilizer and treatment application”,
“Simple hose attachment setup”,
“Good coverage for garden beds and outdoor plants”,
],
buyUrl: “https://www.amazon.com/”,
},
{
name: “Digital Soil Moisture Meter”,
category: “MONITORING”,
description: “Helps prevent overwatering and underwatering.”,
price: “$49.99”,
features: [
“Fast moisture readings at the root zone”,
“Reduces watering guesswork”,
“Useful for collectors and indoor plant care”,
],
buyUrl: “https://www.amazon.com/”,
},
{
name: “Heavy-Duty Nursery Cart”,
category: “WORKFLOW GEAR”,
description: “Move plants and tools easily.”,
price: “$89.99”,
features: [
“Helps move pots, trays, and supplies”,
“Good for patios, greenhouses, and garden work”,
“Makes plant workflow easier and faster”,
],
buyUrl: “https://www.amazon.com/”,
},
] as const;

// ─── Inline CS Logo (No. 6 style) ─────────────────────────────────────────
function CanopyLogo({ className = “” }: { className?: string }) {
return (
<div className={`flex flex-col items-start select-none ${className}`}>
<div style={{ fontFamily: “‘Cormorant Garamond’, serif”, fontSize: “72px”, fontWeight: 300, lineHeight: 1, color: “#2a231c”, letterSpacing: “-0.01em”, position: “relative”, display: “inline-block” }}>
CS
{/* Decorative rule with diamond */}
<div style={{ position: “absolute”, bottom: “-6px”, left: 0, right: 0, display: “flex”, alignItems: “center”, gap: 0 }}>
<div style={{ flex: 1, height: “1px”, background: “#2a231c” }} />
<div style={{ width: “6px”, height: “6px”, background: “#2a231c”, transform: “rotate(45deg)”, margin: “0 6px”, flexShrink: 0 }} />
<div style={{ flex: 1, height: “1px”, background: “#2a231c” }} />
</div>
</div>
<div style={{ marginTop: “14px” }}>
<div style={{ fontFamily: “‘Josefin Sans’, sans-serif”, fontSize: “13px”, fontWeight: 600, letterSpacing: “0.28em”, textTransform: “uppercase”, color: “#2a231c” }}>
Canopy Standard
</div>
<div style={{ fontFamily: “‘Josefin Sans’, sans-serif”, fontSize: “9px”, fontWeight: 300, letterSpacing: “0.22em”, textTransform: “uppercase”, color: “#8a9e7a”, marginTop: “3px” }}>
Refined Essentials
</div>
</div>
</div>
);
}

// ─── Elegant Botanical Vine — Top Left ────────────────────────────────────
function VineTopLeft() {
return (
<svg
viewBox=“0 0 340 300”
className=“pointer-events-none absolute left-0 top-0 w-[200px] md:w-[280px]”
aria-hidden=“true”
style={{ opacity: 0.55 }}
>
{/* Main stem */}
<path d="M-10 0 C 20 40, 30 90, 20 140 C 12 185, 30 230, 60 270" fill="none" stroke="#5a7a4a" strokeWidth="1.5" strokeLinecap="round"/>
{/* Secondary stem */}
<path d="M50 0 C 70 30, 75 70, 65 110 C 55 150, 70 190, 100 230" fill="none" stroke="#7aaa60" strokeWidth="1" strokeLinecap="round"/>

```
  {/* Leaf cluster 1 */}
  <g transform="translate(18, 48) rotate(-30)">
    <path d="M0,0 C-10,-18, -24,-22, -14,-8 C-6,2, 0,0 0,0Z" fill="#5d8c48" />
    <path d="M0,0 C10,-16, 22,-18, 14,-6 C6,2, 0,0 0,0Z" fill="#7ab560" />
    <line x1="0" y1="0" x2="-8" y2="-14" stroke="#4a7038" strokeWidth="0.5" />
  </g>

  {/* Leaf cluster 2 */}
  <g transform="translate(22, 100) rotate(20)">
    <path d="M0,0 C-12,-20, -28,-24, -16,-8 C-6,4, 0,0 0,0Z" fill="#6aaa52" />
    <path d="M0,0 C8,-18, 20,-20, 12,-7 C4,3, 0,0 0,0Z" fill="#4e8040" />
    <line x1="0" y1="0" x2="-10" y2="-16" stroke="#3d6630" strokeWidth="0.5" />
  </g>

  {/* Leaf cluster 3 */}
  <g transform="translate(14, 155) rotate(-20)">
    <path d="M0,0 C-14,-22, -30,-26, -18,-9 C-7,5, 0,0 0,0Z" fill="#5d8c48" />
    <path d="M0,0 C10,-20, 26,-22, 16,-8 C6,4, 0,0 0,0Z" fill="#86c46c" />
  </g>

  {/* Leaf cluster 4 */}
  <g transform="translate(62, 80) rotate(10)">
    <path d="M0,0 C-10,-16, -22,-18, -13,-6 C-5,3, 0,0 0,0Z" fill="#7ab560" />
    <path d="M0,0 C8,-14, 18,-16, 11,-5 C4,3, 0,0 0,0Z" fill="#5d8c48" />
  </g>

  {/* Leaf cluster 5 */}
  <g transform="translate(68, 140) rotate(-15)">
    <path d="M0,0 C-12,-20, -26,-22, -15,-7 C-5,4, 0,0 0,0Z" fill="#6aaa52" />
    <path d="M0,0 C10,-18, 22,-20, 13,-7 C4,3, 0,0 0,0Z" fill="#4e8040" />
  </g>

  {/* Small tendrils */}
  <path d="M20,70 C 28,62, 36,66, 32,74" fill="none" stroke="#7aaa60" strokeWidth="0.8" strokeLinecap="round"/>
  <path d="M16,130 C 8,122, 4,126, 8,134" fill="none" stroke="#5a7a4a" strokeWidth="0.8" strokeLinecap="round"/>
</svg>
```

);
}

// ─── Elegant Botanical Vine — Top Right ───────────────────────────────────
function VineTopRight() {
return (
<svg
viewBox=“0 0 340 300”
className=“pointer-events-none absolute right-0 top-0 w-[200px] md:w-[280px]”
aria-hidden=“true”
style={{ opacity: 0.55 }}
>
{/* Main stem (mirrored) */}
<path d="M350 0 C 320 40, 310 90, 320 140 C 328 185, 310 230, 280 270" fill="none" stroke="#5a7a4a" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M290 0 C 270 30, 265 70, 275 110 C 285 150, 270 190, 240 230" fill="none" stroke="#7aaa60" strokeWidth="1" strokeLinecap="round"/>

```
  <g transform="translate(322, 48) rotate(30)">
    <path d="M0,0 C10,-18, 24,-22, 14,-8 C6,2, 0,0 0,0Z" fill="#5d8c48" />
    <path d="M0,0 C-10,-16, -22,-18, -14,-6 C-6,2, 0,0 0,0Z" fill="#7ab560" />
  </g>

  <g transform="translate(318, 100) rotate(-20)">
    <path d="M0,0 C12,-20, 28,-24, 16,-8 C6,4, 0,0 0,0Z" fill="#6aaa52" />
    <path d="M0,0 C-8,-18, -20,-20, -12,-7 C-4,3, 0,0 0,0Z" fill="#4e8040" />
  </g>

  <g transform="translate(326, 155) rotate(20)">
    <path d="M0,0 C14,-22, 30,-26, 18,-9 C7,5, 0,0 0,0Z" fill="#5d8c48" />
    <path d="M0,0 C-10,-20, -26,-22, -16,-8 C-6,4, 0,0 0,0Z" fill="#86c46c" />
  </g>

  <g transform="translate(278, 80) rotate(-10)">
    <path d="M0,0 C10,-16, 22,-18, 13,-6 C5,3, 0,0 0,0Z" fill="#7ab560" />
    <path d="M0,0 C-8,-14, -18,-16, -11,-5 C-4,3, 0,0 0,0Z" fill="#5d8c48" />
  </g>

  <g transform="translate(272, 140) rotate(15)">
    <path d="M0,0 C12,-20, 26,-22, 15,-7 C5,4, 0,0 0,0Z" fill="#6aaa52" />
    <path d="M0,0 C-10,-18, -22,-20, -13,-7 C-4,3, 0,0 0,0Z" fill="#4e8040" />
  </g>

  <path d="M320,70 C 312,62, 304,66, 308,74" fill="none" stroke="#7aaa60" strokeWidth="0.8" strokeLinecap="round"/>
  <path d="M324,130 C 332,122, 336,126, 332,134" fill="none" stroke="#5a7a4a" strokeWidth="0.8" strokeLinecap="round"/>
</svg>
```

);
}

// ─── Product Card ──────────────────────────────────────────────────────────
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
<div
className=“flex flex-col overflow-hidden bg-white border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1”
style={{ borderRadius: “2px” }}
>
<div className="relative h-52 w-full bg-stone-50 overflow-hidden">
{!imgLoaded && !imgError && (
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-6 w-6 animate-spin rounded-full border-2 border-stone-200 border-t-stone-500" />
</div>
)}
{imgError ? (
<div className="absolute inset-0 flex items-center justify-center text-xs text-stone-400 tracking-widest uppercase">
Unavailable
</div>
) : (
<img
src={imgUrl}
alt={product.name}
className={`h-full w-full object-cover transition-all duration-700 hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
onLoad={() => setImgLoaded(true)}
onError={() => setImgError(true)}
/>
)}
</div>

```
  <div className="flex flex-1 flex-col p-6">
    <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a9e7a", marginBottom: "8px" }}>
      {product.category}
    </p>
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "#2a231c", lineHeight: 1.2, marginBottom: "10px" }}>
      {product.name}
    </h2>
    <p className="flex-1 text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>
      {product.description}
    </p>

    <div className="mt-5 flex items-center justify-between">
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: "#2a231c" }}>
        {product.price}
      </span>
      <button
        onClick={onView}
        className="transition-colors duration-200"
        style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: "#3d5c30", padding: "10px 20px", border: "none", cursor: "pointer" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#2a3f20")}
        onMouseLeave={e => (e.currentTarget.style.background = "#3d5c30")}
      >
        View
      </button>
    </div>
  </div>
</div>
```

);
}

// ─── Product Detail ────────────────────────────────────────────────────────
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
<div className=“bg-white border border-stone-100 shadow-sm p-8 md:p-12” style={{ borderRadius: “2px” }}>
<button
onClick={onBack}
className=“mb-10 flex items-center gap-2 transition-colors”
style={{ fontFamily: “‘Josefin Sans’, sans-serif”, fontSize: “10px”, fontWeight: 600, letterSpacing: “0.2em”, textTransform: “uppercase”, color: “#5a7a4a”, background: “none”, border: “none”, cursor: “pointer” }}
>
← Back to products
</button>

```
  <div className="grid gap-12 md:grid-cols-2">
    <div className="overflow-hidden bg-stone-50" style={{ borderRadius: "2px" }}>
      <div className="relative h-[300px] md:h-[440px]">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-500" />
          </div>
        )}
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-400 tracking-widest uppercase">
            Unavailable
          </div>
        ) : (
          <img
            src={imgUrl}
            alt={product.name}
            className={`h-full w-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>

    <div className="flex flex-col justify-center">
      <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8a9e7a", marginBottom: "12px" }}>
        {product.category}
      </p>

      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 400, color: "#2a231c", lineHeight: 1.1, marginBottom: "16px" }}>
        {product.name}
      </h2>

      {/* Decorative rule */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: "20px" }}>
        <div style={{ width: "40px", height: "1px", background: "#c8b89a" }} />
        <div style={{ width: "4px", height: "4px", background: "#c8b89a", transform: "rotate(45deg)", margin: "0 6px" }} />
        <div style={{ flex: 1, height: "1px", background: "#e8e0d4" }} />
      </div>

      <p className="text-sm leading-7 text-stone-500 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>
        {product.description}
      </p>

      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 600, color: "#2a231c", marginBottom: "24px" }}>
        {product.price}
      </p>

      <div className="mb-8">
        <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a9e7a", marginBottom: "14px" }}>
          Features
        </p>
        <ul className="space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-stone-600" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>
              <span style={{ display: "inline-block", width: "4px", height: "4px", background: "#5a7a4a", transform: "rotate(45deg)", marginTop: "7px", flexShrink: 0 }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href={product.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: "#3d5c30", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#2a3f20")}
          onMouseLeave={e => (e.currentTarget.style.background = "#3d5c30")}
        >
          Buy Now
        </a>
        <button
          onClick={onBack}
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d5c30", background: "none", border: "1px solid #c8d8b8", padding: "14px 28px", cursor: "pointer", transition: "background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#f4f8f0")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}
        >
          Back
        </button>
      </div>
    </div>
  </div>
</div>
```

);
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
const [selectedProduct, setSelectedProduct] =
useState<(typeof products)[number] | null>(null);

return (
<>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;600&display=swap'); * { box-sizing: border-box; } body { margin: 0; background: #f7f4ef; }`}</style>

```
  <div className="relative min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(160deg, #f2ede5 0%, #f7f4ef 50%, #eef3ec 100%)" }}>

    <VineTopLeft />
    <VineTopRight />

    {/* Subtle grain texture overlay */}
    <div className="pointer-events-none fixed inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.4 }} />

    <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">

      {/* Header */}
      <header className="mb-14 flex items-start justify-between gap-6">
        <CanopyLogo />

        <nav className="hidden md:flex gap-8 pt-2">
          {["Shop", "Collections", "About"].map((item) => (
            <a
              key={item}
              href="#"
              style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4a3d30", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#3d5c30")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a3d30")}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Section heading */}
      {!selectedProduct && (
        <div className="mb-10">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontWeight: 300, letterSpacing: "0.15em", color: "#8a9e7a", textTransform: "uppercase", marginBottom: "6px" }}>
            Our Collection
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 400, color: "#2a231c", lineHeight: 1.2 }}>
            Smart tools for plant care<br />& pest control systems
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "16px" }}>
            <div style={{ width: "48px", height: "1px", background: "#c8b89a" }} />
            <div style={{ width: "4px", height: "4px", background: "#c8b89a", transform: "rotate(45deg)", margin: "0 6px" }} />
          </div>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", fontWeight: 300, letterSpacing: "0.1em", color: "#aaa", marginTop: "10px" }}>
            Photos via{" "}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: "#8a9e7a", textDecoration: "none" }}>
              Unsplash
            </a>
          </p>
        </div>
      )}

      {/* Content */}
      {!selectedProduct ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {/* Footer */}
      <footer className="mt-20 flex items-center justify-between border-t border-stone-200 pt-8">
        <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb" }}>
          © 2024 Canopy Standard
        </p>
        <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb" }}>
          Refined Essentials
        </p>
      </footer>

    </div>
  </div>
</>
```

);
}