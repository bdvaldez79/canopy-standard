import React from "react";
import { Card, CardContent, Button } from "./ui";

const products = [
  {
    code: "CS-A01",
    name: "Professional Hose-End Sprayer",
    category: "IRRIGATION",
    description: "Reliable sprayer for plant feeding and maintenance.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    code: "CS-A02",
    name: "Digital Soil Moisture Meter",
    category: "MONITORING",
    description: "Helps prevent overwatering and underwatering.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    code: "CS-A03",
    name: "Heavy-Duty Nursery Cart",
    category: "WORKFLOW GEAR",
    description: "Move plants and tools easily.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0",
  },
];

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
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />

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