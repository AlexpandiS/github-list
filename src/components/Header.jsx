import React from 'react';
import { Github, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:justify-start">
          <Github size={28} className="mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">GitHub Trending</h1>
          <div className="ml-2 bg-yellow-400 text-yellow-800 rounded-full px-2 py-1 text-xs font-semibold flex items-center">
            <Star size={12} className="mr-1" />
            Top Stars
          </div>
        </div>
        <p className="text-center md:text-left mt-2 text-blue-100">
          Discover the most starred GitHub repositories from the last 10 days
        </p>
      </div>
    </header>
  );
};

export default Header;