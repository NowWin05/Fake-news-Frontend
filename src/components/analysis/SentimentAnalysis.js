import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, alpha, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentNeutral } from '@mui/icons-material';

const EmotionMeter = ({ emotion, value }) => {
  const theme = useTheme();
  
  // Updated color scheme to match website theme
  const emotionConfig = {
    positive: {
      colors: ['#2c7fb8', '#7dcfb6'],
      icon: <SentimentSatisfiedAlt sx={{ color: '#ffffff', fontSize: 20 }} />
    },
    negative: {
      colors: ['#d32f2f', '#ef5350'],
      icon: <SentimentVeryDissatisfied sx={{ color: '#ffffff', fontSize: 20 }} />
    },
    neutral: {
      colors: ['#5aa7de', '#00b4d8'],
      icon: <SentimentNeutral sx={{ color: '#ffffff', fontSize: 20 }} />
    }
  };

  const config = emotionConfig[emotion] || emotionConfig.neutral;
  const [primary, secondary] = config.colors;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            backgroundColor: primary, 
            borderRadius: '50%', 
            p: 0.5, 
            mr: 1,
            display: 'flex',
            boxShadow: `0 2px 8px ${alpha(primary, 0.4)}`
          }}>
            {config.icon}
          </Box>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 600, color: primary }}>
          {value}%
        </Typography>
      </Box>
      
      <Box sx={{ position: 'relative', height: '8px', backgroundColor: alpha(primary, 0.15), borderRadius: 4 }}>
        <Tooltip title={`${value}% ${emotion}`} placement="top" arrow>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${primary} 0%, ${secondary} 100%)`,
              borderRadius: '4px',
              boxShadow: `0 2px 8px ${alpha(primary, 0.3)}`,
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

const SentimentAnalysis = ({ sentiment }) => {
  const theme = useTheme();
  
  // Ensure sentiment is an object with required properties
  const validSentiment = {
    positive: sentiment?.positive || 0,
    negative: sentiment?.negative || 0,
    neutral: sentiment?.neutral || 0,
    tone: sentiment?.tone || 'neutral'
  };

  // Use the tone directly from API if available, otherwise calculate
  const dominantSentiment = validSentiment.tone || 
    Object.entries({
      positive: validSentiment.positive,
      negative: validSentiment.negative,
      neutral: validSentiment.neutral
    }).reduce((a, b) => (b[1] > a[1] ? b : a), ['neutral', 0])[0];

  // Get color based on dominant sentiment
  const getDominantColor = () => {
    switch(dominantSentiment) {
      case 'positive': return '#2c7fb8';
      case 'negative': return '#d32f2f';
      default: return '#5aa7de'; // Light blue for neutral
    }
  };

  const getDominantIcon = () => {
    switch(dominantSentiment) {
      case 'positive': return <SentimentSatisfiedAlt sx={{ fontSize: 40, color: getDominantColor() }} />;
      case 'negative': return <SentimentVeryDissatisfied sx={{ fontSize: 40, color: getDominantColor() }} />;
      default: return <SentimentNeutral sx={{ fontSize: 40, color: getDominantColor() }} />;
    }
  };

  return (
    <Card 
      elevation={2}
      sx={{ 
        mt: 3, 
        borderRadius: 2,
        background: '#ffffff',
        boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
        border: '1px solid rgba(0, 119, 182, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Gradient header bar */}
      <Box 
        sx={{ 
          height: 6, 
          background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
        }}
      />
      
      <CardContent sx={{ p: 3 }}>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 600, 
            color: '#2c7fb8',
            pb: 1,
            mb: 3,
            borderBottom: '1px solid rgba(0, 119, 182, 0.1)'
          }}
        >
          Sentiment Analysis
        </Typography>
        
        <Box sx={{ mt: 3, mb: 4 }}>
          {/* Only render emotions that are part of the sentiment metrics (positive, negative, neutral) */}
          {['positive', 'negative', 'neutral'].map((emotion) => (
            <EmotionMeter 
              key={emotion} 
              emotion={emotion} 
              value={validSentiment[emotion]} 
            />
          ))}
        </Box>
        
        <Box
          sx={{
            p: 3,
            mt: 2,
            borderRadius: 2,
            background: alpha(theme.palette.primary.main, 0.05),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Overall Tone
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: getDominantColor(),
              }}
            >
              {dominantSentiment.toUpperCase()}
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: alpha(getDominantColor(), 0.1),
            borderRadius: '50%',
            p: 1,
            width: 60,
            height: 60
          }}>
            {getDominantIcon()}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
