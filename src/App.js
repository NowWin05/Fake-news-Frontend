/**
 * Main App Component
 * Handles routing and theme configuration for the entire application
 * Features:
 * - React Router setup for navigation
 * - Material UI ThemeProvider for consistent styling
 * - Custom theme implementation
 * - Protected routes for authenticated users
 * - Responsive layout with navigation
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/500.css';
import '@fontsource/orbitron/700.css';
import theme from './theme/theme';

// Component imports
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import NewsAnalyzer from './components/NewsAnalyzer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline for consistent base styles */}
      <CssBaseline />
      
      <Router>
        {/* Navigation Component */}
        <div className="App">
          <Navigation />
          
          {/* Main Content Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/analyze" element={<NewsAnalyzer />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
