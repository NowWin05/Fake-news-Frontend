import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const CredibilityFactor = ({ label, value = 0, color }) => (
  <Box sx={{ mb: 2 }}> {/* Container for individual credibility factor */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      {/* Display label and value in percentage for each factor */}
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" color="primary">
        {value}% {/* Display the value as a percentage */}
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8, // Set the height of the progress bar
        borderRadius: 4, // Round the corners of the progress bar
        backgroundColor: 'rgba(255, 215, 0, 0.1)', // Background color of the progress bar
        '& .MuiLinearProgress-bar': {
          background: `linear-gradient(90deg, ${color} 0%, #FFD700 100%)`, // Gradient background for the progress bar
          borderRadius: 4,
        },
      }}
    />
  </Box>
);

const CredibilityBreakdown = ({ factors = [] }) => {
  const validFactors = Array.isArray(factors) ? factors : []; // Ensure factors is an array

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ duration: 0.5 }} // Duration of animation
    >
      <Card sx={{ mt: 3 }}> {/* Card container for the credibility breakdown */}
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Credibility Breakdown {/* Title for the card */}
          </Typography>
          {validFactors.map((factor, index) => (
            <CredibilityFactor
              key={factor.label || index} // Use either the label or index as a unique key
              label={factor.label || `Factor ${index + 1}`} // Display label or a default factor label
              value={factor.value || 0} // Display value or default to 0
              color={factor.color || '#FFD700'} // Use provided color or default to gold
            />
          ))}
          <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(255, 215, 0, 0.05)', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Overall Score {/* Display the overall credibility score */}
            </Typography>
            <Typography variant="h4" sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #C0A960 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {validFactors.length > 0
                ? Math.round(validFactors.reduce((acc, factor) => acc + (factor.value || 0), 0) / validFactors.length)
                : 0}% {/* Calculate and display the average score */}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CredibilityBreakdown;
