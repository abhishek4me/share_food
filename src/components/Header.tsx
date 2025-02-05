import React from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-bold text-gray-800">FoodShare</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-rose-500">Home</a>
            <a href="#donate" className="text-gray-600 hover:text-rose-500">Donate</a>
            <a href="#organizations" className="text-gray-600 hover:text-rose-500">Organizations</a>
            <a href="#testimonials" className="text-gray-600 hover:text-rose-500">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-rose-500">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-rose-500">Login</button>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-rose-500">Home</a>
              <a href="#donate" className="text-gray-600 hover:text-rose-500">Donate</a>
              <a href="#organizations" className="text-gray-600 hover:text-rose-500">Organizations</a>
              <a href="#testimonials" className="text-gray-600 hover:text-rose-500">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-rose-500">Contact</a>
              <hr className="my-2" />
              <button className="text-gray-600 hover:text-rose-500">Login</button>
              <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;