import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';

const CredibilityFactor = ({ label, value = 0, color }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          '& .MuiLinearProgress-bar': {
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};

const CredibilityBreakdown = ({ factors = [] }) => {
  const theme = useTheme();
  const validFactors = Array.isArray(factors) ? factors : [];

  // Calculate overall score
  const overallScore = validFactors.length > 0
    ? Math.round(validFactors.reduce((acc, factor) => acc + (factor.value || 0), 0) / validFactors.length)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            Credibility Breakdown
          </Typography>
          
          {validFactors.map((factor, index) => (
            <CredibilityFactor
              key={factor.label || index}
              label={factor.label || `Factor ${index + 1}`}
              value={factor.value || 0}
              color={factor.color || theme.palette.primary.main}
            />
          ))}
          
          <Box 
            sx={{ 
              mt: 3, 
              p: 2, 
              bgcolor: alpha(theme.palette.primary.main, 0.05), 
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Overall Score
            </Typography>
            <Typography 
              variant="h4" 
              sx={{
                fontWeight: 600,
                color: overallScore > 70 
                  ? theme.palette.success.main 
                  : overallScore > 40 
                    ? theme.palette.warning.main 
                    : theme.palette.error.main,
              }}
            >
              {overallScore}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CredibilityBreakdown;
