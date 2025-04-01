import React from 'react';
import { Box, Card, CardContent, Typography, Rating, useTheme, alpha } from '@mui/material';
import { Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReputationMetric = ({ label, value, maxValue = 5 }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Rating
        value={value}
        max={maxValue}
        readOnly
        icon={<Star sx={{ color: theme.palette.primary.main }} />}
        emptyIcon={<Star sx={{ color: alpha(theme.palette.primary.main, 0.2) }} />}
      />
    </Box>
  );
};

const SourceReputation = ({ reputation }) => {
  const theme = useTheme();
  
  // Calculate overall reputation score
  const overallScore = Math.round(
    (reputation.accuracy + 
     reputation.factChecking + 
     reputation.editorialStandards + 
     reputation.transparency) / 4 * 20
  );

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
            Source Reputation Analysis
          </Typography>
          
          <Box sx={{ 
            p: 3, 
            borderRadius: 2,
            background: alpha(theme.palette.background.paper, 0.8),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}>
            <Typography variant="h5" gutterBottom sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2
            }}>
              {reputation.sourceName}
            </Typography>
            
            <ReputationMetric 
              label="Historical Accuracy"
              value={reputation.accuracy}
            />
            
            <ReputationMetric 
              label="Fact-Checking Score"
              value={reputation.factChecking}
            />
            
            <ReputationMetric 
              label="Editorial Standards"
              value={reputation.editorialStandards}
            />
            
            <ReputationMetric 
              label="Transparency"
              value={reputation.transparency}
            />

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
                Overall Reputation Score
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

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Known For
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {reputation.knownFor.map((tag, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 10,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                      {tag}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SourceReputation;
