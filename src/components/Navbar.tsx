import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
          <img src="/images/dp-logo11.jpg" alt="DpTech Logo" className="h-15 w-14" />
          <span className="text-xl font-bold text-white">DpTech Trainings</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-amber-400">Home</a>
            <a href="#courses" className="text-gray-300 hover:text-amber-400">Courses</a>
            <a href="#about" className="text-gray-300 hover:text-amber-400">About</a>
            <a href="#contact" className="text-gray-300 hover:text-amber-400">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-amber-400">Home</a>
            <a href="#courses" className="block px-3 py-2 text-gray-300 hover:text-amber-400">Courses</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-amber-400">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-amber-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
