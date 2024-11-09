// import React from 'react';
// import { AbsoluteFill, Sequence } from 'remotion';
// import { motion } from 'framer-motion';

// type MyCompositionProps = {
//   githubData: {
//     totalCommits: number;
//     stars: number;
//     pullRequests: number;
//     linesOfCode: number;
//     commitsThisYear: number;
//     reposThisYear: number;
//     biggestRepo: string;
//     openSourceContributions: number;
//     achievements: string[];
//     repoWithMostStars: string;
//     topLanguages: string[];
//   };
// };

// export const MyComposition: React.FC<MyCompositionProps> = ({ githubData }) => {
//   return (
//     <AbsoluteFill className="bg-gradient-to-br from-blue-500 to-purple-700 text-white flex items-center justify-center text-4xl">
//       {/* Scene 1: Username Introduction */}
//       <Sequence from={0} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-white text-black rounded-md shadow-md"
//         >
//           <h1 className="text-5xl font-bold">Welcome, GitHub User!</h1>
//           <p className="text-2xl mt-4">Here's your GitHub year in review!</p>
//         </motion.div>
//       </Sequence>

//       {/* Scene 2: Pull Requests */}
//       <Sequence from={60} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-yellow-400 rounded-md shadow-md"
//         >
//           <h1>{`Pull Requests: ${githubData.pullRequests}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 3: Total Commits */}
//       <Sequence from={120} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-red-500 rounded-md shadow-md"
//         >
//           <h1>{`Total Commits: ${githubData.totalCommits}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 4: Stars Gained */}
//       <Sequence from={180} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-green-500 rounded-md shadow-md"
//         >
//           <h1>{`Stars Gained: ${githubData.stars}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 5: Top Languages */}
//       <Sequence from={240} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, x: 200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-purple-500 rounded-md shadow-md"
//         >
//           <h1>Top Languages:</h1>
//           <ul className="mt-4 list-disc list-inside">
//             {githubData.topLanguages.map((lang, index) => (
//               <li key={index} className="text-xl">{lang}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </Sequence>

//       {/* Scene 6: Biggest Repository */}
//       <Sequence from={300} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-blue-600 rounded-md shadow-md"
//         >
//           <h1>{`Biggest Repository: ${githubData.biggestRepo}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 7: Achievements */}
//       <Sequence from={360} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-pink-500 rounded-md shadow-md"
//         >
//           <h1>Achievements:</h1>
//           <ul className="mt-4 list-disc list-inside">
//             {githubData.achievements.map((achievement, index) => (
//               <li key={index} className="text-xl">{achievement}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </Sequence>
//     </AbsoluteFill>
//   );
// };

// import React from 'react';
// import { AbsoluteFill, Sequence } from 'remotion';
// import { motion } from 'framer-motion';

// type MyCompositionProps = {
//   githubData: {
//     totalCommits: number;
//     stars: number;
//     pullRequests: number;
//     linesOfCode: number;
//     commitsThisYear: number;
//     reposThisYear: number;
//     biggestRepo: string;
//     openSourceContributions: number;
//     achievements: string[];
//     repoWithMostStars: string;
//     topLanguages: string[];
//   };
// };

// export const MyComposition: React.FC<MyCompositionProps> = ({ githubData }) => {
//   return (
//     <AbsoluteFill className="bg-gradient-to-br from-blue-500 to-purple-700 text-white flex items-center justify-center text-4xl">
//       {/* Scene 1: Username Introduction */}
//       <Sequence from={0} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-white text-black rounded-md shadow-md"
//         >
//           <h1 className="text-5xl font-bold">Welcome, GitHub User!</h1>
//           <p className="text-2xl mt-4">Here's your GitHub year in review!</p>
//         </motion.div>
//       </Sequence>

//       {/* Scene 2: Pull Requests */}
//       <Sequence from={60} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-yellow-400 rounded-md shadow-md"
//         >
//           <h1>{`Pull Requests: ${githubData.pullRequests}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 3: Total Commits */}
//       <Sequence from={120} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-red-500 rounded-md shadow-md"
//         >
//           <h1>{`Total Commits: ${githubData.totalCommits}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 4: Stars Gained */}
//       <Sequence from={180} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-green-500 rounded-md shadow-md"
//         >
//           <h1>{`Stars Gained: ${githubData.stars}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 5: Top Languages */}
//       <Sequence from={240} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, x: 200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-purple-500 rounded-md shadow-md"
//         >
//           <h1>Top Languages:</h1>
//           <ul className="mt-4 list-disc list-inside">
//             {githubData.topLanguages.map((lang, index) => (
//               <li key={index} className="text-xl">{lang}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </Sequence>

//       {/* Scene 6: Biggest Repository */}
//       <Sequence from={300} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-blue-600 rounded-md shadow-md"
//         >
//           <h1>{`Biggest Repository: ${githubData.biggestRepo}`}</h1>
//         </motion.div>
//       </Sequence>

//       {/* Scene 7: Achievements */}
//       <Sequence from={360} durationInFrames={60}>
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="p-6 bg-pink-500 rounded-md shadow-md"
//         >
//           <h1>Achievements:</h1>
//           <ul className="mt-4 list-disc list-inside">
//             {githubData.achievements.map((achievement, index) => (
//               <li key={index} className="text-xl">{achievement}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </Sequence>
//     </AbsoluteFill>
//   );
// };

import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { motion } from 'framer-motion';
import { GithubOutlined, StarOutlined, CodeOutlined, TrophyOutlined, BranchesOutlined, LineChartOutlined } from '@ant-design/icons';
import rocketImage from '../src/assets/rocket.webp';
import moonImage from '../src/assets/moon.webp';
import chartImage from '../src/assets/chart.webp';

export const MyComposition: React.FC = () => {
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
    <AbsoluteFill style={{ backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Scene 1: Username Introduction */}
      <Sequence from={0} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px', position: 'relative' }}
        >
          <motion.img 
            src={rocketImage} 
            alt="Rocket"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            style={{ width: '100px', position: 'absolute', top: '10%' }}
          />
          <GithubOutlined style={{ fontSize: 120, color: '#1DA1F2' }} />
          <p style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Welcome, GitHub User!</p>
          <p style={{ fontSize: '40px', marginTop: '16px', textAlign: 'center', fontWeight: '600' }}>Here's your GitHub year in review!</p>
        </motion.div>
      </Sequence>

      {/* Scene 2: Pull Requests */}
      <Sequence from={135} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px', position: 'relative' }}
        >
          <motion.img 
            src={moonImage} 
            alt="Moon"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            style={{ width: '150px', position: 'absolute', top: '15%', right: '10%' }}
          />
          <BranchesOutlined style={{ fontSize: 120, color: '#FFC107' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Pull Requests</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.pullRequests}</p>
        </motion.div>
      </Sequence>

      {/* Scene 3: Total Commits */}
      <Sequence from={270} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}
        >
          <motion.img
            src={chartImage}
            alt="Chart"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{ width: '200px', marginBottom: '20px' }}
          />
          <CodeOutlined style={{ fontSize: 120, color: '#FF5733' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Total Commits</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.totalCommits}</p>
        </motion.div>
      </Sequence>

      {/* Scene 4: Stars Gained */}
      <Sequence from={405} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}
        >
          <StarOutlined style={{ fontSize: 120, color: '#4CAF50' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Stars Gained</h1>
          <p style={{ fontSize: '48px', marginTop: '16px', fontWeight: 'bold' }}>{githubData.stars}</p>
        </motion.div>
      </Sequence>

      {/* Scene 5: Top Languages */}
      <Sequence from={540} durationInFrames={135}>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}
        >
          <LineChartOutlined style={{ fontSize: 120, color: '#9C27B0' }} />
          <h1 style={{ fontSize: '56px', textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>Top Languages</h1>
          <ul style={{ fontSize: '40px', marginTop: '16px', fontWeight: 'bold', listStyleType: 'none', padding: 0 }}>
            {githubData.topLanguages.map((lang, index) => (
              <li key={index} style={{ marginTop: '12px' }}>{lang}</li>
            ))}
          </ul>
        </motion.div>
      </Sequence>

      {/* Scene 6: Biggest Repository */}
      <Sequence from={675} durationInFrames={135}>
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
      </Sequence>

      {/* Scene 7: Achievements */}
      <Sequence from={810} durationInFrames={135}>
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
      </Sequence>
    </AbsoluteFill>
  );
};
