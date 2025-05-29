import React, { useEffect, useRef, useCallback } from 'react';
import RepoCard from './RepoCard';
import RepoSkeleton from './RepoSkeleton';
import ErrorDisplay from './ErrorDisplay';
import LoadingSpinner from './LoadingSpinner';
import { useGithubRepos } from '../hooks/useGithubRepos';

const RepoList = () => {
  const { repos, isLoading, error, hasMore, loadMore } = useGithubRepos();
  const observer = useRef(null);
  
  const lastRepoElementRef = useCallback((node) => {
    if (isLoading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, loadMore]);

  if (isLoading && repos.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          {[...Array(6)].map((_, index) => (
            <RepoSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error && repos.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ErrorDisplay message={error} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4">
        {repos.map((repo, index) => {
          if (repos.length === index + 1) {
            return (
              <div ref={lastRepoElementRef} key={repo.id}>
                <RepoCard repo={repo} />
              </div>
            );
          } else {
            return <RepoCard key={repo.id} repo={repo} />;
          }
        })}
      </div>
      
      {isLoading && repos.length > 0 && <LoadingSpinner />}
      {error && repos.length > 0 && <ErrorDisplay message={error} />}
      {!hasMore && repos.length > 0 && (
        <p className="text-center text-gray-500 my-8">No more repositories to load</p>
      )}
    </div>
  );
};

export default RepoList;