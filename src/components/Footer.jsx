import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
          Built with <Heart size={16} className="mx-1 text-red-500" /> for GitHub explorers
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          Data provided by the GitHub API
        </p>
      </div>
    </footer>
  );
};

export default Footer;