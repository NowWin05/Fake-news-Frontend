import React from 'react';
import { Box, Card, CardContent, Typography, Rating } from '@mui/material';
import { Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReputationMetric = ({ label, value, maxValue = 5 }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    <Rating
      value={value}
      max={maxValue}
      readOnly
      icon={<Star sx={{ color: '#FFD700' }} />}
      emptyIcon={<Star sx={{ color: 'rgba(255, 215, 0, 0.2)' }} />}
    />
  </Box>
);

const SourceReputation = ({ reputation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Source Reputation Analysis
          </Typography>
          
          <Box sx={{ 
            p: 3, 
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}>
            <Typography variant="h5" gutterBottom sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #C0A960 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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

            <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(255, 215, 0, 0.05)', borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Overall Reputation Score
              </Typography>
              <Typography variant="h4" sx={{
                background: 'linear-gradient(45deg, #FFD700 30%, #C0A960 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {Math.round(
                  (reputation.accuracy + 
                   reputation.factChecking + 
                   reputation.editorialStandards + 
                   reputation.transparency) / 4 * 20
                )}%
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
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.2)',
                    }}
                  >
                    <Typography variant="body2" color="primary">
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
