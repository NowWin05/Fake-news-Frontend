import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff', // Neon cyan
      light: '#5cffff',
      dark: '#00bfcc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f200ff', // Neon purple
      light: '#ff5cff',
      dark: '#bf00cc',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0b1e', // Deep space blue
      paper: '#151632', // Slightly lighter space blue
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#ff0844', // Neon red
    },
    success: {
      main: '#00ff9f', // Neon green
    },
    divider: 'rgba(0, 242, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.2rem',
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, rgba(21, 22, 50, 0.95) 0%, rgba(10, 11, 30, 0.95) 100%)',
          border: '1px solid rgba(0, 242, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 242, 255, 0.1)',
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
          backgroundImage: 'linear-gradient(45deg, #00f2ff 30%, #f200ff 90%)',
          boxShadow: '0 3px 15px 0 rgba(0, 242, 255, 0.3)',
          '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #5cffff 30%, #ff5cff 90%)',
            boxShadow: '0 3px 20px 0 rgba(0, 242, 255, 0.4)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 242, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 242, 255, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00f2ff',
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
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 4px 0 rgba(0, 242, 255, 0.05)',
    '0 4px 8px 0 rgba(0, 242, 255, 0.1)',
    '0 8px 16px 0 rgba(0, 242, 255, 0.15)',
    '0 12px 24px 0 rgba(0, 242, 255, 0.2)',
    '0 16px 32px 0 rgba(0, 242, 255, 0.25)',
    '0 20px 40px 0 rgba(0, 242, 255, 0.3)',
    // ... add more shadows as needed
  ],
});

export default theme;
