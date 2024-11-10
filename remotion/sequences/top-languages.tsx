/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Code, Rocket, Star, Codepen, Gitlab, Chrome, Database } from 'lucide-react';

const { Text } = Typography;

const topLanguages = [
  { name: 'JavaScript', usage: '50%', icon: <Code size={32} color="#fbbf24" /> },
  { name: 'Python', usage: '30%', icon: <Codepen size={32} color="#6a994e" /> },
  { name: 'Java', usage: '15%', icon: <Gitlab size={32} color="#b56576" /> },
  { name: 'HTML', usage: '3%', icon: <Chrome size={32} color="#e85d04" /> },
  { name: 'SQL', usage: '2%', icon: <Database size={32} color="#4361ee" /> },
];

const TopLanguagesShowcase = () => {
  const styles = {
    container: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #123456, #0d0d0d)',
      color: '#ffffff',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '900px',
      textAlign: 'center',
    },
    header: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#fbbf24',
      background: 'linear-gradient(to right, #ff7f50, #ffdd57)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '40px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      padding: '24px',
      width: '100%',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rankContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    languageIcon: {
      backgroundColor: '#444',
      borderRadius: '50%',
      padding: '8px',
    },
    usageStat: {
      fontSize: '2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a0c4ff, #bde0fe)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.contentWrapper}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <h1 style={styles.header}>Top Languages</h1>

        {topLanguages.map((language, index) => (
          <motion.div
            key={language.name}
            style={styles.card}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateZ: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div style={styles.rankContainer}>
              <div style={styles.languageIcon}>
                {language.icon} {/* Render icon directly here */}
              </div>
              <Text style={{ color: '#f8f8f8', fontSize: '1.5rem' }}>
                {index + 1}. {language.name}
              </Text>
            </div>
            <motion.div
              style={styles.usageStat}
              animate={{ x: [0, 10, -10, 0], scale: 1.05 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {language.usage}
            </motion.div>
          </motion.div>
        ))}

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
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
          <Rocket size={48} color="#ffb703" />
          <span style={{ color: '#ffdd57', marginLeft: '12px' }}>
            Reaching New Heights!
          </span>
        </motion.div>

        {/* Decorative Stars */}
        {Array.from({ length: 10 }).map((_, i) => (
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

export default TopLanguagesShowcase;
