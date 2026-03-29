import { useEffect, useState } from "react";

const images = [
  "/images/men1.jpg",
  "/images/men2.jpg",
  "/images/men3.jpg",
  "/images/men4.jpg",
  "/images/men5.jpg",
];

export default function MenSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">

      <img
        src={images[current]}
        alt="men slider"
        className="w-full h-full object-cover"
      />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 text-white text-3xl"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 text-white text-3xl"
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

    </div>
  );
}