// components/ProductCard.js
export default function ProductCard({ item }) {
  return (
    <div className="bg-black text-white p-4 rounded">
      <img src={item.image} alt="" className="w-full h-48 object-cover" />

      <p>{item.code}</p>
      <h2 className="font-bold">{item.name}</h2>
      <p className="text-sm">{item.desc}</p>
      <p className="text-yellow-500 font-bold">${item.price}</p>

      <button className="bg-yellow-500 text-black w-full mt-2 py-1">
        Add to Cart
      </button>
    </div>
  );
}