import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsernameForm from './pages/auth/username-form';
import RemotionPreview from './pages/remotion-preview';
import { GitHubDataProvider } from './context/github-data-context';

const App: React.FC = () => {
  return (
    <GitHubDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UsernameForm />} />
          <Route path="/preview" element={<RemotionPreview />} />
        </Routes>
      </Router>
    </GitHubDataProvider>
  );
};

export default App;
