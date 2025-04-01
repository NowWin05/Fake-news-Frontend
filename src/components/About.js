import React from 'react';
import { Container, Typography, Box, Grid, useTheme, Card, alpha, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
  const theme = useTheme();

  // Array of features to display in the grid
  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 30, color: '#ffffff' }} />,
      title: 'Advanced Security',
      description: 'State-of-the-art algorithms to detect sophisticated fake news patterns.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 30, color: '#ffffff' }} />,
      title: 'AI-Powered Analysis',
      description: 'Cutting-edge machine learning models for accurate content verification.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1'
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 30, color: '#ffffff' }} />,
      title: 'Global Coverage',
      description: 'Analyze news from multiple sources and languages worldwide.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 30, color: '#ffffff' }} />,
      title: 'Trusted Results',
      description: 'Verified by experts and trusted by leading news organizations.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
    }
  ];

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variants for individual feature items animation
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
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                textShadow: `0 0 20px ${alpha('#2c7fb8', 0.3)}`
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

          {/* Banner image */}
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: '100%',
              height: 250,
              borderRadius: 4,
              overflow: 'hidden',
              mb: 8,
              position: 'relative',
              border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
              boxShadow: `0 10px 30px ${alpha('#2c7fb8', 0.1)}`
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
                filter: 'brightness(0.5)',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                zIndex: 10
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
                }}
              >
                Truth Matters
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Features Grid Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
                    '&:hover': {
                      boxShadow: `0 10px 30px ${alpha('#2c7fb8', 0.2)}`
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 6,
                      background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
                    }}
                  />
                  <Box sx={{ p: 3, display: 'flex' }}>
                    <Box
                      sx={{
                        mr: 2,
                        width: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #2c7fb8, #7dcfb6)',
                        boxShadow: `0 4px 10px ${alpha('#2c7fb8', 0.3)}`
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: '#2c7fb8', mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Mission Statement */}
        <motion.div variants={itemVariants}>
          <Card 
            sx={{ 
              mb: 6, 
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
              boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)'
            }}
          >
            <Box 
              sx={{ 
                height: 6,
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
              }}
            />
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#2c7fb8', mb: 3 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                Our platform is built on a foundation of integrity and innovation, with the goal of empowering users to distinguish between credible news and misinformation. We envision a world where every individual has the tools to evaluate the news they consume critically.
              </Typography>
              <Divider sx={{ my: 3, borderColor: alpha('#2c7fb8', 0.1) }} />
              <Grid container spacing={4} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 10, 
                        height: 10, 
                        borderRadius: '50%', 
                        bgcolor: '#2c7fb8', 
                        mr: 2 
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#2c7fb8', fontWeight: 500 }}>
                      Accuracy & Truth
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ pl: 4 }}>
                    We prioritize factual accuracy and transparent reporting in our analysis methodologies.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 10, 
                        height: 10, 
                        borderRadius: '50%', 
                        bgcolor: '#2c7fb8', 
                        mr: 2 
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#2c7fb8', fontWeight: 500 }}>
                      Education & Awareness
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ pl: 4 }}>
                    We believe in building an informed society through media literacy and critical thinking.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
