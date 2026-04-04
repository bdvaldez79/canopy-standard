import { Card, CardContent, Button } from "./ui";

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Canopy Standard 🌿
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-green-700">
                  {product.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <p className="text-gray-700">
                  {product.description}
                </p>

                <p className="font-bold text-green-900 mt-2">
                  ${product.price}
                </p>

                <Button className="mt-3">
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