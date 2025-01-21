import { createTheme } from '@mui/material/styles'; // Importing Material UI's `createTheme` function to create a custom theme

const theme = createTheme({
  // Defining the color palette for the application
  palette: {
    mode: 'dark', // Sets the theme to dark mode
    primary: {
      main: '#00f2ff', // Neon cyan for primary color
      light: '#5cffff', // Lighter shade of the primary color
      dark: '#00bfcc', // Darker shade of the primary color
      contrastText: '#000000', // Text color contrasting the primary color
    },
    secondary: {
      main: '#f200ff', // Neon purple for secondary color
      light: '#ff5cff', // Lighter shade of the secondary color
      dark: '#bf00cc', // Darker shade of the secondary color
      contrastText: '#ffffff', // Text color contrasting the secondary color
    },
    background: {
      default: '#0a0b1e', // Deep space blue for the background
      paper: '#151632', // Slightly lighter space blue for paper-like elements
    },
    text: {
      primary: '#ffffff', // Primary text color (white)
      secondary: 'rgba(255, 255, 255, 0.7)', // Secondary text color with reduced opacity
    },
    error: {
      main: '#ff0844', // Neon red for error states
    },
    success: {
      main: '#00ff9f', // Neon green for success states
    },
    divider: 'rgba(0, 242, 255, 0.12)', // Divider color with transparency
  },
  
  // Customizing typography settings
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif', // Font stack with Orbitron as the primary font
    h1: {
      fontWeight: 700, // Bold font weight for headings
      letterSpacing: '0.2rem', // Extra letter spacing for a futuristic look
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.1rem',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '0.1rem',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.05rem',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.05rem',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: '0.05rem',
    },
  },

  // Customizing Material UI component styles globally
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, rgba(21, 22, 50, 0.95) 0%, rgba(10, 11, 30, 0.95) 100%)', // Gradient background
          border: '1px solid rgba(0, 242, 255, 0.1)', // Border with low opacity
          backdropFilter: 'blur(10px)', // Blur effect for a frosted glass look
          boxShadow: '0 8px 32px 0 rgba(0, 242, 255, 0.1)', // Soft glowing shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          textTransform: 'none', // Disables automatic text capitalization
          fontWeight: 500,
          letterSpacing: '0.05rem',
        },
        contained: {
          backgroundImage: 'linear-gradient(45deg, #00f2ff 30%, #f200ff 90%)', // Gradient background for contained buttons
          boxShadow: '0 3px 15px 0 rgba(0, 242, 255, 0.3)', // Glowing shadow effect
          '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #5cffff 30%, #ff5cff 90%)', // Hover state gradient
            boxShadow: '0 3px 20px 0 rgba(0, 242, 255, 0.4)', // More intense shadow on hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 242, 255, 0.2)', // Default border color for text fields
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 242, 255, 0.4)', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00f2ff', // Border color when the field is focused
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disables automatic capitalization
          fontWeight: 500,
          letterSpacing: '0.05rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for chips
        },
      },
    },
  },

  // Customizing the default shape settings
  shape: {
    borderRadius: 12, // Default border radius for components
  },

  // Customizing shadow settings for components
  shadows: [
    'none', // No shadow
    '0 2px 4px 0 rgba(0, 242, 255, 0.05)', // Subtle shadow
    '0 4px 8px 0 rgba(0, 242, 255, 0.1)', // Slightly stronger shadow
    '0 8px 16px 0 rgba(0, 242, 255, 0.15)', // Medium shadow
    '0 12px 24px 0 rgba(0, 242, 255, 0.2)', // Stronger shadow
    '0 16px 32px 0 rgba(0, 242, 255, 0.25)', // Even stronger shadow
    '0 20px 40px 0 rgba(0, 242, 255, 0.3)', // Most intense shadow
    // Additional shadows can be defined here
  ],
});

export default theme; // Exporting the custom theme for use in the application
