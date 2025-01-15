import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const EmotionMeter = ({ emotion, value }) => {
  const colors = {
    positive: ['#4CAF50', '#81C784'],
    negative: ['#f44336', '#e57373'],
    neutral: ['#FFD700', '#C0A960'],
  };

  const [primary, secondary] = colors[emotion] || colors.neutral;

  return (
    <Box sx={{ mb: 2 }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Box
          sx={{
            height: '30px',
            background: `linear-gradient(90deg, ${primary} 0%, ${secondary} 100%)`,
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `0 0 10px ${primary}40`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}: {value}%
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const SentimentAnalysis = ({ sentiments = { positive: 0, negative: 0, neutral: 0 } }) => {
  // Ensure sentiments is an object with required properties
  const validSentiments = {
    positive: sentiments?.positive || 0,
    negative: sentiments?.negative || 0,
    neutral: sentiments?.neutral || 0,
  };

  // Find the dominant sentiment safely
  const dominantSentiment = Object.entries(validSentiments)
    .reduce((a, b) => (b[1] > a[1] ? b : a), ['neutral', 0])[0];

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sentiment Analysis
        </Typography>
        <Box sx={{ mt: 2 }}>
          {Object.entries(validSentiments).map(([emotion, value]) => (
            <EmotionMeter key={emotion} emotion={emotion} value={value} />
          ))}
        </Box>
        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Overall Tone
          </Typography>
          <Typography
            variant="h5"
            sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #C0A960 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {dominantSentiment.toUpperCase()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
