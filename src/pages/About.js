import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  useTheme, 
  alpha,
  Divider 
} from '@mui/material';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const About = () => {
  const theme = useTheme();

  // Team members data
  const teamMembers = [
    {
      name: "John Doe",
      role: "Project Lead",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "John has over 10 years of experience in AI research and development."
    },
    {
      name: "Jane Smith",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Jane specializes in natural language processing and machine learning algorithms."
    },
    {
      name: "Michael Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Michael is an expert in building intuitive user interfaces and experiences."
    },
    {
      name: "Sarah Williams",
      role: "Content Analyst",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Sarah has expertise in journalism and media literacy education."
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ py: 8 }}
      >
        {/* Header with gradient background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '300px',
            zIndex: -1,
            background: `radial-gradient(circle, ${alpha('#2c7fb8', 0.08)} 0%, transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { opacity: 0.5 },
              '50%': { opacity: 0.8 },
              '100%': { opacity: 0.5 },
            }
          }}
        />

        {/* Page Header with Gradient */}
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 0 20px ${alpha('#2c7fb8', 0.3)}`
            }}
          >
            About Our Project
          </Typography>
          
          <Box
            sx={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
              mx: 'auto',
              mb: 6,
              boxShadow: `0 2px 10px ${alpha('#2c7fb8', 0.3)}`
            }}
          />
        </motion.div>

        {/* Mission Section */}
        <Box component={motion.div} variants={itemVariants} sx={{ mb: 8 }}>
          <Card
            elevation={2}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
              boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 30px 0 rgba(0, 119, 182, 0.12)',
              }
            }}
          >
            {/* Gradient header bar */}
            <Box 
              sx={{ 
                height: 6, 
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
              }}
            />
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: '#2c7fb8',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'inline-block', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                    mr: 2,
                    boxShadow: `0 3px 10px ${alpha('#2c7fb8', 0.3)}`
                  }} 
                />
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                The Fake News Detector project was founded with a simple yet crucial mission: to empower people with tools to identify misinformation and make informed decisions about the content they consume.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                In today's digital age, the rapid spread of misinformation poses significant challenges to our society. Our AI-powered platform is designed to analyze news articles, detect potential biases, verify facts against trusted sources, and provide educational resources to improve media literacy.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                We believe that by combining advanced technology with educational resources, we can contribute to a more informed public discourse and help combat the spread of fake news.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Technology Section */}
        <Box component={motion.div} variants={itemVariants} sx={{ mb: 8 }}>
          <Card
            elevation={2}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
              boxShadow: '0 4px 20px 0 rgba(0, 119, 182, 0.08)'
            }}
          >
            {/* Gradient header bar */}
            <Box 
              sx={{ 
                height: 6, 
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
              }}
            />
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: '#2c7fb8',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'inline-block', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                    mr: 2,
                    boxShadow: `0 3px 10px ${alpha('#2c7fb8', 0.3)}`
                  }} 
                />
                Our Technology
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                Our platform leverages state-of-the-art technologies including:
              </Typography>
              <Grid container spacing={3} sx={{ mb: 2, mt: 3 }}>
                {teamMembers.map((tech, index) => (
                  <Grid item xs={12} md={6} key={tech.title}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box 
                        sx={{ 
                          p: 3, 
                          background: alpha('#2c7fb8', 0.05), 
                          borderRadius: 2,
                          height: '100%',
                          border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: `0 5px 15px ${alpha('#2c7fb8', 0.15)}`,
                            background: alpha('#2c7fb8', 0.07)
                          }
                        }}
                      >
                        <Typography variant="h6" gutterBottom sx={{ color: '#2c7fb8', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                          <Box 
                            sx={{ 
                              width: '8px', 
                              height: '8px', 
                              borderRadius: '50%', 
                              background: '#2c7fb8', 
                              display: 'inline-block', 
                              mr: 1.5 
                            }} 
                          />
                          {tech.title}
                        </Typography>
                        <Typography variant="body1">{tech.desc}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Team Section with improved visuals */}
        <Box component={motion.div} variants={itemVariants}>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              color: '#2c7fb8',
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                display: 'inline-block', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)',
                mr: 2
              }} 
            />
            Meet Our Team
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <Card
                    elevation={2}
                    sx={{ 
                      borderRadius: 2,
                      height: '100%',
                      overflow: 'hidden',
                      border: `1px solid ${alpha('#2c7fb8', 0.1)}`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: `0 10px 30px ${alpha('#2c7fb8', 0.15)}`
                      }
                    }}
                  >
                    {/* Gradient header bar */}
                    <Box 
                      sx={{ 
                        height: 4, 
                        background: 'linear-gradient(90deg, #2c7fb8 0%, #7dcfb6 100%)'
                      }}
                    />

                    {/* Team member image with gradient overlay */}
                    <Box 
                      sx={{
                        position: 'relative',
                        height: 120,
                        background: `linear-gradient(to bottom, ${alpha('#2c7fb8', 0.3)}, ${alpha('#7dcfb6', 0.3)})`
                      }}
                    >
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{ 
                          width: 100, 
                          height: 100,
                          position: 'absolute',
                          bottom: -50,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          border: '5px solid white',
                          boxShadow: `0 5px 15px ${alpha('#2c7fb8', 0.2)}`
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3, pt: 7, textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c7fb8' }}>
                        {member.name}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: alpha('#2c7fb8', 0.7),
                          mb: 2,
                          fontWeight: 500
                        }}
                      >
                        {member.role}
                      </Typography>
                      <Divider sx={{ mb: 2, borderColor: alpha('#2c7fb8', 0.1) }} />
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 3,
          textAlign: 'center',
          borderTop: `1px solid ${alpha('#2c7fb8', 0.1)}`,
          mb: 4
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Fake News Detector. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
