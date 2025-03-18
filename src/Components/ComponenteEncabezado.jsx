import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router';
import { Typography } from '@mui/material';
import logo from '../assets/1.png';

// Updated pages array with "Categorias" added
const pages = ['Home', 'Cocktails', 'Categorias', 'Galerias', 'About Us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ComponenteEncabezado() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8a8809' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo con enlace a Home */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', marginRight: '10px', cursor: 'pointer' }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Mixología Express
            </Typography>
          </Box>

          {/* Menú responsive para móviles */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/\s+/g, '')}`}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo responsive para móviles */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Mixología Express
            </Typography>
          </Box>

          {/* Espacio flexible para centrar el menú */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          
          {/* Menú para pantallas grandes - centrado como en el diseño original */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
               Home
            </Button>
            <Button component={Link} to="/recetas" onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
               Cocktails
            </Button>
            <Button component={Link} to="/galerias" onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
               Galerias
            </Button>
            <Button component={Link} to="/about" onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
               About Us
            </Button>
            <Button component={Link} to="/contact" onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
               Contact Us
            </Button>
          </Box>
          
          {/* Espacio flexible para centrar el menú */}
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} />

          {/* Avatar y menú de usuario */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: '#c0c578' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ComponenteEncabezado;