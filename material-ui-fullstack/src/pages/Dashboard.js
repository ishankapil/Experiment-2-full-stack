import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
  TrendingUp,
  AttachMoney,
  PersonAdd,
  LocalShipping
} from '@mui/icons-material';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Sample dashboard data
  const dashboardCards = [
    { 
      title: 'Total Revenue', 
      value: '$45,231', 
      change: '+12.5%', 
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      color: '#4caf50'
    },
    { 
      title: 'New Customers', 
      value: '1,234', 
      change: '+8.2%', 
      icon: <PersonAdd sx={{ fontSize: 40 }} />,
      color: '#2196f3'
    },
    { 
      title: 'Orders', 
      value: '567', 
      change: '+5.7%', 
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
      color: '#ff9800'
    },
    { 
      title: 'Growth', 
      value: '23.5%', 
      change: '+2.3%', 
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#9c27b0'
    },
    { 
      title: 'Active Users', 
      value: '8,902', 
      change: '+15.3%', 
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: '#f44336'
    },
    { 
      title: 'Shipments', 
      value: '432', 
      change: '+7.1%', 
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      color: '#00bcd4'
    },
    { 
      title: 'Conversion Rate', 
      value: '3.2%', 
      change: '+0.5%', 
      icon: <BarChartIcon sx={{ fontSize: 40 }} />,
      color: '#8bc34a'
    },
    { 
      title: 'Reports', 
      value: '89', 
      change: '+4.2%', 
      icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
      color: '#ff5722'
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/admin">Admin</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <StyledDrawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 0,
            overflow: 'hidden',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Integrations" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Current month" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Last quarter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Year-end sale" />
            </ListItemButton>
          </ListItem>
        </List>
      </StyledDrawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard Overview
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Welcome to your responsive dashboard. Card columns adjust automatically based on screen width.
          </Typography>

          {/* Responsive Card Grid */}
          <Grid container spacing={3}>
            {dashboardCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: card.color }}>
                        {card.icon}
                      </Box>
                      <Typography variant="body2" color="success.main" sx={{ fontWeight: 'bold' }}>
                        {card.change}
                      </Typography>
                    </Box>
                    <Typography variant="h4" component="div" gutterBottom>
                      {card.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Details</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {/* Additional Info Section */}
          <Box sx={{ mt: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Responsive Breakpoints
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  This dashboard uses Material UI's responsive grid system:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="xs (0-600px): 1 column" 
                      secondary="Mobile devices in portrait mode"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="sm (600-900px): 2 columns" 
                      secondary="Mobile devices in landscape and small tablets"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="md (900-1200px): 3 columns" 
                      secondary="Tablets and small desktops"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="lg+ (1200px+): 4 columns" 
                      secondary="Large desktops and displays"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
