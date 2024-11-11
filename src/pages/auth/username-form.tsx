import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { GitHubDataContext } from '../../context/github-data-context';
import useFetchGitHubData from '../../hooks/use-fetch-github-data';

export default function GitHubUnwrapped() {
  const [username, setUsername] = useState('');
  const [searchParams] = useSearchParams();
  const userName = searchParams.get('username');

  const { setGitHubUsername } = useContext(GitHubDataContext);


  const { isLoading, gitHubData, fetchGitHubData } = useFetchGitHubData();

  const handleSubmit = async () => {
    try {
      setGitHubUsername(username || userName as string);
    sessionStorage.setItem('githubUsername', username || userName as string);

    // Fetch GitHub data using the custom hook
    const fetchedData = await fetchGitHubData(username || userName as string);
    console.log(fetchedData, 'fetched data')

    // Store fetched data in context and session storage
    if (fetchedData) {
      sessionStorage.setItem('githubData', JSON.stringify(gitHubData));
    }
    }

    catch {
      console.error()
    }
  };
  
  return (
    <div className="min-h-screen p-8 pt-28 bg-gradient-to-b from-white via-blue-200 to-gray-100 flex flex-col justify-center items-center">
      {userName ? (
        // Show video generation page if username is provided
        <>
          <h1 className="text-4xl md:text-4xl font-semibold text-center mb-12 text-primary">GitHub Unwrapped 2024 🎶</h1>

          <div className="flex flex-col items-center w-full max-w-3xl text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Ready to relive your year on GitHub? See your journey, highlights, and all the fun moments in a beautiful video!
            </p>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex items-center hover:scale-110 active:scale-95 bg-primary/75 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-primary/90 transition-all ease-in-out duration-300 cursor-pointer disabled:opacity-50"
            >
              <PlayCircleOutlined className="mr-3 text-2xl" />
              {isLoading ? 'Generating Your Video...' : 'Watch My Year Unwrapped'}
            </button>

            <div className="mt-16 w-full rounded-xl bg-indigo-100 p-6 shadow-md text-center">
              <h2 className="text-2xl font-bold text-primary/90">Coming Soon...</h2>
              <p className="text-lg text-gray-700 mt-4">
                Your personalized video showcasing your GitHub journey is on its way. Stay tuned for a vibrant experience that wraps up your year!
              </p>
            </div>
          </div>
        </>
      ) : (
        // Show username input form if no username is provided
        <motion.div
          className="bg-white p-8 shadow-xs rounded-xl max-w-lg w-full relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-center text-4xl font-bold mb-6 text-primary flex justify-center items-center gap-3">
            {'GitHub Unwrapped 2024'}🚀
          </h2>
          <Form  layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label={<span className="text-lg font-semibold text-primary">GitHub Username 🎢</span>}
              name="username"
              rules={[{ required: true, message: 'Please enter your GitHub username!' }]}
            >
              <Input
                prefix={<GithubOutlined className="text-primary" />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., octocat"
                className="text-lg"
              />
            </Form.Item>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-6">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-14 text-lg font-semibold"
                  style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }}
                  loading={isLoading}
                >
                  🎬 Generate Video
                </Button>
              </Form.Item>
            </motion.div>
          </Form>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-sm text-gray-500">GitHub Unwrapped by GitScape</p>
            </div>
        </motion.div>
      )}
    </div>
  );
}
