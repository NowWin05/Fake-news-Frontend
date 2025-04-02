import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, alpha, LinearProgress } from '@mui/material';
import { Twitter, Facebook, Instagram, TrendingUp, PublicOutlined, Balance } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Platform-specific metrics component
const PlatformMetrics = ({ platform, metrics }) => {
  const theme = useTheme();
  
  // Ensure metrics is properly defined to prevent errors
  if (!metrics) {
    return null;
  }
  
  // Mapping of platform names to corresponding icons
  const icons = {
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
  };

  // Get the appropriate icon for the platform
  const Icon = icons[platform.toLowerCase()] || Twitter;

  // Platform-specific colors that complement the theme
  const platformColors = {
    twitter: '#2c7fb8',
    facebook: '#0077b6',
    instagram: '#5aa7de',
  };

  const platformColor = platformColors[platform.toLowerCase()] || theme.palette.primary.main;

  // Map the metrics based on platform-specific data
  const metricsDisplay = [];
  
  // Twitter and Facebook have shares
  if ((platform.toLowerCase() === 'twitter' || platform.toLowerCase() === 'facebook') && metrics.shares) {
    metricsDisplay.push({
      label: 'Shares',
      value: typeof metrics.shares === 'number' ? metrics.shares.toLocaleString() : metrics.shares
    });
  }
  
  // All platforms have engagement
  if (metrics.engagement) {
    metricsDisplay.push({
      label: 'Engagement',
      value: typeof metrics.engagement === 'number' ? metrics.engagement.toLocaleString() : metrics.engagement
    });
  }
  
  // All platforms have sentiment
  if (metrics.sentiment) {
    metricsDisplay.push({
      label: 'Sentiment',
      value: `${metrics.sentiment}%`
    });
  }

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
          {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
        {metricsDisplay.map((item, index) => (
          <Box key={index}>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {metrics.hashtags && metrics.hashtags.length > 0 && (
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
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

// Overall metrics component
const OverallMetrics = ({ data }) => {
  const theme = useTheme();
  
  // Ensure data is properly defined to prevent errors
  if (!data) {
    return null;
  }
  
  // Helper function to determine color based on value
  const getColor = (value, type) => {
    if (type === 'virality') {
      return value > 70 ? theme.palette.error.main :
             value > 40 ? theme.palette.warning.main :
             theme.palette.success.main;
    }
    return theme.palette.primary.main;
  };
  
  // Helper function to get polarity label color
  const getPolarityColor = (polarity) => {
    switch (polarity) {
      case 'highly_polarized': return theme.palette.error.main;
      case 'polarized': return theme.palette.warning.main;
      case 'moderate': return theme.palette.info.main;
      case 'balanced': return theme.palette.success.main;
      default: return theme.palette.text.primary;
    }
  };
  
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        background: alpha(theme.palette.primary.light, 0.05),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 2 }}>
        Overall Impact
      </Typography>
      
      {data.viralityScore !== undefined && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TrendingUp sx={{ color: getColor(data.viralityScore, 'virality'), mr: 1, fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Virality Score
            </Typography>
            <Typography variant="body1" sx={{ ml: 'auto', fontWeight: 600, color: getColor(data.viralityScore, 'virality') }}>
              {data.viralityScore}/100
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={data.viralityScore} 
            sx={{ 
              height: 8, 
              borderRadius: 1,
              bgcolor: alpha(getColor(data.viralityScore, 'virality'), 0.1),
              '& .MuiLinearProgress-bar': {
                bgcolor: getColor(data.viralityScore, 'virality'),
              }
            }} 
          />
        </Box>
      )}
      
      {data.publicInterest !== undefined && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PublicOutlined sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Public Interest
            </Typography>
            <Typography variant="body1" sx={{ ml: 'auto', fontWeight: 600, color: theme.palette.primary.main }}>
              {data.publicInterest}/100
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={data.publicInterest} 
            sx={{ 
              height: 8, 
              borderRadius: 1,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              '& .MuiLinearProgress-bar': {
                bgcolor: theme.palette.primary.main,
              }
            }} 
          />
        </Box>
      )}
      
      {data.discussionPolarity && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          p: 1.5,
          borderRadius: 2,
          bgcolor: alpha(getPolarityColor(data.discussionPolarity), 0.05),
          border: `1px solid ${alpha(getPolarityColor(data.discussionPolarity), 0.1)}`
        }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Discussion Polarity:
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              ml: 1, 
              fontWeight: 600, 
              color: getPolarityColor(data.discussionPolarity), 
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {data.discussionPolarity.replace('_', ' ')}
            <Balance sx={{ fontSize: 20, ml: 1 }} />
          </Typography>
        </Box>
      )}
    </Box>
  );
};

// Main component
const SocialMediaTracker = (props) => {
  const theme = useTheme();
  
  // Handle potential prop naming variations (data or socialMetrics)
  const socialMetrics = props.socialMetrics || props.data || {};
  
  // Defensive check for valid social media data
  if (!socialMetrics || typeof socialMetrics !== 'object' || Object.keys(socialMetrics).length === 0) {
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

  console.log("Social media data received:", socialMetrics);
  
  // Get platforms excluding the 'overall' metrics
  const platforms = Object.keys(socialMetrics).filter(key => key !== 'overall');

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
        <Box sx={{ height: 6, background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)' }} />
        
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

          {/* Display platform-specific metrics */}
          {platforms.map(platform => (
            <PlatformMetrics
              key={platform}
              platform={platform}
              metrics={socialMetrics[platform]}
            />
          ))}

          {/* Display overall metrics */}
          {socialMetrics.overall && (
            <OverallMetrics data={socialMetrics.overall} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SocialMediaTracker;
