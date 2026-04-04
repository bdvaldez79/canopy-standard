import React from "react";
import { Card, CardContent, Button } from "./ui";

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and pest control.",
    price: "$34.99",
    image:
      "https://cdn.shopify.com/s/files/1/0310/3902/9386/files/220-10_foVD.jpg?v=1726194745897",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: "$49.99",
    image: "/soil-moisture-meter.jpg", // KEEP YOUR IMAGE
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3fbf4] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          Canopy Standard 🌿
        </h1>

        <p className="text-gray-600 mb-8">
          Smart tools for plant care & pest control systems
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.name} className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover"
              />

              <CardContent>
                <h2 className="text-lg font-semibold text-green-900">
                  {p.name}
                </h2>

                <p className="text-xs text-gray-400 mt-1 uppercase">
                  {p.category}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {p.description}
                </p>

                <p className="text-lg font-bold mt-3">
                  {p.price}
                </p>

                <Button className="mt-4 w-full">
                  View Product
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}