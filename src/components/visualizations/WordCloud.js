import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Box, Card, CardContent, Typography } from '@mui/material';

const WordCloud = ({ words = [] }) => {
  // Ensure words are in the correct format for react-wordcloud
  const formattedWords = Array.isArray(words) ? words.map(word => {
    if (typeof word === 'string') {
      return { text: word, value: 1 };
    }
    return word;
  }) : [];

  const options = {
    colors: ['#FFD700', '#C0A960', '#B29600', '#DFC98C', '#8C7B3A'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'Poppins',
    fontSizes: [12, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Key Terms Analysis
        </Typography>
        <Box sx={{ height: 400 }}>
          {formattedWords.length > 0 ? (
            <ReactWordcloud words={formattedWords} options={options} />
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 10 }}>
              No key terms available
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WordCloud;
