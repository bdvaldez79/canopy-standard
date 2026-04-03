import React, { useState, useEffect } from "react";

type Product = {
  code: string;
  name: string;
  category: string;
  price: number;
  summary: string;
};

const products: Product[] = [
  {
    code: "CS-A01",
    name: "Professional Hose-End Sprayer",
    category: "Irrigation Tools",
    price: 34.99,
    summary: "Reliable sprayer for feeding and maintenance.",
  },
  {
    code: "CS-A02",
    name: "Digital Soil Moisture Meter",
    category: "Monitoring",
    price: 49.99,
    summary: "Helps avoid overwatering and underwatering.",
  },
  {
    code: "CS-A03",
    name: "Heavy-Duty Nursery Cart",
    category: "Workflow Gear",
    price: 129.99,
    summary: "Move plants and tools efficiently.",
  },
];

export default function App() {
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    setSelected(products[0]);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Canopy Standard</h1>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li
            key={p.code}
            onClick={() => setSelected(p)}
            style={{ cursor: "pointer", marginBottom: 10 }}
          >
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>

      {selected && (
        <div style={{ marginTop: 20 }}>
          <h2>{selected.name}</h2>
          <p><strong>Category:</strong> {selected.category}</p>
          <p><strong>Price:</strong> ${selected.price}</p>
          <p>{selected.summary}</p>
        </div>
      )}
    </div>
  );
}