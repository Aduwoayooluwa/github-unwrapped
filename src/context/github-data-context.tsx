import React, { createContext, useState } from 'react';

type GitHubDataContextType = {
  username: string | null;
  setGitHubUsername: (username: string) => void;
  githubData: unknown;
  setGitHubData: (data: unknown) => void;
};

export const GitHubDataContext = createContext<GitHubDataContextType>({
  username: null,
  setGitHubUsername: () => {},
  githubData: null,
  setGitHubData: () => {},
});

export const GitHubDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(
    sessionStorage.getItem('githubUsername') || null
  );
  const [githubData, setGitHubData] = useState<unknown>(null);

  const setGitHubUsername = (username: string) => {
    setUsername(username);
    sessionStorage.setItem('githubUsername', username);
  };

  return (
    <GitHubDataContext.Provider
      value={{
        username,
        setGitHubUsername,
        githubData,
        setGitHubData,
      }}
    >
      {children}
    </GitHubDataContext.Provider>
  );
};
