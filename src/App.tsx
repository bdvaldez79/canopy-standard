import { Card, CardContent, Button } from "./ui";

const products = [
  {
    name: "Professional Hose-End Sprayer",
    category: "Irrigation",
    price: 34.99,
    description: "Reliable sprayer for plant feeding and maintenance.",
    image: "https://images.unsplash.com/photo-1598514982846-1cf5a6e6c0d3?q=80&w=800",
  },
  {
    name: "Digital Soil Moisture Meter",
    category: "Monitoring",
    price: 49.99,
    description: "Helps prevent overwatering and underwatering.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800",
  },
  {
    name: "Heavy-Duty Nursery Cart",
    category: "Workflow Gear",
    price: 89.99,
    description: "Move plants and tools easily.",
    image: "https://images.unsplash.com/photo-1616627981565-7c0b2c5f8d9f?q=80&w=800",
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

      {/* PRODUCTS */}
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />

            <CardContent className="p-5 flex flex-col gap-3">
              
              <h2 className="text-xl font-semibold text-green-700">
                {product.name}
              </h2>

              <p className="text-xs uppercase text-gray-400">
                {product.category}
              </p>

              <p className="text-gray-600 text-sm">
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