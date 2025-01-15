import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const CredibilityFactor = ({ label, value = 0, color }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" color="primary">
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        '& .MuiLinearProgress-bar': {
          background: `linear-gradient(90deg, ${color} 0%, #FFD700 100%)`,
          borderRadius: 4,
        },
      }}
    />
  </Box>
);

const CredibilityBreakdown = ({ factors = [] }) => {
  const validFactors = Array.isArray(factors) ? factors : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Credibility Breakdown
          </Typography>
          {validFactors.map((factor, index) => (
            <CredibilityFactor
              key={factor.label || index}
              label={factor.label || `Factor ${index + 1}`}
              value={factor.value || 0}
              color={factor.color || '#FFD700'}
            />
          ))}
          <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(255, 215, 0, 0.05)', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Overall Score
            </Typography>
            <Typography variant="h4" sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #C0A960 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {validFactors.length > 0
                ? Math.round(validFactors.reduce((acc, factor) => acc + (factor.value || 0), 0) / validFactors.length)
                : 0}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CredibilityBreakdown;
