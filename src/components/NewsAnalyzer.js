import React, { useState } from 'react';
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
} from '@mui/material';
import { Link as LinkIcon, Title, Description, Search } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import WordCloud from './visualizations/WordCloud';
import BiasCompass from './visualizations/BiasCompass';
import CredibilityBreakdown from './visualizations/CredibilityBreakdown';
import SentimentAnalysis from './analysis/SentimentAnalysis';
import SourceReputation from './analysis/SourceReputation';
import SocialMediaTracker from './social/SocialMediaTracker';
import EducationalResources from './educational/EducationalResources';
import { analyzeNews } from '../utils/api';

// Animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

/**
 * NewsAnalyzer Component
 * Main component for analyzing news articles using various methods (URL, title, or content)
 * Features:
 * - Multiple input methods via tabs
 * - Real-time analysis
 * - Visual feedback during analysis
 * - Comprehensive results display
 */
const NewsAnalyzer = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  // Tab configuration
  const tabs = [
    { icon: <LinkIcon />, label: 'URL', value: url, setter: setUrl, placeholder: 'https://example.com/news-article' },
    { icon: <Title />, label: 'Title', value: title, setter: setTitle, placeholder: 'Enter the news title' },
    { icon: <Description />, label: 'Content', value: content, setter: setContent, placeholder: 'Enter the news content' },
  ];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError('');
    setResult(null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const data = {
        url: activeTab === 0 ? url : '',
        title: activeTab === 1 ? title : '',
        content: activeTab === 2 ? content : '',
      };

      const response = await analyzeNews(data);
      setResult(response);
    } catch (err) {
      setError(err.message || 'An error occurred while analyzing the news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Card 
        sx={{ 
          maxWidth: 1200, 
          mx: 'auto', 
          mt: 4,
          position: 'relative',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '14px',
            zIndex: -1,
            opacity: 0.5,
            filter: 'blur(8px)',
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
                        <CredibilityBreakdown
                          factors={[
                            { label: 'Source Reliability', value: result?.sourceReliability || 0, color: theme.palette.primary.main },
                            { label: 'Content Analysis', value: result?.contentScore || 0, color: theme.palette.secondary.main },
                            { label: 'Fact Verification', value: result?.factScore || 0, color: theme.palette.primary.light },
                            { label: 'Language Analysis', value: result?.languageScore || 0, color: theme.palette.secondary.light },
                          ]}
                        />
                      </motion.div>
                    </Grid>

                    {/* Bias Analysis */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <BiasCompass bias={result?.bias || 0} />
                      </motion.div>
                    </Grid>

                    <Grid item xs={12}>
                      <Divider sx={{ my: 3, borderColor: 'rgba(0, 242, 255, 0.1)' }} />
                    </Grid>

                    {/* Sentiment Analysis */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <SentimentAnalysis
                          sentiments={{
                            positive: result?.sentiment?.positive || 0,
                            negative: result?.sentiment?.negative || 0,
                            neutral: result?.sentiment?.neutral || 0,
                          }}
                        />
                      </motion.div>
                    </Grid>

                    {/* Source Reputation */}
                    <Grid item xs={12} md={6}>
                      <motion.div variants={itemVariants}>
                        <SourceReputation reputation={result?.sourceReputation || {}} />
                      </motion.div>
                    </Grid>

                    {/* Word Cloud */}
                    <Grid item xs={12}>
                      <motion.div variants={itemVariants}>
                        <WordCloud 
                          words={result?.keyTerms ? result.keyTerms.map(term => ({
                            text: term.text || term,
                            value: term.value || 1
                          })) : []} 
                        />
                      </motion.div>
                    </Grid>

                    {/* Social Media Metrics */}
                    <Grid item xs={12}>
                      <motion.div variants={itemVariants}>
                        <SocialMediaTracker socialData={result?.socialMetrics || {}} />
                      </motion.div>
                    </Grid>

                    {/* Educational Resources */}
                    <Grid item xs={12}>
                      <motion.div variants={itemVariants}>
                        <EducationalResources resources={result?.educationalResources || {}} />
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
