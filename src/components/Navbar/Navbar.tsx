import { useState } from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between">

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <img src={logo} alt="Dev Stack" className="w-24" />

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="text-pink-500">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-700">
              Sign In
            </button>

            <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>

        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 pt-4 pb-2 text-sm text-gray-600">
            <a href="#" className="text-pink-500">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;