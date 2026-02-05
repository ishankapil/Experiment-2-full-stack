import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Settings,
  People,
  Assessment,
  Notifications,
  Security,
} from '@mui/icons-material';

// Styled Components with custom theme overrides
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
  transition: 'box-shadow 0.3s ease',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(18, 18, 18, 0.8)' 
    : 'rgba(255, 255, 255, 0.8)',
  color: theme.palette.text.primary,
}));

const AdminPanel = ({ mode, toggleTheme }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
  });

  const [notifications, setNotifications] = useState(true);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Sample data for the users table
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
  ];

  // Sample statistics
  const stats = [
    { label: 'Total Users', value: '2,543', icon: <People />, color: '#2196f3' },
    { label: 'Active Sessions', value: '1,234', icon: <Security />, color: '#4caf50' },
    { label: 'Reports', value: '89', icon: <Assessment />, color: '#ff9800' },
    { label: 'Notifications', value: '156', icon: <Notifications />, color: '#f44336' },
  ];

  return (
    <Box>
      {/* Navigation Bar with Theme Toggle */}
      <StyledAppBar position="static">
        <Toolbar>
          <Settings sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          
          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Toolbar>
      </StyledAppBar>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Admin Control Panel
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Multi-panel layout with theme switching. Panels stack vertically on mobile and display side-by-side on larger screens.
        </Typography>

        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: stat.color, mr: 2 }}>
                      {stat.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h4">{stat.value}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Multi-Panel Layout - Stacks on mobile, side-by-side on desktop */}
        <Grid container spacing={3}>
          {/* Panel 1: User Management Form */}
          <Grid item xs={12} md={6} lg={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <People sx={{ mr: 1 }} />
                  User Management
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Add or modify user information
                </Typography>
                
                <Box component="form" sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  
                  <Box sx={{ mt: 3 }}>
                    <StyledButton variant="contained" fullWidth>
                      Add User
                    </StyledButton>
                  </Box>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Panel 2: Settings */}
          <Grid item xs={12} md={6} lg={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <Settings sx={{ mr: 1 }} />
                  System Settings
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Configure system preferences
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Enable Notifications"
                  />
                  
                  <FormControlLabel
                    control={<Switch defaultChecked color="primary" />}
                    label="Auto-save Changes"
                  />
                  
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Two-Factor Authentication"
                  />
                  
                  <FormControlLabel
                    control={<Switch defaultChecked color="primary" />}
                    label="Email Alerts"
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <StyledButton variant="outlined" fullWidth>
                    Save Settings
                  </StyledButton>
                </Box>

                <Box sx={{ mt: 2, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Current Theme:</strong> {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click the sun/moon icon in the navbar to switch themes
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Panel 3: Quick Actions */}
          <Grid item xs={12} md={12} lg={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <Assessment sx={{ mr: 1 }} />
                  Quick Actions
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Common administrative tasks
                </Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <StyledButton variant="contained" fullWidth size="small">
                      Generate Report
                    </StyledButton>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledButton variant="outlined" fullWidth size="small">
                      Export Data
                    </StyledButton>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledButton variant="contained" color="secondary" fullWidth size="small">
                      Clear Cache
                    </StyledButton>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledButton variant="outlined" color="error" fullWidth size="small">
                      System Backup
                    </StyledButton>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>System Status:</strong> All systems operational
                  </Typography>
                  <Typography variant="caption">
                    Last backup: 2 hours ago
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        {/* Users Table - Full Width Panel */}
        <Box sx={{ mt: 3 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <People sx={{ mr: 1 }} />
                Recent Users
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Overview of system users and their status
              </Typography>

              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>ID</strong></TableCell>
                      <TableCell><strong>Name</strong></TableCell>
                      <TableCell><strong>Email</strong></TableCell>
                      <TableCell><strong>Role</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                      <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} hover>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Chip 
                            label={user.role} 
                            size="small" 
                            color={user.role === 'Admin' ? 'primary' : 'default'}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={user.status} 
                            size="small" 
                            color={user.status === 'Active' ? 'success' : 'default'}
                          />
                        </TableCell>
                        <TableCell>
                          <Button size="small">Edit</Button>
                          <Button size="small" color="error">Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </StyledCard>
        </Box>

        {/* Responsive Behavior Info */}
        <Box sx={{ mt: 3 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Responsive Layout Behavior
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                This admin panel demonstrates responsive design:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Mobile (xs)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      All panels stack vertically in a single column
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Tablet (md)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Panels display 2 columns side-by-side
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Desktop (lg+)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      All 3 panels display side-by-side
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminPanel;
