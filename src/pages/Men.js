import Navbar from "../components/Navbar";
import MenSlider from "../components/MenSlider";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import products from "../data/products";

export default function Men() {
  // only mens items
  const mensProducts = products.filter((p) => p.category === "men");

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Slider */}
      <MenSlider />

      {/* Title */}
      <h1 className="text-3xl text-center text-yellow-500 my-8">
        Men's Collection
      </h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {mensProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <Footer />
      <WhatsApp />
    </div>
  );
}