import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, alpha } from '@mui/material';

const BiasCompass = ({ bias }) => {
  const theme = useTheme();
  
  // Ensure bias is within -100 to 100 range
  const normalizedBias = Math.max(-100, Math.min(100, bias));
  
  // Convert bias to degrees for the needle rotation (-100 = -90°, 0 = 0°, 100 = 90°)
  const needleRotation = (normalizedBias / 100) * 90;
  
  // Define colors from the theme
  const primaryColor = theme.palette.primary.main; // Deep blue
  const secondaryColor = theme.palette.secondary.main; // Lighter blue
  const neutralColor = '#7dcfb6'; // Use teal for neutral (from WordCloud)
  
  // Calculate bias text and color
  const getBiasText = (value) => {
    if (value < -60) return 'Strongly Left';
    if (value < -20) return 'Left';
    if (value < 20) return 'Center';
    if (value < 60) return 'Right';
    return 'Strongly Right';
  };
  
  const getBiasColor = (value) => {
    if (value < -60) return primaryColor;
    if (value < -20) return alpha(primaryColor, 0.7);
    if (value < 20) return neutralColor;
    if (value < 60) return alpha(secondaryColor, 0.7);
    return secondaryColor;
  };
  
  const biasText = getBiasText(normalizedBias);
  const biasColor = getBiasColor(normalizedBias);

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
            color: primaryColor,
            pb: 1,
            mb: 2,
            borderBottom: `1px solid ${alpha(primaryColor, 0.1)}`
          }}
        >
          Political Bias Analysis
        </Typography>
        
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 'bold', 
              color: biasColor,
              fontSize: '1.2rem',
              mb: 3
            }}
          >
            {biasText} ({normalizedBias})
          </Typography>
        </Box>
        
        {/* Compass visualization */}
        <Box sx={{ position: 'relative', width: '100%', height: 220, mb: 2 }}>
          {/* Semi-circle background */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '85%',
              height: '55%',
              borderTopLeftRadius: '150%',
              borderTopRightRadius: '150%',
              background: `linear-gradient(90deg, 
                ${alpha(primaryColor, 0.8)} 0%, 
                ${alpha(neutralColor, 0.8)} 50%, 
                ${alpha(secondaryColor, 0.8)} 100%)`,
              display: 'flex',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: `0 4px 12px ${alpha('#000', 0.15)}`
            }}
          />
          
          {/* Tick marks */}
          {[-75, -50, -25, 0, 25, 50, 75].map((tick) => {
            const tickRotation = (tick / 100) * 90;
            const isMainTick = tick % 25 === 0;
            return (
              <Box
                key={tick}
                sx={{
                  position: 'absolute',
                  bottom: '0%',
                  left: '50%',
                  height: isMainTick ? '15%' : '8%',
                  width: isMainTick ? 2 : 1,
                  backgroundColor: isMainTick ? alpha('#000', 0.7) : alpha('#000', 0.3),
                  transformOrigin: 'bottom center',
                  transform: `translateX(-50%) rotate(${tickRotation}deg)`,
                  zIndex: 1,
                }}
              />
            );
          })}
          
          {/* Needle */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '0%',
              left: '50%',
              height: '52%',
              width: 3,
              backgroundColor: theme.palette.error.main,
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${needleRotation}deg)`,
              transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: theme.palette.error.main,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 5,
                height: '85%',
                borderRadius: '5px',
                backgroundColor: theme.palette.error.main,
                filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))',
              },
            }}
          />
          
          {/* Center point */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '0%',
              left: '50%',
              transform: 'translate(-50%, 50%)',
              width: 18,
              height: 18,
              borderRadius: '50%',
              backgroundColor: 'white',
              border: `3px solid ${alpha('#000', 0.7)}`,
              boxShadow: `0 2px 4px ${alpha('#000', 0.3)}`,
              zIndex: 3,
            }}
          />
          
          {/* Labels with tooltips */}
          {[
            { text: 'Left', position: '15%', tooltip: 'Leans toward progressive views' },
            { text: 'Center', position: '50%', tooltip: 'Balanced perspective' },
            { text: 'Right', position: '85%', tooltip: 'Leans toward conservative views' }
          ].map((label) => (
            <Box 
              key={label.text}
              sx={{
                position: 'absolute',
                bottom: '10%',
                left: label.position,
                transform: label.text === 'Center' ? 'translateX(-50%)' : 'none',
                textAlign: 'center',
              }}
              title={label.tooltip}
            >
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textShadow: '0 1px 2px rgba(255,255,255,0.7)',
                }}
              >
                {label.text}
              </Typography>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.5),
              padding: 1.5,
              borderRadius: 1,
              border: `1px dashed ${alpha(theme.palette.divider, 0.5)}`,
              fontSize: '0.85rem',
              lineHeight: 1.5
            }}
          >
            This score indicates the political leaning of the content based on language patterns, 
            source bias, and framing of key issues.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BiasCompass;
