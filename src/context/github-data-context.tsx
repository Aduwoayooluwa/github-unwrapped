import React, { createContext, useState } from 'react';

type GitHubDataContextType = {
  username: string | null;
  setGitHubUsername: (username: string) => void;
  gitHubData: GitHubStats | null;
  setGitHubData: React.Dispatch<React.SetStateAction<GitHubStats | null>>;
};

export const GitHubDataContext = createContext<GitHubDataContextType>({
  username: null,
  setGitHubUsername: () => {},
  gitHubData: null,
  setGitHubData: () => {},
});

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


export const GitHubDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(
    sessionStorage.getItem('githubUsername') || null
  );
  
  const [gitHubData, setGitHubData] = useState<GitHubStats | null>(() => {
    const savedData = sessionStorage.getItem('githubData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const setGitHubUsername = (username: string) => {
    setUsername(username);
    sessionStorage.setItem('githubUsername', username);
  };

  const contextValue = React.useMemo(() => ({
    username,
    setGitHubUsername,
    gitHubData,
    setGitHubData,
  }), [username, gitHubData]);

  return (
    <GitHubDataContext.Provider value={contextValue}>
      {children}
    </GitHubDataContext.Provider>
  );
};
