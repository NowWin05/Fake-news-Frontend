import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { Twitter, Facebook, Reddit, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PlatformMetrics = ({ platform, metrics }) => {
  // Mapping of platform names to corresponding icons
  const icons = {
    twitter: Twitter,
    facebook: Facebook,
    reddit: Reddit,
    linkedin: LinkedIn,
  };

  // Get the appropriate icon for the platform
  const Icon = icons[platform.toLowerCase()] || Twitter; // Default to Twitter if the platform is not found

  return (
    <Box
      sx={{
        mb: 2,
        p: 2,
        borderRadius: 2,
        background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%)',
        border: '1px solid rgba(255, 215, 0, 0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ color: '#FFD700', mr: 1 }} /> {/* Display the platform icon */}
        <Typography variant="h6" sx={{ color: '#FFD700' }}>
          {platform}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
        {/* Display various metrics (Shares, Engagement, Sentiment) */}
        <Box>
          <Typography variant="body2" color="text.secondary">
            Shares
          </Typography>
          <Typography variant="h5" sx={{ color: '#C0A960' }}>
            {metrics.shares.toLocaleString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Engagement
          </Typography>
          <Typography variant="h5" sx={{ color: '#C0A960' }}>
            {metrics.engagement.toLocaleString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Sentiment
          </Typography>
          <Typography variant="h5" sx={{ color: '#C0A960' }}>
            {metrics.sentiment}%
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Top Hashtags
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {/* Display top hashtags */}
          {metrics.hashtags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 10,
                bgcolor: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
              }}
            >
              <Typography variant="body2" sx={{ color: '#FFD700' }}>
                #{tag}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// const SocialMediaTracker = ({ data }) => {
//   if (!data) {
//     return <Typography variant="h6">No Social Media Data Available</Typography>;
//   }

const SocialMediaTracker = ({ data }) => {
  console.log("🚀 Received Data in SocialMediaTracker:", data);

  if (!data || Object.keys(data).length === 0) {
    return <Typography variant="h6">No Social Media Data Available</Typography>;
  }


  

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Social Media Impact
          </Typography>

          {/* Ensure socialData.socialMetrics is not undefined before mapping */}
          {/* {Object.entries(data).map(([platform, metrics]) => (
  <PlatformMetrics
    key={platform}
    platform={platform}
    metrics={{
      shares: metrics.shares || 0,
      engagement: metrics.engagement || 0,
      sentiment: metrics.sentiment || 0,
      hashtags: metrics.hashtags || [], // Ensure it's always an array
    }}
  />
))} */}
{Object.entries(data).map(([platform, metrics]) => {
  console.log(`📊 Rendering platform: ${platform}`, metrics);
  return (
    <PlatformMetrics
      key={platform}
      platform={platform}
      metrics={{
        shares: metrics.shares || 0,
        engagement: metrics.engagement || 0,
        sentiment: metrics.sentiment || 0,
        hashtags: metrics.hashtags || [], // Ensure it's always an array
      }}
    />
  );
})}



          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Share Analysis
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Tooltip title="Share on Twitter">
                <IconButton sx={{ color: '#FFD700' }}>
                  <Twitter />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on Facebook">
                <IconButton sx={{ color: '#FFD700' }}>
                  <Facebook />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on Reddit">
                <IconButton sx={{ color: '#FFD700' }}>
                  <Reddit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on LinkedIn">
                <IconButton sx={{ color: '#FFD700' }}>
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
