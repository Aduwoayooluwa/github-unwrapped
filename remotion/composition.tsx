import React from 'react';
import { AbsoluteFill, Sequence, Audio } from 'remotion';
import { motion, AnimatePresence } from 'framer-motion';
import Achievements from './sequences/achievements'
import GithubStats from './sequences/github-stats';

import WelcomeScreen from './sequences/welcome-screen';
import TopLanguages from './sequences/top-languages';
import BiggestRepos from './sequences/biggest-repos';

export const MyComposition: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const githubData = {
    totalCommits: 123,
    stars: 456,
    pullRequests: 78,
    linesOfCode: 89000,
    commitsThisYear: 50,
    reposThisYear: 5,
    biggestRepo: 'awesome-project',
    openSourceContributions: 20,
    achievements: ['Top Contributor', '100 Commits in a Year'],
    repoWithMostStars: 'most-starred-repo',
    topLanguages: ['JavaScript', 'TypeScript', 'Python'],
  };

  return (
    <AbsoluteFill style={{ padding:0, color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* audio */}
      <Audio src={'/audio.mp3'} />
      {/* Scene 1: Username Introduction */}
      <Sequence from={0} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}
        >
          <WelcomeScreen />
        </motion.div>
      </Sequence>

      {/* Scene 2: Pull Requests */}
      <Sequence from={135} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}
        >
          <GithubStats />
        
        </motion.div>
      </Sequence>

      {/* Scene 3: Total Commits */}
      <Sequence from={270} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column'}}
        >
          
          {/* <CodeOutlined style={{ fontSize: 120, color: '#FF5733' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Total Commits</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.totalCommits}</p> */}
          <TopLanguages />
        </motion.div>
      </Sequence>

      {/* Scene 4: Stars Gained */}
      <Sequence from={405} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column' }}
        >
          {/* <StarOutlined style={{ fontSize: 120, color: '#4CAF50' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Stars Gained</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.stars}</p> */}
          <BiggestRepos />
        </motion.div>
      </Sequence>

      <Sequence from={540} durationInFrames={135}>
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: -300 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '10px',
          position: 'relative',
          background: 'linear-gradient(135deg, #1E1F26, #303645)', // Veil background color
          height: '100%', 
          overflow: 'hidden',
        }}
      >
        <div>
          <h1
            style={{
              color: '#f2f2f2',
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: '600',
            }}
          >
            Achievements
          </h1>
        </div>
      </motion.div>
    </AnimatePresence>
      </Sequence>

      {/* Scene 5: Top Languages */}
      <Sequence from={640} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}
        >
          <Achievements />
          {/* <LineChartOutlined style={{ fontSize: 120, color: '#9C27B0' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Top Languages</h1>
          <ul style={{ fontSize: '40px', marginTop: '16px', fontWeight: 'bold', listStyleType: 'none', padding: 0 }}>
            {githubData.topLanguages.map((lang, index) => (
              <li key={index} style={{ marginTop: '12px' }}>{lang}</li>
            ))}
          </ul> */}


        </motion.div>
      </Sequence>

      {/* Scene 6: Biggest Repository */}
      {/* <Sequence from={675} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}
        >
          <TrophyOutlined style={{ fontSize: 120, color: '#2196F3' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Biggest Repository</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.biggestRepo}</p>
        </motion.div>
      </Sequence> */}

      {/* Scene 7: Achievements */}
      {/* <Sequence from={810} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px', position: 'relative' }}
        >
          <motion.img 
            src={rocketImage} 
            alt="Rocket"
            initial={{ x: -300 }}
            animate={{ x: 300 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            style={{ width: '120px', position: 'absolute', bottom: '20%' }}
          />
          <TrophyOutlined style={{ fontSize: 120, color: '#E91E63' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Achievements</h1>
          <ul style={{ fontSize: '40px', marginTop: '16px', fontWeight: 'bold', listStyleType: 'none', padding: 0 }}>
            {githubData.achievements.map((achievement, index) => (
              <li key={index} style={{ marginTop: '12px' }}>{achievement}</li>
            ))}
          </ul>
          
        </motion.div>
      </Sequence> */}
    </AbsoluteFill>
  );
};
