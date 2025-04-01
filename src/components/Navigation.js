import React from 'react';
import { AppBar, Toolbar, Button, Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const theme = useTheme(); // Access the current theme using Material-UI's useTheme hook

  // Navigation items with paths and labels
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/analyze', label: 'Analyze' },
    { path: '/about', label: 'About' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: theme.palette.background.default, // White background
        color: theme.palette.primary.main, // Blue text color
        borderBottom: `2px solid ${theme.palette.primary.main}`, // Solid blue bottom border
        boxShadow: `0 4px 10px ${theme.palette.primary.light}`, // Soft blue shadow
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}> {/* Flex container for nav items */}
          {navItems.map((item, index) => (
            <motion.div // Animated navigation items using Framer Motion
              key={item.path}
              initial={{ opacity: 0, y: -20 }} // Initial state: invisible and above
              animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
              transition={{ delay: index * 0.1 }} // Stagger delay for each item
              whileHover={{ y: -2 }} // Slight upward movement when hovered
            >
              <Button
                component={RouterLink} // Using RouterLink for navigation
                to={item.path}
                sx={{
                  color: theme.palette.primary.main, // Blue text color
                  fontWeight: 'bold',
                  position: 'relative', // Position for pseudo-element
                  '&::after': { // Pseudo-element for underline effect
                    content: '""',
                    position: 'absolute',
                    bottom: -3,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: theme.palette.primary.main, // Blue underline
                    opacity: 0, // Hidden initially
                    transition: 'opacity 0.3s ease', // Smooth transition
                  },
                  '&:hover::after': { // Show underline on hover
                    opacity: 1,
                  },
                }}
              >
                {item.label} {/* Navigation label */}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;