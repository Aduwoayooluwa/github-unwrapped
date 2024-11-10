/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  GitPullRequest,
  GitCommit,
  Star,
  Rocket,
  Medal,
  Crown,
  Sparkles,
} from 'lucide-react';

// Sample data - In real app, replace with actual GitHub API data
const stats = {
  totalPRs: 156,
  mergedPRs: 142,
  commits: 847,
  contributionStreak: 45,
};

const ContributionCelebration = () => {


  const styles = {
    container: {
      minHeight: '100%',
      background: 'linear-gradient(to bottom, #44207A, #1a365d, #000000)',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    } as React.CSSProperties,
    contentWrapper: {
      // maxWidth: '900px',
      width: '100%',
      zIndex: 1,
    } as React.CSSProperties,
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    } as React.CSSProperties,
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #fbbf24, #d946ef)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '16px',
    } as React.CSSProperties,
    subtitle: {
      color: '#67e8f9',
      fontSize: '1.25rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      marginTop: '40px',
    } as React.CSSProperties,
    statCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    } as React.CSSProperties,
    statValue: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginTop: '16px',
      marginBottom: '8px',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    } as React.CSSProperties,
    statLabel: {
      fontSize: '1.25rem',
      color: '#94a3b8',
    } as React.CSSProperties,
    achievementBanner: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const generateStars = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <Star size={8} color="#fbbf24" fill="#fbbf24" />
      </motion.div>
    ));
  };

  // Determine achievement level based on stats
  const getAchievementMessage = () => {
    if (stats.mergedPRs > 100) {
      return {
        icon: <Crown size={32} color="#fbbf24" />,
        title: "PR Royalty! 👑",
        message: "You're in the top tier of contributors!"
      };
    }
    if (stats.mergedPRs > 50) {
      return {
        icon: <Trophy size={32} color="#fbbf24" />,
        title: "PR Master! 🏆",
        message: "Your code reviews are legendary!"
      };
    }
    return {
      icon: <Medal size={32} color="#fbbf24" />,
      title: "Rising Star! ⭐",
      message: "Keep up the amazing work!"
    };
  };

  const achievement = getAchievementMessage();

  return (
    <div style={styles.container}>
      {generateStars()}
      
      <motion.div
        style={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div style={styles.header} variants={itemVariants}>
          <motion.div
            animate={floatingVariants.animate}
            style={{ display: 'inline-block' }}
          >
            {achievement.icon}
          </motion.div>
          <h1 style={styles.title}>{achievement.title}</h1>
          <p style={styles.subtitle}>{achievement.message}</p>
        </motion.div>

        <motion.div style={styles.statsGrid}>
          <motion.div
            style={styles.statCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GitPullRequest size={32} color="#60a5fa" />
            <span style={styles.statValue}>{stats.mergedPRs}</span>
            <span style={styles.statLabel}>Merged Pull Requests</span>
            <motion.div
              style={{ position: 'absolute', right: '20px', bottom: '20px' }}
              animate={floatingVariants.animate}
            >
              <Sparkles size={24} color="#60a5fa" opacity={0.3} />
            </motion.div>
          </motion.div>

          <motion.div
            style={styles.statCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GitCommit size={32} color="#a78bfa" />
            <span style={styles.statValue}>{stats.commits}</span>
            <span style={styles.statLabel}>Total Commits</span>
            <motion.div
              style={{ position: 'absolute', right: '20px', bottom: '20px' }}
              animate={floatingVariants.animate}
            >
              <Sparkles size={24} color="#a78bfa" opacity={0.3} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.achievementBanner}
          variants={itemVariants}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              display: 'inline-block',
              marginRight: '12px'
            }}
          >
            <Rocket size={24} color="#fbbf24" />
          </motion.div>
          <span style={{ color: '#94a3b8' }}>
            {stats.contributionStreak} day contribution streak! Keep the momentum going!
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContributionCelebration;