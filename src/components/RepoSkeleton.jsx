import React from 'react';

const RepoSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 h-full flex flex-col animate-pulse">
      <div className="flex items-start justify-between mb-3">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="flex items-center">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full mr-1"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </div>
      </div>
      
      <div className="space-y-2 mb-4 flex-grow">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
      
      <div className="flex items-center mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  );
};

export default RepoSkeleton;