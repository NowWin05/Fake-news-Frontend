import React from 'react';
import { AppBar, Toolbar, Button, Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const theme = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/analyze', label: 'Analyze' },
    { path: '/about', label: 'About' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.primary.main}40`,
        boxShadow: `0 4px 30px ${theme.palette.primary.main}20`,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Button
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'white',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::after': {
                    opacity: 1,
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
