import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Code, Star, GitCommit, Rocket } from 'lucide-react';

const { Text } = Typography;

interface Repo {
  name: string;
  stars: number;
  commits: number;
}

// Sample data for biggest repositories - replace with actual data
const biggestRepos: Repo[] = [
  { name: 'awesome-project', stars: 1245, commits: 457 },
  { name: 'creative-ui', stars: 872, commits: 312 },
  { name: 'backend-services', stars: 749, commits: 290 },
  { name: 'data-analysis', stars: 530, commits: 210 },
  { name: 'open-source-library', stars: 425, commits: 188 },
];

const BiggestRepositoriesShowcase: React.FC = () => {
  const styles = {
    container: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1d1f2f, #232946, #141629)',
      color: '#ffffff',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    } as React.CSSProperties,
    contentWrapper: {
      width: '100%',
      maxWidth: '900px',
      textAlign: 'center',
    } as React.CSSProperties,
    header: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffd700',
      background: 'linear-gradient(to right, #ff8c00, #ff6f61)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '40px',
    } as React.CSSProperties,
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      backdropFilter: 'blur(12px)',
      padding: '24px',
      width: '100%',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
      transform: 'rotateY(10deg) rotateX(10deg)',
    } as React.CSSProperties,
    repoIcon: {
      backgroundColor: '#6a1b9a',
      borderRadius: '50%',
      padding: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    } as React.CSSProperties,
    repoStats: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #56CCF2, #2F80ED)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    } as React.CSSProperties,
    shootingStar: {
      position: 'absolute',
      background: '#ffdd57',
      borderRadius: '50%',
      boxShadow: '0 0 8px rgba(255, 221, 87, 0.8)',
    } as React.CSSProperties,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const shootingStars = Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={i}
      style={{
        ...styles.shootingStar,
        width: `${Math.random() * 4 + 4}px`,
        height: `${Math.random() * 4 + 4}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [-200, 0],
        y: [200, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random(),
        ease: 'easeOut',
      }}
    />
  ));

  return (
    <div style={styles.container}>
      {shootingStars}
      <motion.div
        style={styles.contentWrapper}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <h1 style={styles.header}>Biggest Repositories</h1>

        {biggestRepos.map((repo, index) => (
          <motion.div
            key={repo.name}
            style={styles.card}
            variants={itemVariants}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={styles.repoIcon}>
                <Code size={32} color="#ffffff" />
              </div>
              <Text style={{ color: '#f8f8f8', fontSize: '1.5rem' }}>
                {index + 1}. {repo.name}
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Text style={styles.repoStats}>
                <Star size={16} color="#ffdd57" /> {repo.stars} Stars
              </Text>
              <Text style={styles.repoStats}>
                <GitCommit size={16} color="#56CCF2" /> {repo.commits} Commits
              </Text>
            </div>
          </motion.div>
        ))}

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          style={{
            position: 'relative',
            bottom: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            padding: '24px',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '12px',
            marginTop: '40px',
          }}
        >
          <Rocket size={48} color="#ffdd57" />
          <span style={{ color: '#ffdd57', marginLeft: '12px' }}>
            Soaring to the Stars!
          </span>
        </motion.div>

        {/* Decorative Stars */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={10} color="#ffdd57" fill="#ffdd57" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BiggestRepositoriesShowcase;
