import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  Alert,
  Grid,
  Divider,
  useTheme,
} from '@mui/material'; // Import necessary components and hooks from Material-UI
import { Link as LinkIcon, Title, Description, Search } from '@mui/icons-material'; // Import icons for tabs
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion for animations
import WordCloud from './visualizations/WordCloud'; // Import custom visualizations
import BiasCompass from './visualizations/BiasCompass';
import CredibilityBreakdown from './visualizations/CredibilityBreakdown';
import SentimentAnalysis from './analysis/SentimentAnalysis';
import SourceReputation from './analysis/SourceReputation';
import SocialMediaTracker from './social/SocialMediaTracker';
import EducationalResources from './educational/EducationalResources';
import { analyzeNews } from '../utils/api'; // Import API function to analyze news

// Animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state: fully transparent and slightly moved down
  visible: {
    opacity: 1, // Fully visible
    y: 0, // Centered vertically
    transition: {
      duration: 0.5, // Duration of animation
      when: 'beforeChildren', // Children animations follow after parent
      staggerChildren: 0.1, // Adds stagger to child animations
    },
  },
  exit: {
    opacity: 0, // Fading out
    y: -20, // Moving up during exit
    transition: {
      duration: 0.3, // Duration of exit animation
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, x: -20 }, // Start with opacity 0 and shifted to the left
  visible: {
    opacity: 1, // Fully visible
    x: 0, // Centered horizontally
    transition: { duration: 0.3 }, // Duration of animation
  },
};

/**
 * NewsAnalyzer Component
 * 
 * Main component for analyzing news articles using various methods (URL, title, or content).
 * 
 * Features:
 * - Multiple input methods via tabs
 * - Real-time analysis
 * - Visual feedback during analysis
 * - Comprehensive results display
 */
const NewsAnalyzer = () => {
  const theme = useTheme(); // Get current theme using Material-UI's useTheme hook
  const [activeTab, setActiveTab] = useState(0); // State to manage the active tab index
  const [url, setUrl] = useState(''); // State for URL input
  const [title, setTitle] = useState(''); // State for Title input
  const [content, setContent] = useState(''); // State for Content input
  const [loading, setLoading] = useState(false); // Loading state for analysis
  const [error, setError] = useState(''); // Error state
  const [result, setResult] = useState(null); // Analysis result state

  // Tab configuration for input methods
  const tabs = [
    { icon: <LinkIcon />, label: 'URL', value: url, setter: setUrl, placeholder: 'https://example.com/news-article' },
    { icon: <Title />, label: 'Title', value: title, setter: setTitle, placeholder: 'Enter the news title' },
    { icon: <Description />, label: 'Content', value: content, setter: setContent, placeholder: 'Enter the news content' },
  ];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Update active tab
    setError(''); // Clear previous errors
    setResult(null); // Clear previous results
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   setError(''); // Clear previous errors
  //   setResult(null); // Clear previous results
  //   setLoading(true); // Set loading state

  //   try {
  //     const data = {
  //       url: activeTab === 0 ? url : '', // Use URL if active tab is 0
  //       title: activeTab === 1 ? title : '', // Use title if active tab is 1
  //       content: activeTab === 2 ? content : '', // Use content if active tab is 2
  //     };

  //     const response = await analyzeNews(data); // Analyze news using API
  //     setResult(response); // Update result state with API response
  //   } catch (err) {
  //     setError(err.message || 'An error occurred while analyzing the news'); // Set error message if any
  //   } finally {
  //     setLoading(false); // Reset loading state
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null); // Reset previous result
    setLoading(true);
  
    try {
      const data = {
        url: activeTab === 0 ? url : '',
        title: activeTab === 1 ? title : '',
        content: activeTab === 2 ? content : '',
      };
  
      const response = await analyzeNews(data);
      console.log("API Raw Response:", response); // 🔍 Debug API response
  
      if (!response) {
        throw new Error("No response from API");
      }
  
      setResult(response);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message || "An error occurred while analyzing the news");
    } finally {
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   if (result?.socialMetrics) {
  //     console.log("Social Media Data:", result.socialMetrics);
  //   } else {
  //     console.log("Social Media Data is undefined");
  //   }
  // }, [result]);
  // useEffect(() => {
  //   console.log("Full API Response:", result);
  // }, [result]);

  return (
    <motion.div
      variants={containerVariants} // Animation for container
      initial="hidden" // Start with hidden state
      animate="visible" // Animate to visible state
      exit="exit" // Exit animation
    >
      <Card 
        sx={{ 
          maxWidth: 1200, 
          mx: 'auto', 
          mt: 4, 
          position: 'relative',
          overflow: 'visible', 
          '&::before': { // Background overlay styling
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '14px',
            zIndex: -1,
            opacity: 0.5, // Semi-transparent background
            filter: 'blur(8px)', // Blur effect
          }
        }}
      >
        <CardContent>
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              sx={{
                textAlign: 'center',
                mb: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                letterSpacing: '0.2rem',
                textShadow: '0 0 20px rgba(0, 242, 255, 0.5)',
              }}
            >
              News Analyzer
            </Typography>
          </motion.div>

          {/* Tabs Section */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              centered 
              sx={{ 
                '& .MuiTabs-indicator': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  height: 3,
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  minWidth: 120,
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: theme.palette.primary.light,
                  },
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  label={tab.label}
                  sx={{
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Input Form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <TextField
                  fullWidth
                  label={tabs[activeTab].label}
                  value={tabs[activeTab].value}
                  onChange={(e) => tabs[activeTab].setter(e.target.value)}
                  placeholder={tabs[activeTab].placeholder}
                  multiline={activeTab === 2}
                  rows={activeTab === 2 ? 4 : 1}
                  sx={{ mb: 2 }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <Search />}
                sx={{ 
                  mb: 2,
                  height: 48,
                  fontSize: '1.1rem',
                }}
              >
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </motion.div>
          </motion.form>

          {/* Error Display */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Section */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={3}>
                    {/* Credibility Analysis */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <CredibilityBreakdown data={result.credibility} />
                      </motion.div>
                    </Grid>

                    {/* Sentiment Analysis */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <SentimentAnalysis data={result.sentiment} />
                      </motion.div>
                    </Grid>

                    {/* Bias Compass */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <BiasCompass data={result.bias} />
                      </motion.div>
                    </Grid>

                    {/* Social Media Tracker */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                      <SocialMediaTracker data={result.socialMetrics} />
                      {/* {console.log("Passing Social Media Data to Tracker:", result.socialMetrics)} */}

                        
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsAnalyzer;
