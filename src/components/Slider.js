import { useEffect, useState } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual arrows
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">

      {/* Image */}
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-white text-3xl"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 text-white text-3xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-yellow-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/947XXXXXXXX"
        className="absolute right-5 top-1/2 bg-green-500 text-white p-4 rounded-full"
      >
        WA
      </a>

    </div>
  );
}