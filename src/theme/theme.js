import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c7fb8', // Deep blue to match our components
      light: '#5aa7de', // Lighter blue
      dark: '#0d5a88', // Darker blue
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#7dcfb6', // Teal color from our gradients
      light: '#aeffe8',
      dark: '#4d9d86',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fcff', // Very light blue tint for background
      paper: '#ffffff', // White paper elements
    },
    text: {
      primary: '#212121', // Dark gray for readability
      secondary: 'rgba(0, 0, 0, 0.7)',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#388E3C',
    },
    divider: 'rgba(0, 119, 182, 0.1)', // Matches our component borders
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '0.05rem' },
    h2: { fontWeight: 600, letterSpacing: '0.05rem' },
    h3: { fontWeight: 600, letterSpacing: '0.05rem' },
    h4: { fontWeight: 600, letterSpacing: '0.05rem' },
    h5: { fontWeight: 500, letterSpacing: '0.05rem' },
    h6: { fontWeight: 500, letterSpacing: '0.05rem' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid rgba(0, 119, 182, 0.1)',
          boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.05rem',
        },
        contained: {
          backgroundColor: '#2c7fb8',
          '&:hover': {
            backgroundColor: '#0d5a88',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 119, 182, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 119, 182, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2c7fb8',
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.05rem',
          '&.Mui-selected': {
            color: '#2c7fb8',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0, 119, 182, 0.05)',
    '0 4px 8px rgba(0, 119, 182, 0.08)',
    '0 8px 16px rgba(0, 119, 182, 0.12)',
    '0 12px 24px rgba(0, 119, 182, 0.15)',
  ],
});

export default theme;