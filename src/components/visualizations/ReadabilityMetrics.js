import React from 'react';
import { Box, Card, CardContent, Typography, Divider, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuBook, TextFields, FormatListBulleted } from '@mui/icons-material';

/**
 * ReadabilityMetrics Component
 * 
 * Displays readability statistics about the analyzed content:
 * - Readability score
 * - Average word length
 * - Average sentence length
 * - Complexity classification
 */
const ReadabilityMetrics = ({ metrics = {} }) => {
  const theme = useTheme();
  
  // Extract values with fallbacks
  const { 
    readabilityScore = 0, 
    averageWordLength = 0, 
    averageSentenceLength = 0
  } = metrics;
  
  // Helper to determine readability level text and color
  const getReadabilityLevel = (score) => {
    if (score >= 80) return { label: 'Academic/Professional', color: theme.palette.info.dark };
    if (score >= 60) return { label: 'Advanced', color: theme.palette.info.main };
    if (score >= 40) return { label: 'Moderate', color: theme.palette.success.main };
    if (score >= 20) return { label: 'Easy', color: theme.palette.success.light };
    return { label: 'Very Easy', color: theme.palette.success.light };
  };
  
  const readabilityLevel = getReadabilityLevel(readabilityScore);
  
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
            background: 'linear-gradient(90deg, #2c7fb8 0%, #5aa7de 100%)'
          }}
        />
        
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: '#2c7fb8',
              display: 'flex',
              alignItems: 'center',
              pb: 1,
              mb: 2,
              borderBottom: '1px solid rgba(0, 119, 182, 0.1)'
            }}
          >
            <MenuBook sx={{ mr: 1 }} fontSize="small" />
            Readability Analysis
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}
          >
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Box 
                sx={{ 
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 1,
                  background: `conic-gradient(${readabilityLevel.color} ${readabilityScore}%, ${alpha(readabilityLevel.color, 0.2)} ${readabilityScore}% 100%)`,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: '#fff'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h5" fontWeight={600} color={readabilityLevel.color}>
                    {readabilityScore}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="subtitle2" color={readabilityLevel.color} fontWeight={500}>
                {readabilityLevel.label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Complexity
              </Typography>
            </Box>
            
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            
            <Box sx={{ flex: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <TextFields fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                  <Typography variant="body2" color="text.secondary">
                    Average Word Length
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight={500}>
                  {averageWordLength} characters
                </Typography>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <FormatListBulleted fontSize="small" sx={{ mr: 1, color: theme.palette.text.secondary }} />
                  <Typography variant="body2" color="text.secondary">
                    Average Sentence Length
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight={500}>
                  {averageSentenceLength} words
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: alpha(theme.palette.primary.main, 0.05), 
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {readabilityScore > 70 ? (
                "This content uses complex language typical of academic or specialized professional writing."
              ) : readabilityScore > 50 ? (
                "This content uses moderately complex language suitable for educated readers."
              ) : readabilityScore > 30 ? (
                "This content uses straightforward language accessible to most readers."
              ) : (
                "This content uses simple language that is very accessible to general audiences."
              )}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ReadabilityMetrics;