import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import Slider from "../components/Slider";
import products from "../data/products";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <Hero />
      <Slider />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 ${
            filter === "all"
              ? "bg-yellow-500 text-black"
              : "bg-gray-300 text-black"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("women")}
          className={`px-6 py-2 ${
            filter === "women"
              ? "bg-yellow-500 text-black"
              : "bg-gray-300 text-black"
          }`}
        >
          Womens
        </button>

        <button
          onClick={() => setFilter("men")}
          className={`px-6 py-2 ${
            filter === "men"
              ? "bg-yellow-500 text-black"
              : "bg-gray-300 text-black"
          }`}
        >
          Mens
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <Footer />
      <WhatsApp />
    </>
  );
}