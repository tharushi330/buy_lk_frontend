import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-6 py-4">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        LOGO
      </Link>

      {/* Menu */}
      <div className="flex gap-6 items-center">

        {/* Home */}
        <Link to="/" className="hover:text-yellow-500">
          Home
        </Link>

        {/* Categories */}
        <select className="bg-black text-white">
          <option>Categories</option>
          <option>Birthdays</option>
          <option>Valentine's Day</option>
          <option>Anniversaries</option>
          <option>New Year</option>
          <option>Christmas</option>
          <option>Mother's Day</option>
        </select>

        {/* Men */}
        <Link to="/men" className="hover:text-yellow-500">
          Men
        </Link>

        {/* Women */}
        <p className="cursor-pointer">Women</p>

        {/* Contact */}
        <Link to="/contact" className="hover:text-yellow-500">
          Contact
        </Link>

        {/* About */}
        <p className="cursor-pointer">About Us</p>
      </div>

      {/* Search + Cart */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-800 rounded w-64"
        />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </div>
  );
}