import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, alpha } from '@mui/material';

/**
 * A consistent container for analysis cards
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {Object} props.sx - Additional style props for the card
 * @param {string} props.gradientColors - Optional gradient colors for the header
 */
const AnalysisCard = ({ 
  title, 
  children, 
  sx = {}, 
  gradientColors = '90deg, #2c7fb8 0%, #7dcfb6 100%',
  titleColor
}) => {
  const theme = useTheme();
  
  return (
    <Card
      elevation={2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        background: '#ffffff',
        boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
        border: '1px solid rgba(0, 119, 182, 0.1)',
        overflow: 'hidden',
        ...sx
      }}
    >
      {/* Gradient header bar */}
      <Box
        sx={{
          height: 6,
          background: `linear-gradient(${gradientColors})`
        }}
      />

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: titleColor || theme.palette.primary.main,
            pb: 1,
            mb: 2,
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnalysisCard;
