import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  InputBase,
  Button,
  Container,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  alpha,
} from '@mui/material';
import {
  ShoppingCart,
  Menu as MenuIcon,
  Person,
  LocationOn,
  LocalShipping,
  CardGiftcard,
  Search,
  KeyboardArrowDown,
  Category,
  Home,
  Devices,
  Restaurant,
  Kitchen,
  Favorite,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  border: '2px solid',
  borderColor: alpha(theme.palette.primary.main, 0.2),
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    fontSize: '1rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const navigationRoutes = [
  { name: 'Home', icon: <Home />, path: '/' },
  { name: 'All Categories', icon: <Category />, path: '/categories' },
  { name: 'Daily Essentials', icon: <LocalShipping />, path: '/daily-essentials' },
  { name: 'Top Brands', icon: <Favorite />, path: '/brands' },
  { name: 'My Orders', icon: <LocalShipping />, path: '/orders' },
  { name: 'My Wishlist', icon: <Favorite />, path: '/wishlist' },
  { name: 'My Profile', icon: <Person />, path: '/profile' },
];

export default function Navbar() {
  const { items } = useSelector(state => state.cart);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const openAuthMenu = Boolean(authAnchorEl);
  const navigate = useNavigate();

  const categories = [
    { name: 'Home & Living', icon: <Home /> },
    { name: 'Electronics', icon: <Devices /> },
    { name: 'Groceries', icon: <Restaurant /> },
    { name: 'Kitchen', icon: <Kitchen /> },
    { name: 'Fashion', icon: <Favorite /> },
  ];

  const handleAuthMenuClick = (event) => {
    setAuthAnchorEl(event.currentTarget);
  };

  const handleAuthMenuClose = () => {
    setAuthAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 3 }}>
        {/* Top Bar */}
        <Container maxWidth="xl">
          <Box sx={{ py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
              Welcome to worldwide Megamart!
            </Typography>
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 3,
              '& .MuiButton-root': {
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'action.hover'
                }
              }
            }}>
              <Button startIcon={<LocationOn />} size="small">
                Deliver to 423651
              </Button>
              <Button startIcon={<LocalShipping />} size="small">
                Track Order
              </Button>
              <Button startIcon={<CardGiftcard />} size="small">
                All Offers
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Main Navbar */}
        <Toolbar sx={{ bgcolor: 'primary.main', color: 'white', py: 1 }}>
          <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              edge="start"
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                display: { xs: 'block' }, 
                fontWeight: 700,
                mr: 3,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              MegaMart
            </Typography>

            <SearchWrapper sx={{ 
              flexGrow: 1, 
              mx: { xs: 1, md: 2 }, 
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'none'
            }}>
              <SearchIconWrapper>
                <Search sx={{ color: 'primary.main' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products, brands and more..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: 'text.primary' }}
              />
            </SearchWrapper>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                color="inherit"
                startIcon={<Person />}
                endIcon={<KeyboardArrowDown />}
                onClick={handleAuthMenuClick}
                sx={{ 
                  display: { xs: 'none', md: 'flex' },
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Account
              </Button>
              <Menu
                anchorEl={authAnchorEl}
                open={openAuthMenu}
                onClose={handleAuthMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleAuthMenuClose}>Sign In</MenuItem>
                <MenuItem onClick={handleAuthMenuClose}>Sign Up</MenuItem>
                <MenuItem onClick={handleAuthMenuClose}>My Profile</MenuItem>
                <MenuItem onClick={handleAuthMenuClose}>Orders</MenuItem>
              </Menu>

              <IconButton 
                color="inherit"
                sx={{ 
                  bgcolor: 'primary.dark',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <Badge 
                  badgeContent={items?.length || 0} 
                  color="error"
                  sx={{ '& .MuiBadge-badge': { fontSize: '0.8rem' } }}
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Container>
        </Toolbar>

        {/* Category Bar */}
        <Box sx={{ 
          bgcolor: 'primary.dark', 
          color: 'white', 
          display: { xs: 'none', md: 'block' },
          borderTop: 1,
          borderColor: 'primary.light'
        }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', gap: 4, py: 1 }}>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  color="inherit"
                  endIcon={<KeyboardArrowDown />}
                  sx={{ textTransform: 'none' }}
                >
                  {category.name}
                </Button>
              ))}
            </Box>
          </Container>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          {/* User Profile Section */}
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Person sx={{ mr: 1 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                Welcome
              </Typography>
            </Box>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleNavigation('/login')}
              sx={{ mb: 1 }}
            >
              Login / Sign Up
            </Button>
          </Box>

          {/* Navigation Links */}
          <List>
            {navigationRoutes.map((route) => (
              <ListItem 
                button 
                key={route.name}
                onClick={() => handleNavigation(route.path)}
                sx={{
                  '&:hover': {
                    bgcolor: 'primary.light',
                    '& .MuiListItemIcon-root, & .MuiListItemText-root': {
                      color: 'primary.main'
                    }
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={route.name}
                  primaryTypographyProps={{
                    fontSize: '0.9rem'
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Additional Options */}
          <Box sx={{ p: 2, mt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="caption" color="text.secondary">
              Customer Service: +1 202-918-2132
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Spacing to prevent content from hiding under fixed AppBar */}
      <Toolbar />
      <Toolbar />
      <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
    </>
  );
}
