/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import { useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';

interface GitHubStats {
  totalCommits: number;
  stars: number;
  pullRequests: number;
  linesOfCode: number;
  commitsThisYear: number;
  reposThisYear: number;
  biggestRepo: string;
  openSourceContributions: number;
  achievements: string[];
  repoWithMostStars: string;
  topLanguages: string[] | unknown;
}

const useFetchGitHubData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gitHubData, setGitHubData] = useState<GitHubStats | null>(() => {
    const savedData = sessionStorage.getItem('githubData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const fetchGitHubData = async (username: string) => {
    setIsLoading(true);
    try {
      // Fetch user details
      const { data: userData } = await axios.get(`https://api.github.com/users/${username}`);
      
      // Fetch starred repos
      const { data: starredRepos } = await axios.get(`https://api.github.com/users/${username}/starred`);
      
      // Fetch repos list
      const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
      
      // Extract information from repos
      const stars = starredRepos.length;
      const commitsThisYear = 0;
      const pullRequests = 0;
      const linesOfCode = repos.reduce((sum: number, repo: { size: number }) => sum + (repo.size || 0), 0);
      const reposThisYear = repos.filter((repo: any) => new Date(repo.created_at).getFullYear() === new Date().getFullYear()).length;
      const biggestRepo = repos.sort((a: any, b: any) => b.size - a.size)[0]?.name || '';
      const repoWithMostStars = repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)[0]?.name || '';
      const topLanguages = Array.from(
        repos.reduce((map: Map<string, number>, repo: any) => {
          const lang = repo.language;
          if (lang) {
            map.set(lang, (map.get(lang) || 0) + 1);
          }
          return map;
        }, new Map())
      )
        .sort(([, aCount], [, bCount]) => bCount - aCount)
        .slice(0, 3)
        .map(([lang]) => lang);
      const achievements = ['Top Contributor', '100 Commits']; 

      // Store data in state
      const fetchedData: GitHubStats = {
        totalCommits: userData.public_repos,
        stars,
        pullRequests,
        linesOfCode,
        commitsThisYear,
        reposThisYear,
        biggestRepo,
        openSourceContributions: 0, 
        achievements,
        repoWithMostStars,
        topLanguages,
      };
      setGitHubData(fetchedData);

      // Show success notification
      notification.success({
        message: '🎉 Success!',
        description: 'GitHub data fetched successfully!',
      });
    } catch (error: unknown) {
      notification.error({
        message: '🚫 Failed to fetch GitHub data!',
        description: (error as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, gitHubData, fetchGitHubData };
};

export default useFetchGitHubData;
