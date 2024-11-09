import React, { useState, useContext } from 'react';
import { Input, Button, Form, Spin } from 'antd';
import { GithubOutlined, SmileOutlined } from '@ant-design/icons';
import { GitHubDataContext } from '../../context/github-data-context';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFetchGitHubData from '../../hooks/use-fetch-github-data';

const UsernameForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const { setGitHubUsername, setGitHubData } = useContext(GitHubDataContext);
  const navigate = useNavigate();
  const { isLoading, gitHubData, fetchGitHubData } = useFetchGitHubData();

  const handleGenerateVideo = () => {
    navigate('/preview');
  };

  const handleSubmit = async () => {
    setGitHubUsername(username);
    sessionStorage.setItem('githubUsername', username);

    // Fetch GitHub data using the custom hook
    await fetchGitHubData(username);

    // Store fetched data in context and session storage
    if (gitHubData) {
      setGitHubData(gitHubData);
      sessionStorage.setItem('githubData', JSON.stringify(gitHubData));
    }

    // Navigate to preview page
    handleGenerateVideo();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 p-4 overflow-hidden relative">
      <motion.div
        className="bg-white p-8 shadow-2xl rounded-xl max-w-lg w-full relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-xl z-10">
            <Spin size="large" />
          </div>
        )}
        <h2 className="text-center text-4xl font-bold mb-6 text-purple-700 flex justify-center items-center gap-3">
          <SmileOutlined style={{ fontSize: '2.5rem', color: '#f59e0b' }} />
          Welcome to GitHub Fun Analyzer! 🚀
        </h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label={<span className="text-lg font-semibold text-purple-700">GitHub Username 🎢</span>}
            name="username"
            rules={[{ required: true, message: 'Please enter your GitHub username!' }]}
          >
            <Input
              prefix={<GithubOutlined className="text-purple-500" />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., octocat"
              className="text-lg"
            />
          </Form.Item>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6"
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-14 text-lg font-semibold"
                style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }}
                disabled={isLoading}
              >
                🎬 Generate Video
              </Button>
            </Form.Item>
          </motion.div>
        </Form>
      </motion.div>
    </div>
  );
};

export default UsernameForm;
