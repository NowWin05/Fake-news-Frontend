import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Divider, List, ListItem, ListItemText, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { VerifiedOutlined, WarningOutlined, HelpOutline, DescriptionOutlined, FormatQuoteOutlined } from '@mui/icons-material';

/**
 * FakeNewsDetection Component
 * 
 * Displays the results of ML-based fake news detection including:
 * - Probability score
 * - Content type classification
 * - Key linguistic features
 * - Confidence level
 * - Pattern analysis
 */
const FakeNewsDetection = ({ result }) => {
  const theme = useTheme();
  
  // Early return if no results
  if (!result) return null;
  
  // Extract values from result with fallbacks
  const { 
    fakeProbability = 50, 
    isLikelyFake = false,
    confidence = 50,
    contentType = 'UNKNOWN',
    keyFeatures = [],
    readabilityMetrics = "N/A",
    patternAnalysis = {},
    message = ''
  } = result;
  
  // Content type display configuration
  const contentTypeConfig = {
    'NEWS': { label: 'News Article', color: theme.palette.primary.main, icon: <DescriptionOutlined /> },
    'OPINION': { label: 'Opinion Piece', color: theme.palette.warning.main, icon: <FormatQuoteOutlined /> },
    'SATIRE': { label: 'Satire', color: theme.palette.info.main, icon: <FormatQuoteOutlined /> },
    'POTENTIAL_SATIRE': { label: 'Likely Satire', color: theme.palette.info.main, icon: <FormatQuoteOutlined /> },
    'CLICKBAIT': { label: 'Clickbait', color: theme.palette.error.light, icon: <WarningOutlined /> },
    'UNKNOWN': { label: 'Unknown Type', color: theme.palette.grey[500], icon: <HelpOutline /> }
  };
  
  // Configure current content type
  const currentType = contentTypeConfig[contentType] || contentTypeConfig['UNKNOWN'];
  
  // Determine credibility status
  const getCredibilityStatus = () => {
    if (fakeProbability >= 70) return { label: 'Potentially Misleading', color: theme.palette.error.main, icon: <WarningOutlined /> };
    if (fakeProbability >= 40) return { label: 'Exercise Caution', color: theme.palette.warning.main, icon: <HelpOutline /> };
    return { label: 'Likely Credible', color: theme.palette.success.main, icon: <VerifiedOutlined /> };
  };
  
  const credibilityStatus = getCredibilityStatus();
  
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
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
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
            AI-Powered Detection Results
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            {/* Main credibility assessment */}
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Box 
                sx={{ 
                  borderRadius: '50%', 
                  bgcolor: alpha(credibilityStatus.color, 0.1),
                  color: credibilityStatus.color,
                  p: 1,
                  mr: 2,
                  display: 'flex'
                }}
              >
                {credibilityStatus.icon}
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600} color={credibilityStatus.color}>
                  {credibilityStatus.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {message}
                </Typography>
              </Box>
            </Box>
            
            {/* Content type indicator */}
            <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
              <Chip 
                icon={currentType.icon}
                label={`Content Type: ${currentType.label}`}
                size="small"
                sx={{ 
                  bgcolor: alpha(currentType.color, 0.1), 
                  color: currentType.color,
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: currentType.color }
                }} 
              />
            </Box>
            
            {/* Metrics */}
            <Box 
              sx={{ 
                display: 'flex', 
                mb: 3,
                '& > div': {
                  flex: 1,
                  textAlign: 'center',
                  p: 1
                }
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={600} color={isLikelyFake ? theme.palette.error.main : theme.palette.success.main}>
                  {fakeProbability}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Misleading Score
                </Typography>
              </Box>
              
              <Divider orientation="vertical" flexItem />
              
              <Box>
                <Typography variant="h5" fontWeight={600} color={theme.palette.primary.main}>
                  {confidence}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Model Confidence
                </Typography>
              </Box>
              
              <Divider orientation="vertical" flexItem />
              
              <Box>
                <Typography variant="h5" fontWeight={600} color={theme.palette.info.main}>
                  {readabilityMetrics || 'N/A'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Readability
                </Typography>
              </Box>
            </Box>
            
            {/* Linguistic features */}
            {keyFeatures.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.primary" gutterBottom>
                  Key Linguistic Features
                </Typography>
                <List dense disablePadding>
                  {keyFeatures.slice(0, 5).map((feature, idx) => (
                    <ListItem 
                      key={idx} 
                      dense 
                      disableGutters
                      sx={{ 
                        py: 0.5, 
                        px: 1,
                        borderLeft: `3px solid ${feature.effect === 'CREDIBILITY' 
                          ? theme.palette.success.main 
                          : feature.effect === 'SKEPTICISM'
                            ? theme.palette.error.light
                            : theme.palette.grey[400]
                        }`,
                        mb: 0.5,
                        bgcolor: alpha(theme.palette.background.paper, 0.5)
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant="body2" fontWeight={500}>
                            {feature.term}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {feature.explanation || 'Key feature in analysis'}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            
            {/* Pattern matches if available */}
            {patternAnalysis && patternAnalysis.fakeNewsPatterns && patternAnalysis.fakeNewsPatterns.length > 0 && (
              <Box 
                sx={{ 
                  p: 1.5, 
                  bgcolor: alpha(theme.palette.error.main, 0.05), 
                  borderRadius: 1,
                  border: `1px solid ${alpha(theme.palette.error.main, 0.1)}`
                }}
              >
                <Typography variant="subtitle2" color={theme.palette.error.main} gutterBottom>
                  Detected Patterns of Concern
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {patternAnalysis.fakeNewsPatterns.map((pattern, idx) => (
                    <Chip 
                      key={idx}
                      label={pattern.category.replace(/_/g, ' ')}
                      size="small"
                      sx={{ 
                        bgcolor: alpha(theme.palette.error.main, 0.1),
                        color: theme.palette.error.main,
                        fontSize: '0.7rem'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FakeNewsDetection;