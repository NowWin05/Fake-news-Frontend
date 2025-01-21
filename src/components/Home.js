import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';

// FeatureCard component to display individual features
const FeatureCard = ({ icon, title, description, delay, image }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state - start with opacity 0 and moved down by 50 units
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position at 0
      transition={{ delay, duration: 0.5 }} // Staggered delay for animation, with a duration of 0.5 seconds
      whileHover={{ y: -10 }} // On hover, slightly move the card upward
    >
      <Box
        sx={{
          p: 3, // Padding inside the card
          height: '100%', // Full height
          background: 'rgba(21, 22, 50, 0.6)', // Semi-transparent background color
          borderRadius: 2, // Rounded corners
          backdropFilter: 'blur(10px)', // Blur effect on background
          border: '1px solid rgba(0, 242, 255, 0.1)', // Border with semi-transparency
          transition: 'all 0.3s ease', // Smooth transition for hover effects
          position: 'relative',
          overflow: 'hidden', // Ensures content does not overflow beyond the card
          '&:hover': {
            border: '1px solid rgba(0, 242, 255, 0.3)', // Change border color on hover
            boxShadow: `0 8px 32px ${theme.palette.primary.main}30`, // Hover shadow effect
            '& .feature-image': { // Scale effect for image on hover
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        <Box
          className="feature-image" // Class for animated image
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            '& img': { // Style for the image
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.3, // Slight opacity
              transition: 'transform 0.5s ease', // Transition for scale effect
            },
          }}
        >
          <img src={image} alt={title} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${theme.palette.background.default}99, ${theme.palette.background.default})`
            }}
          />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            {icon} {/* Icon passed as a prop */}
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
              {title} {/* Title of the feature */}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {description} {/* Description of the feature */}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme(); // Access the current theme
  const navigate = useNavigate(); // Use navigate hook for routing

  // Array of features for the Home page
  const features = [
    {
      icon: <SearchIcon fontSize="large" />, // Icon for Search
      title: 'Advanced Analysis',
      description: 'Utilize cutting-edge AI to analyze news articles for credibility and bias.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1'
    },
    {
      icon: <VerifiedIcon fontSize="large" />, // Icon for Verified
      title: 'Fact Checking',
      description: 'Cross-reference information with trusted sources and fact-checking databases.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
    },
    {
      icon: <TrendingUpIcon fontSize="large" />, // Icon for Trending
      title: 'Real-time Insights',
      description: 'Get instant analysis of news articles with detailed breakdowns and visualizations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      icon: <SecurityIcon fontSize="large" />, // Icon for Security
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
            background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
            zIndex: -1,
            animation: 'pulse 4s ease-in-out infinite', // Pulsing animation for background
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
            opacity: 0.1,
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
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 0 20px ${theme.palette.primary.main}50`,
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
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              boxShadow: `0 0 20px ${theme.palette.primary.main}50`,
              '&:hover': {
                background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                boxShadow: `0 0 30px ${theme.palette.primary.main}70`,
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
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${theme.palette.background.default}99, ${theme.palette.background.default})`,
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
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
