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
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 p-10">
      
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-800 flex items-center gap-2">
          Canopy Standard 🌿
        </h1>
        <p className="text-gray-500 mt-2">
          Smart tools for plant care & growing systems
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <Card
            key={index}
            className="p-5 hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="flex flex-col gap-3">
              
              <h2 className="text-xl font-semibold text-green-700">
                {product.name}
              </h2>

              <p className="text-xs uppercase text-gray-400 tracking-wide">
                {product.category}
              </p>

              <p className="text-gray-600">
                {product.description}
              </p>

              <p className="font-bold text-lg text-green-900 mt-2">
                ${product.price}
              </p>

              <Button className="mt-4 w-full">
                View Product
              </Button>

            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}