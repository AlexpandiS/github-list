export class GitHubRateLimitError extends Error {
  constructor() {
    super('GitHub API rate limit exceeded. Please wait a few minutes before trying again.');
    this.name = 'GitHubRateLimitError';
  }
}

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

export const fetchTrendingRepos = async (page = 1) => {
  const tenDaysAgo = getDateNDaysAgo(10);
  const url = `${GITHUB_API_URL}?q=created:>${tenDaysAgo}&sort=stars&order=desc&page=${page}`;
  
  try {
    const response = await fetch(url);
    
    if (response.status === 429) {
      throw new GitHubRateLimitError();
    }
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};

export const getDateNDaysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
};