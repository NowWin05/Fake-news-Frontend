import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';

// FeatureCard component to display individual features
const FeatureCard = ({ icon, title, description, delay, image }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          background: alpha('#ffffff', 0.9),
          borderRadius: 2,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
          '&:hover': {
            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
            boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.2)}`,
            '& .feature-image': {
              transform: 'scale(1.1)',
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
          }
        }}
      >
        <Box
          className="feature-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.05,
              transition: 'transform 0.5s ease',
            },
          }}
        >
          <img src={image} alt={title} />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Box sx={{ 
              color: 'white',
              backgroundColor: '#2c7fb8',
              p: 1,
              borderRadius: 1,
              display: 'flex',
              boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.3)}`
            }}>
              {icon}
            </Box>
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 600, color: '#2c7fb8' }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Array of features for the Home page
  const features = [
    {
      icon: <SearchIcon fontSize="large" />,
      title: 'Advanced Analysis',
      description: 'Utilize cutting-edge AI to analyze news articles for credibility and bias.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1'
    },
    {
      icon: <VerifiedIcon fontSize="large" />,
      title: 'Fact Checking',
      description: 'Cross-reference information with trusted sources and fact-checking databases.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: 'Real-time Insights',
      description: 'Get instant analysis of news articles with detailed breakdowns and visualizations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Secure Analysis',
      description: 'Your data is protected with state-of-the-art security measures.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200%',
            height: '400px',
            background: `radial-gradient(circle, ${alpha('#2c7fb8', 0.1)} 0%, transparent 70%)`,
            zIndex: -1,
            animation: 'pulse 4s ease-in-out infinite',
          },
          '@keyframes pulse': {
            '0%': { opacity: 0.5 },
            '50%': { opacity: 0.8 },
            '100%': { opacity: 0.5 },
          }
        }}
      >
        {/* Background Image with fade effect */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            left: 0,
            right: 0,
            height: '500px',
            background: `url(https://images.unsplash.com/photo-1516110833967-0b5716ca1387)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05,
            zIndex: -1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 0 20px ${alpha('#2c7fb8', 0.3)}`,
            }}
          >
            Detect Fake News
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ 
              mb: 4, 
              maxWidth: 800, 
              mx: 'auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Harness the power of AI to analyze news articles and detect potential misinformation
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/analyze')}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              borderRadius: 2,
              background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
              boxShadow: `0 4px 15px ${alpha('#2c7fb8', 0.3)}`,
              '&:hover': {
                background: 'linear-gradient(90deg, #2c7fb8 20%, #7dcfb6 120%)',
                boxShadow: `0 6px 20px ${alpha('#2c7fb8', 0.4)}`,
              }
            }}
          >
            Start Analyzing
          </Button>
        </motion.div>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={feature.title}>
            <FeatureCard {...feature} delay={0.6 + index * 0.2} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 12, mb: 8, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <Box
            sx={{
              position: 'relative',
              height: 400,
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
              boxShadow: `0 10px 30px ${alpha('#2c7fb8', 0.15)}`,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha('#ffffff', 0.92)}, ${alpha('#ffffff', 0.97)})`,
                zIndex: 1,
              }
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              alt="News Analysis"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.3)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '8px',
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 2,
                width: '100%',
                px: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Stay Informed, Stay Safe
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Our AI-powered system helps you make informed decisions about the news you consume
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
