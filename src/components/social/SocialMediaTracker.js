import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Tooltip, useTheme, alpha } from '@mui/material';
import { Twitter, Facebook, Reddit, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PlatformMetrics = ({ platform, metrics }) => {
  const theme = useTheme();
  
  // Mapping of platform names to corresponding icons
  const icons = {
    twitter: Twitter,
    facebook: Facebook,
    reddit: Reddit,
    linkedin: LinkedIn,
  };

  // Get the appropriate icon for the platform
  const Icon = icons[platform.toLowerCase()] || Twitter;

  // Platform-specific colors that complement the theme
  const platformColors = {
    twitter: '#2c7fb8',
    facebook: '#0077b6',
    reddit: '#5aa7de',
    linkedin: '#00b4d8',
  };

  const platformColor = platformColors[platform.toLowerCase()] || theme.palette.primary.main;

  return (
    <Box
      sx={{
        mb: 2,
        p: 2,
        borderRadius: 2,
        background: alpha(theme.palette.background.paper, 0.8),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ color: platformColor, mr: 1 }} />
        <Typography variant="h6" sx={{ color: platformColor, fontWeight: 600 }}>
          {platform}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Shares
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
            {metrics.shares.toLocaleString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Engagement
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
            {metrics.engagement.toLocaleString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Sentiment
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
            {metrics.sentiment}%
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Top Hashtags
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {metrics.hashtags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 10,
                bgcolor: alpha(platformColor, 0.1),
                border: `1px solid ${alpha(platformColor, 0.2)}`,
              }}
            >
              <Typography variant="body2" sx={{ color: platformColor }}>
                #{tag}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const SocialMediaTracker = ({ data }) => {
  const theme = useTheme();

  if (!data || Object.keys(data).length === 0) {
    return (
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
        <Box sx={{ height: 6, background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)' }} />
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
            No Social Media Data Available
          </Typography>
        </CardContent>
      </Card>
    );
  }

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
            Social Media Impact
          </Typography>

          {Object.entries(data).map(([platform, metrics]) => (
            <PlatformMetrics
              key={platform}
              platform={platform}
              metrics={{
                shares: metrics.shares || 0,
                engagement: metrics.engagement || 0,
                sentiment: metrics.sentiment || 0,
                hashtags: metrics.hashtags || [],
              }}
            />
          ))}

          <Box 
            sx={{ 
              mt: 3, 
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.05)
            }}
          >
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Share Analysis
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Tooltip title="Share on Twitter">
                <IconButton sx={{ color: '#2c7fb8' }}>
                  <Twitter />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on Facebook">
                <IconButton sx={{ color: '#0077b6' }}>
                  <Facebook />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on Reddit">
                <IconButton sx={{ color: '#5aa7de' }}>
                  <Reddit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on LinkedIn">
                <IconButton sx={{ color: '#00b4d8' }}>
                  <LinkedIn />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SocialMediaTracker;
