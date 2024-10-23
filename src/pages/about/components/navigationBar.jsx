import React, { useState } from 'react';

export default function NavigationBar() {
  // State to manage mobile menu open/close
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<nav className="border-b shadow-md bg-gradient-to-r from-blue-500 to-indigo-600">
  <div className="container mx-auto flex items-center justify-between px-4 py-2">


  

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-xl">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <a href="/signin" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign In</a>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu md:hidden`}>
        <a href="/" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">Home</a>
        <a href="/about" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">About</a>
        <a href="/services" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">Services</a>
        <a href="/contact" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">Contact</a>
        <a href="/signin" className="block text-gray-600 px-4 py-2 hover:bg-gray-100">Sign In</a>
      </div>
    </nav>

  );
}