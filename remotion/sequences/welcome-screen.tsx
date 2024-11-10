/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Citrus, Stars, Smile } from 'lucide-react';

const WelcomeScreen = () => {
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSparkles(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    container: {
      minHeight: '100%',
      background: 'linear-gradient(to bottom, #44207A, #1a365d, #000000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    },
    balloonContainer: {
      position: 'absolute',
      inset: 0,
    },
    balloon: {
      position: 'absolute',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      opacity: 0.2,
    },
    contentWrapper: {
      textAlign: 'center',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '32px',
      gap: '16px',
    },
    title: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #ec4899, #fbbf24, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
    },
    title2: {
        fontSize: '3.2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #ec4899, #fbbf24, #22d3ee)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0 40px',
        lineHeight: '50px',
        marginBottom: '5rem',
      },
    usernameContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    username: {
      fontSize: '1.875rem',
      fontWeight: 600,
      color: 'white',
      marginBottom: '2rem',
    },
    message: {
      fontSize: '1.25rem',
      color: '#67e8f9',
      maxWidth: '28rem',
      margin: '0 auto',
    },
    bottomIconContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '1.5rem',
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
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
      y: [-20, 20],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const spinningVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const generateBalloons = () => {
    const balloons = [];
    const colors = ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98'];
    
    for (let i = 0; i < 20; i++) {
      const style = {
        ...styles.balloon,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: colors[i % colors.length],
      };
      
      balloons.push(
        <motion.div
          key={i}
          style={style}
          animate={{
            y: [-20, 20],
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2
            }
          }}
        />
      );
    }
    return balloons;
  };

  return (
    <div style={styles.container}>
      <div style={styles.balloonContainer}>
        {generateBalloons()}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={styles.contentWrapper}>
          <motion.div style={styles.iconContainer} variants={itemVariants}>
            <motion.div animate={spinningVariants.animate}>
              <Stars size={80} color="#FFD700" />
            </motion.div>
            <motion.div animate={floatingVariants.animate}>
              <Citrus size={80} color="#FFD700" />
            </motion.div>
            <motion.div animate={spinningVariants.animate}>
              <Stars size={80} color="#FF69B4" />
            </motion.div>
          </motion.div>

          <motion.h1
            style={styles.title}
            variants={itemVariants}
            animate={pulseVariants.animate}
          >
           Welcome to
          </motion.h1>

          <motion.h1
            style={styles.title2}
            variants={itemVariants}
            animate={pulseVariants.animate}
          >
            GitHub unwrapped by gitscape
          </motion.h1>

          <motion.div style={styles.usernameContainer} variants={itemVariants}>
            <h2 style={styles.username}>
              <motion.span
                animate={{
                  y: [-5, 5],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                style={{ display: 'inline-block' }}
              >
                @
              </motion.span>
              githubUsername
            </h2>
            {showSparkles && (
              <>
                <motion.div
                  animate={pulseVariants.animate}
                  style={{ position: 'absolute', top: '-16px', left: '-24px' }}
                >
                  <Sparkles size={24} color="#FFD700" />
                </motion.div>
                <motion.div
                  animate={pulseVariants.animate}
                  style={{ position: 'absolute', bottom: '-16px', right: '-24px' }}
                >
                  <Sparkles size={24} color="#FFD700" />
                </motion.div>
              </>
            )}
          </motion.div>

          <motion.p
            style={styles.message}
            variants={itemVariants}
          >
            Step right up! Where every commit is a celebration and every pull request is a thrilling ride!
            <motion.span
              animate={pulseVariants.animate}
              style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }}
            >
              <Smile size={24} color="#FFD700" />
            </motion.span>
          </motion.p>

          <motion.div
            style={styles.bottomIconContainer}
            variants={itemVariants}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, 10],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.1
                  }
                }}
              >
                <PartyPopper
                  size={32}
                  color={i === 0 ? "#ec4899" : i === 1 ? "#fbbf24" : "#4ade80"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;