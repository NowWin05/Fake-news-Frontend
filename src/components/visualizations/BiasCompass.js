import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const BiasCompass = ({ bias = 0 }) => {
  // Convert bias score to angle (-100 to 100 maps to -180 to 180 degrees)
  const angle = (bias / 100) * 180;

  return (
    <Card sx={{ mt: 3 }}> {/* Card container for Bias Compass component */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Political Bias Compass {/* Title of the card */}
        </Typography>

        <Box
          sx={{
            position: 'relative', 
            width: '300px', 
            height: '300px', 
            margin: '0 auto', 
          }}
        >
          {/* Compass background */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
            }}
          />

          {/* Compass labels */}
          <Typography
            sx={{
              position: 'absolute',
              left: '50%',
              top: '10px',
              transform: 'translateX(-50%)',
              color: '#FFD700',
            }}
          >
            Left {/* Label for the left side of the compass */}
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#FFD700',
            }}
          >
            Right {/* Label for the right side of the compass */}
          </Typography>

          {/* Compass needle */}
          <motion.div
            initial={{ rotate: 0 }} // Starting rotation angle
            animate={{ rotate: angle }} // Animating to the angle based on bias
            transition={{ type: 'spring', stiffness: 50 }} // Spring-like animation effect
            style={{
              position: 'absolute',
              width: '8px',
              height: '140px',
              background: 'linear-gradient(180deg, #FFD700 0%, #C0A960 100%)',
              left: '50%',
              top: '50%',
              transformOrigin: 'bottom center', // Rotation center at the bottom
              borderRadius: '4px',
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            }}
          />

          {/* Center point of the compass */}
          <Box
            sx={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#FFD700',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.7)',
            }}
          />
        </Box>

        {/* Display bias score */}
        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 2, color: '#C0A960' }}
        >
          Bias Score: {bias}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BiasCompass;
