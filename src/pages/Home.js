import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  useTheme, 
  alpha 
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import NewsIcon from '@mui/icons-material/Newspaper';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

const Home = () => {
  const theme = useTheme();

  // Features data
  const features = [
    {
      title: "News Analysis",
      description: "Analyze news articles for bias, credibility, and factual accuracy using our advanced AI technology.",
      icon: <NewsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Fact Verification",
      description: "Verify claims against trusted sources and databases to separate fact from fiction.",
      icon: <VerifiedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Trend Detection",
      description: "Identify patterns in misinformation and stay informed about emerging fake news trends.",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Educational Resources",
      description: "Access guides and resources on how to identify fake news and improve media literacy.",
      icon: <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ 
          py: 8,
          textAlign: 'center'
        }}
      >
        {/* Hero Background with Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50vh',
            zIndex: -1,
            background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, rgba(255,255,255,0) 100%)`,
          }}
        />

        <motion.div variants={itemVariants}>
          {/* Gradient Title */}
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Combat Misinformation with AI
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="h5" 
            component="p"
            sx={{ 
              mb: 5, 
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Our advanced fake news detection system helps you verify information,
            analyze news sources, and make informed decisions about the content you consume.
          </Typography>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            component={RouterLink}
            to="/news-analyzer"
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
              '&:hover': {
                boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
              }
            }}
          >
            Try News Analyzer
          </Button>
        </motion.div>
      </Box>

      {/* Feature Cards */}
      <Box 
        component={motion.div} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ py: 8 }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            mb: 6, 
            fontWeight: 600,
            color: theme.palette.primary.main
          }}
        >
          Our Features
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 } 
                }}
              >
                <Card 
                  elevation={2}
                  sx={{ 
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.15)}`
                    }
                  }}
                >
                  {/* Card Header Gradient */}
                  <Box 
                    sx={{ 
                      height: 6, 
                      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.light} 100%)`
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      {feature.icon}
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ 
                          ml: 2, 
                          fontWeight: 600,
                          color: theme.palette.primary.dark
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ 
          py: 8, 
          textAlign: 'center',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          borderRadius: 4,
          mb: 8,
          p: 5
        }}
      >
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.dark }}
          >
            Ready to Verify Your News?
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              maxWidth: 700, 
              mx: 'auto',
              color: theme.palette.text.secondary
            }}
          >
            Start using our AI-powered tools to analyze news articles, detect bias, and verify facts.
            Join the fight against misinformation today.
          </Typography>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              mr: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
            }}
          >
            Sign Up Now
          </Button>
          <Button
            component={RouterLink}
            to="/news-analyzer"
            variant="outlined"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
            }}
          >
            Try Demo
          </Button>
        </motion.div>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 3,
          textAlign: 'center',
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Fake News Detector. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
