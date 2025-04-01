import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import {
  ExpandMore,
  School,
  CheckCircle,
  Warning,
  Book,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TipCard = ({ title, tips }) => {
  const theme = useTheme();
  
  return (
    <Accordion
      sx={{
        background: alpha(theme.palette.background.paper, 0.8),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        '&:before': {
          display: 'none',
        },
        mb: 2,
        borderRadius: '8px !important',
        overflow: 'hidden',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
        sx={{
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.05),
          },
        }}
      >
        <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {tips.map((tip, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle sx={{ color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText
                primary={tip.title}
                secondary={tip.description}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  },
                  '& .MuiListItemText-secondary': {
                    color: theme.palette.text.secondary,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const EducationalResources = ({ resources }) => {
  const theme = useTheme();
  
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
              color: '#2c7fb8',
              pb: 1,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid rgba(0, 119, 182, 0.1)'
            }}
          >
            <School sx={{ color: theme.palette.primary.main, mr: 1 }} />
            Fact-Checking Education
          </Typography>

          {/* Quick Tips Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
              Quick Tips for Spotting Fake News
            </Typography>
            <List sx={{ 
              bgcolor: alpha(theme.palette.background.default, 0.4),
              borderRadius: 2,
              p: 2
            }}>
              {resources.quickTips.map((tip, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Warning sx={{ color: theme.palette.info.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={tip}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Detailed Guides Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
              Detailed Guides
            </Typography>
            {resources.guides.map((guide, index) => (
              <TipCard
                key={index}
                title={guide.title}
                tips={guide.tips}
              />
            ))}
          </Box>

          {/* Recommended Resources Section */}
          <Box 
            sx={{ 
              p: 2, 
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.05)
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
              Recommended Resources
            </Typography>
            <List>
              {resources.recommendedResources.map((resource, index) => (
                <ListItem key={index} sx={{ 
                  mb: 1,
                  bgcolor: 'white',
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}>
                  <ListItemIcon>
                    <Book sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={resource.title}
                    secondary={resource.description}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                      },
                      '& .MuiListItemText-secondary': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    href={resource.url}
                    target="_blank"
                    sx={{
                      ml: 2,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationalResources;
