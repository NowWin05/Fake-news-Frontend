import React from 'react';
import { Box, Card, CardContent, Typography, Chip, alpha } from '@mui/material';

const WordCloud = ({ words = [] }) => {
  // Ensure words is always a valid array with required properties
  let formattedWords = [];
  
  try {
    if (Array.isArray(words)) {
      formattedWords = words.filter(word => 
        word && 
        typeof word === 'object' && 
        word.text && 
        typeof word.text === 'string' && 
        typeof word.value === 'number'
      );
      
      // If no valid words after filtering, use fallback data
      if (formattedWords.length === 0) {
        formattedWords = [
          { text: 'news', value: 10 },
          { text: 'media', value: 7 },
          { text: 'fact', value: 5 },
          { text: 'accuracy', value: 3 },
          { text: 'journalism', value: 8 },
          { text: 'reporting', value: 6 }
        ];
      }
    } else {
      formattedWords = [
        { text: 'news', value: 10 },
        { text: 'media', value: 7 },
        { text: 'fact', value: 5 },
        { text: 'accuracy', value: 3 }
      ];
    }
  } catch (error) {
    formattedWords = [
      { text: 'news', value: 10 },
      { text: 'media', value: 7 }
    ];
  }

  // Sort words by value (highest first)
  formattedWords.sort((a, b) => b.value - a.value);

  // Get the maximum value for scaling
  const maxValue = formattedWords.length > 0 ? Math.max(...formattedWords.map(word => word.value)) : 10;

  // Calculate font size based on value
  const getFontSize = (value) => {
    return Math.max(14, Math.min(32, 14 + (value / maxValue) * 18));
  };

  // Professional color palette with complementary colors
  const colors = [
    '#2c7fb8', // Primary blue
    '#5aa7de', // Medium blue
    '#7dcfb6', // Teal
    '#00b4d8', // Light blue
    '#0077b6'  // Dark blue
  ];

  // Get color based on index
  const getColor = (index) => colors[index % colors.length];

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
            mb: 2,
            borderBottom: '1px solid rgba(0, 119, 182, 0.1)'
          }}
        >
          Key Terms Analysis
        </Typography>
        
        <Box 
          sx={{ 
            height: 300,
            p: 2,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fcff 100%)'
          }}
        >
          {formattedWords.length > 0 ? (
            <Box 
              sx={{ 
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
              }}
            >
              {formattedWords.map((word, index) => (
                <Box
                  key={`${word.text}-${index}`}
                  sx={{
                    display: 'inline-block',
                    m: 0.75,
                    opacity: 0,
                    animation: 'fadeIn 0.5s forwards',
                    animationDelay: `${index * 0.08}s`,
                    '@keyframes fadeIn': {
                      to: { opacity: 1 }
                    }
                  }}
                >
                  <Chip
                    label={word.text}
                    sx={{
                      fontSize: getFontSize(word.value),
                      fontWeight: word.value > maxValue * 0.7 ? 600 : 400,
                      backgroundColor: getColor(index),
                      color: '#ffffff',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      '&:hover': {
                        transform: 'scale(1.08)',
                        boxShadow: `0 4px 12px ${alpha(getColor(index), 0.25)}`
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="body1" color="#5d7b9a" sx={{ textAlign: 'center' }}>
              No key terms available
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WordCloud;
