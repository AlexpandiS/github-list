import React from 'react';
import { Star, User } from 'lucide-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline truncate max-w-[80%]"
        >
          {repo.name}
        </a>
        <div className="flex items-center text-yellow-500">
          <Star size={18} className="mr-1" />
          <span className="font-bold">{repo.stargazers_count.toLocaleString()}</span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {repo.description || <span className="text-gray-400 italic">No description available</span>}
      </p>
      
      <div className="flex items-center mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
        <a 
          href={repo.owner.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          <img 
            src={repo.owner.avatar_url} 
            alt={`${repo.owner.login}'s avatar`} 
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-gray-700 dark:text-gray-300">{repo.owner.login}</span>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;