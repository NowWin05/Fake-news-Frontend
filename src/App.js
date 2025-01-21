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

// Importing React Router components for handling navigation between pages.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Material UI components for theming and baseline styles.
import { ThemeProvider, CssBaseline } from '@mui/material';

// Importing font styles for consistent typography.
import '@fontsource/orbitron/400.css'; // Regular weight font
import '@fontsource/orbitron/500.css'; // Medium weight font
import '@fontsource/orbitron/700.css'; // Bold weight font

// Custom Material UI theme for the application.
import theme from './theme/theme';

// Component imports for various sections of the application.
import Navigation from './components/Navigation'; // Navigation bar
import Home from './components/Home';            // Home page
import About from './components/About';          // About page
import NewsAnalyzer from './components/NewsAnalyzer'; // News Analyzer feature

const App = () => {
  return (
    // Wrapping the application with ThemeProvider to apply the custom Material UI theme.
    <ThemeProvider theme={theme}>
      {/* CssBaseline ensures consistent default styles (e.g., reset margins, default font styles). */}
      <CssBaseline />
      
      {/* Router provides navigation functionality for the application. */}
      <Router>
        {/* Main application container */}
        <div className="App">
          
          {/* Navigation component for displaying the app's menu or header. */}
          <Navigation />
          
          {/* Routes define the navigation paths and the components to render for each path. */}
          <Routes>
            <Route path="/" element={<Home />} />          {/* Default Home page route */}
            <Route path="/about" element={<About />} />    {/* About page route */}
            <Route path="/analyze" element={<NewsAnalyzer />} /> {/* News Analyzer feature route */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

// Exporting the App component as the default export so it can be rendered in the main entry file (e.g., `index.js`).
export default App;
