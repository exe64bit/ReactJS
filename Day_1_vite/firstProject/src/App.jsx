import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";

function App() {
  let [products, productsReRender] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      price: 599,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches.",
      price: 2499,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 3,
      name: "USB-C Cable",
      description: "Durable fast-charging USB-C cable.",
      price: 299,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    },
    {
      id: 4,
      name: "Laptop Stand",
      description: "Adjustable aluminum stand for laptops.",
      price: 1299,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful stereo sound.",
      price: 1799,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 6,
      name: "Webcam",
      description: "1080p webcam suitable for video calls and streaming.",
      price: 1999,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    },
    {
      id: 7,
      name: "Headphones",
      description: "Over-ear headphones with noise isolation.",
      price: 2299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 8,
      name: "Power Bank",
      description: "10000mAh portable power bank with fast charging.",
      price: 999,
      image: "https://images.unsplash.com/photo-1609592424962-1c2f6a5e1f5e",
    },
    {
      id: 9,
      name: "Smart Watch",
      description: "Smart watch with fitness tracking and notifications.",
      price: 3499,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 10,
      name: "Phone Case",
      description: "Shockproof protective case for smartphones.",
      price: 399,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    },
    {
      id: 11,
      name: "Desk Lamp",
      description: "LED desk lamp with adjustable brightness.",
      price: 799,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    },
    {
      id: 12,
      name: "Backpack",
      description: "Water-resistant backpack with laptop compartment.",
      price: 1599,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 13,
      name: "USB Hub",
      description: "Multi-port USB hub with USB 3.0 support.",
      price: 899,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    },
    {
      id: 14,
      name: "Gaming Mouse Pad",
      description: "Large smooth mouse pad designed for gaming.",
      price: 699,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    },
    {
      id: 15,
      name: "SSD 500GB",
      description: "Fast 500GB solid-state drive for computers.",
      price: 3299,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
    },
    {
      id: 16,
      name: "Wi-Fi Router",
      description: "Dual-band wireless router for home networks.",
      price: 1899,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2",
    },
    {
      id: 17,
      name: "Smartphone Tripod",
      description: "Adjustable tripod stand for smartphones and cameras.",
      price: 749,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 18,
      name: "Bluetooth Earbuds",
      description: "True wireless earbuds with charging case.",
      price: 1599,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    },
    {
      id: 19,
      name: "HDMI Cable",
      description: "High-speed HDMI cable supporting 4K video.",
      price: 449,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    },
    {
      id: 20,
      name: "Monitor",
      description: "24-inch Full HD monitor for work and entertainment.",
      price: 8999,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    },
  ]);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
