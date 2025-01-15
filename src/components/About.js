import React from 'react';
import { Container, Typography, Box, Grid, useTheme, Card } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Security',
      description: 'State-of-the-art algorithms to detect sophisticated fake news patterns.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'AI-Powered Analysis',
      description: 'Cutting-edge machine learning models for accurate content verification.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1'
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      title: 'Global Coverage',
      description: 'Analyze news from multiple sources and languages worldwide.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      title: 'Trusted Results',
      description: 'Verified by experts and trusted by leading news organizations.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                textShadow: `0 0 20px ${theme.palette.primary.main}50`,
              }}
            >
              About Our Mission
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
            >
              We're dedicated to fighting misinformation using advanced AI technology and promoting media literacy worldwide.
            </Typography>
          </motion.div>

          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: '100%',
              height: 400,
              borderRadius: 4,
              overflow: 'hidden',
              mb: 8,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
                zIndex: 1
              }
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              alt="Mission"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
              }}
            />
          </Box>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    background: 'rgba(21, 22, 50, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.primary.main}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: `1px solid ${theme.palette.primary.main}60`,
                      boxShadow: `0 8px 32px ${theme.palette.primary.main}20`,
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {feature.icon}
                      <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold' }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
