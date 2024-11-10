import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Trophy, Star, Medal, Rocket, Sparkles } from 'lucide-react';

const { Text } = Typography;

interface Achievement {
  title: string;
  description: string;
  icon: JSX.Element;
}

const achievements: Achievement[] = [
  { title: 'Code Star', description: 'Over 1000 Stars on GitHub!', icon: <Star size={40} color="#FFD700" /> },
  { title: 'Trophy Hunter', description: 'Awarded with 10+ GitHub Trophies!', icon: <Trophy size={40} color="#FF6347" /> },
  { title: 'Contributor Medal', description: 'Contributed to 50+ projects!', icon: <Medal size={40} color="#00FF7F" /> },
  { title: 'Rocket Launch', description: 'Joined GitHub Actions!', icon: <Rocket size={40} color="#1E90FF" /> },
  { title: 'Community Spark', description: '50+ Issues resolved!', icon: <Sparkles size={40} color="#FFD700" /> },
];

const GitHubAchievementShowcase: React.FC = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1C1E4A, #302C75, #6A5BD8)',
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
      color: '#FFD700',
      background: 'linear-gradient(to right, #42E695, #3BB2B8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '40px',
    } as React.CSSProperties,
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(15px)',
      padding: '24px',
      width: '100%',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
      transform: 'rotateY(10deg) rotateX(10deg)',
      transition: 'transform 0.6s ease-in-out',
    } as React.CSSProperties,
    iconContainer: {
      marginBottom: '16px',
      padding: '20px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
    } as React.CSSProperties,
    achievementText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    } as React.CSSProperties,
    achievementDescription: {
      fontSize: '1.25rem',
      color: '#D1E7FF',
      textAlign: 'center',
    } as React.CSSProperties,
    shootingStar: {
      position: 'absolute',
      background: '#FFD700',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(255, 223, 0, 0.9)',
    } as React.CSSProperties,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const shootingStars = Array.from({ length: 10 }).map((_, i) => (
    <motion.div
      key={i}
      style={{
        ...styles.shootingStar,
        width: `${Math.random() * 6 + 8}px`,
        height: `${Math.random() * 6 + 8}px`,
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
        <h1 style={styles.header}>GitHub Achievements</h1>

        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            style={styles.card}
            variants={itemVariants}
          >
            <div style={styles.iconContainer}>{achievement.icon}</div>
            <Text style={styles.achievementText}>{achievement.title}</Text>
            <Text style={styles.achievementDescription}>
              {achievement.description}
            </Text>
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
            background: 'rgba(0, 123, 255, 0.3)',
            borderRadius: '12px',
            marginTop: '40px',
          }}
        >
          <Rocket size={48} color="#FFD700" />
          <span style={{ color: '#FFD700', marginLeft: '12px' }}>
            Reaching New Heights!
          </span>
        </motion.div>

        {/* Decorative Stars */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles size={12} color="#FFD700" fill="#FFD700" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GitHubAchievementShowcase;
