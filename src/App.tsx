import { Card, CardContent } from "./ui";

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "Irrigation",
    price: 34.99,
    description: "Reliable sprayer for plant feeding and maintenance.",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "Monitoring",
    price: 49.99,
    description: "Helps prevent overwatering and underwatering.",
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "Workflow Gear",
    price: 89.99,
    description: "Move plants and tools easily.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Canopy Standard 🌿
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-green-700">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="mt-2 text-gray-800">{product.description}</p>
              <p className="mt-3 font-bold text-green-900">
                ${product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}