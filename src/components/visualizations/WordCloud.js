import React from 'react';
import ReactWordcloud from 'react-wordcloud'; // Import the WordCloud library
import { Box, Card, CardContent, Typography } from '@mui/material'; // Import Material-UI components

// Define the WordCloud component
const WordCloud = ({ words = [] }) => {
  // Ensure words are in the correct format for react-wordcloud
  const formattedWords = Array.isArray(words) ? words.map(word => {
    if (typeof word === 'string') {
      return { text: word, value: 1 }; // Map string words to objects with 'text' and 'value'
    }
    return word; // Return existing objects if already in the correct format
  }) : []; // Default to empty array if words is not an array

  // Options for customizing the WordCloud appearance
  const options = {
    colors: ['#FFD700', '#C0A960', '#B29600', '#DFC98C', '#8C7B3A'], // Custom color palette for the words
    enableTooltip: true, // Enable tooltips for individual words
    deterministic: false, // Enable deterministic rendering
    fontFamily: 'Poppins', // Font family for the words
    fontSizes: [12, 60], // Font size range
    fontStyle: 'normal', // Font style (e.g., italic, normal)
    fontWeight: 'normal', // Font weight (e.g., normal, bold)
    padding: 1, // Padding between words
    rotations: 3, // Number of rotations for each word
    rotationAngles: [0, 90], // Angles for rotations (e.g., 0 or 90 degrees)
    scale: 'sqrt', // Scaling function
    spiral: 'archimedean', // Spiral shape of the word cloud
    transitionDuration: 1000, // Duration for transitions/animations
  };

  return (
    <Card sx={{ mt: 3 }}> {/* Card to contain the WordCloud component */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Key Terms Analysis {/* Title for the WordCloud card */}
        </Typography>
        <Box sx={{ height: 400 }}> {/* Box to hold the WordCloud visualization */}
          {formattedWords.length > 0 ? (
            <ReactWordcloud words={formattedWords} options={options} /> // Render WordCloud if words are available
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 10 }}>
              No key terms available {/* Message displayed when no words are available */}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WordCloud;
