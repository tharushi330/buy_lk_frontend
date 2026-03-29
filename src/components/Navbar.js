// components/Navbar.js
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-6 py-4">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">LOGO</h1>

      {/* Menu */}
      <div className="flex gap-6">
        <select className="bg-black">
          <option>Categories</option>
          <option>Watches</option>
          <option>Handbags</option>
        </select>
        <p>Men</p>
        <p>Women</p>
        <p>Contact</p>
        <p>About Us</p>
      </div>

      {/* Search + Cart */}
      <div className="flex items-center gap-4">
        <input
          className="px-4 py-2 bg-gray-800 rounded w-64"
          placeholder="Search..."
        />
        <FaShoppingCart />
      </div>
    </div>
  );
}