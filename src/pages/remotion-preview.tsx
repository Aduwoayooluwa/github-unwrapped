/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useContext, useState } from 'react';
import { Player } from '@remotion/player';
import { MyComposition } from '../../remotion/composition';
import { GitHubDataContext } from '../context/github-data-context';
import { Button, notification } from 'antd';
import { DownloadOutlined, SmileOutlined, LikeOutlined, StarOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const Preview: React.FC = () => {
  const { githubData } = useContext(GitHubDataContext);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!githubData) {
    return <div>Loading... Please go back and enter your GitHub username!</div>;
  }

  // Function to handle video download
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Mock download logic for now
      notification.success({ message: 'Video downloaded successfully!' });
    } catch (error) {
      notification.error({
        message: 'Failed to download the video!',
        description: (error as Error).message,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 p-4 relative overflow-hidden">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-8 left-8 text-white text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <SmileOutlined />
      </motion.div>

      <motion.div
        className="absolute top-12 right-10 text-white text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <LikeOutlined />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-12 text-white text-4xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <StarOutlined />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-16 text-white text-4xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <LikeOutlined />
      </motion.div>

      {/* Player Component */}
      <motion.div
        className="relative w-full max-w-xs md:max-w-md aspect-[9/16] bg-black shadow-2xl rounded-md overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, yoyo: Infinity }}
      >
        <Player
          component={MyComposition}
          compositionWidth={720}
          compositionHeight={1280}
          durationInFrames={1350}
          fps={30}
          controls
          inputProps={{ githubData }}
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        />
        <div className="absolute top-4 right-4">
          <motion.div whileHover={{ scale: 1.2 }} className="text-white text-2xl">
            <PlayCircleOutlined />
          </motion.div>
        </div>
      </motion.div>

      {/* Download Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 z-10"
      >
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          loading={isDownloading}
          onClick={handleDownload}
          className="bg-yellow-500 border-yellow-500 text-lg font-semibold px-6"
          style={{ borderRadius: '8px' }}
        >
          Download Video
        </Button>
      </motion.div>
    </div>
  );
};

export default Preview;
