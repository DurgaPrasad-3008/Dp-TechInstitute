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

            <img
              src="/Dp-TechInstitute/images/dp-logo11.jpg"
              alt="DpTech Logo"
              className="w-10 h-10 object-contain rounded-full"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap w-8 h-8 text-emerald-400"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>

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
