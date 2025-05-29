import { useState, useEffect, useCallback } from 'react';
import { fetchTrendingRepos } from '../services/githubService';

export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = useCallback(async (currentPage) => {
    try {
      setIsLoading(true);
      const data = await fetchTrendingRepos(currentPage);
      
      if (currentPage === 1) {
        setRepos(data.items);
      } else {
        setRepos(prevRepos => [...prevRepos, ...data.items]);
      }
      
      setHasMore(data.items.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos(page);
  }, [page, fetchRepos]);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isLoading, hasMore]);

  return { repos, isLoading, error, hasMore, loadMore };
};