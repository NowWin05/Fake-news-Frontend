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
} from '@mui/material';
import {
  ExpandMore,
  School,
  CheckCircle,
  Warning,
  Book,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TipCard = ({ title, tips }) => (
  <Accordion
    sx={{
      background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%)',
      border: '1px solid rgba(255, 215, 0, 0.1)',
      '&:before': {
        display: 'none',
      },
      mb: 2,
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMore sx={{ color: '#FFD700' }} />}
      sx={{
        '&:hover': {
          bgcolor: 'rgba(255, 215, 0, 0.05)',
        },
      }}
    >
      <Typography variant="h6" sx={{ color: '#FFD700' }}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#FFD700' }} />
            </ListItemIcon>
            <ListItemText
              primary={tip.title}
              secondary={tip.description}
              sx={{
                '& .MuiListItemText-primary': {
                  color: '#C0A960',
                },
                '& .MuiListItemText-secondary': {
                  color: 'rgba(255, 215, 0, 0.7)',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

const EducationalResources = ({ resources }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <School sx={{ color: '#FFD700', mr: 1, fontSize: 30 }} />
            <Typography variant="h5">
              Fact-Checking Education
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FFD700' }}>
              Quick Tips for Spotting Fake News
            </Typography>
            <List>
              {resources.quickTips.map((tip, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Warning sx={{ color: '#FFD700' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={tip}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#C0A960',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FFD700' }}>
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

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FFD700' }}>
              Recommended Resources
            </Typography>
            <List>
              {resources.recommendedResources.map((resource, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Book sx={{ color: '#FFD700' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={resource.title}
                    secondary={resource.description}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#C0A960',
                      },
                      '& .MuiListItemText-secondary': {
                        color: 'rgba(255, 215, 0, 0.7)',
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    href={resource.url}
                    target="_blank"
                    sx={{
                      ml: 2,
                      borderColor: '#FFD700',
                      color: '#FFD700',
                      '&:hover': {
                        borderColor: '#C0A960',
                        bgcolor: 'rgba(255, 215, 0, 0.1)',
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
