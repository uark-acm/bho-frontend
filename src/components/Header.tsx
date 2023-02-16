
import * as React from "react";

import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './BHO-Logo.png';
import Badge from '@mui/material/Badge';
import { height, sizeHeight, sizeWidth, width } from "@mui/system";


const pages = ['About', 'Clothing', 'Accessories', 'Admin'];

const Custom = styled.button`
  background-color: #ad2c0c;
  font-size: 17px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  font-family: monospace;
  font-weight: 700;
`

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* this is wehere the image logo should be the abdicon */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <img style={{ width: 70, height: 70 }} src={logo} alt="Logo" />;
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 10,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: -1,
              color: '#ad2c0c',
              textDecoration: 'none',
            }}
          >
            Boss Hog Outfitters
          </Typography>
          
          {/* <div class="space_lg">&nbsp;</div> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              style={{ color: '#ad2c0c' }}
              size="large"
              aria-label="account of current user"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <img style={{ width: 70, height: 70 }} src={logo} alt="Logo" />;
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: 0,
              color: '#ad2c0c',
              textDecoration: 'none',
            }}
          >
            Boss Hog Outfitters
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#ad2c0c', display: 'block', fontFamily: 'monospace', fontWeight: 700, fontSize: 17}}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* got the review box closer */}
          <Box> 
            <IconButton>
          <Badge badgeContent={7} color="warning" overlap="circular" sx={{
    "& .MuiBadge-badge": {
      color: "white",
      font: 'monospace',
      backgroundColor: "#F8B303",
      fontSize: 15
    }
  }}>
            <Custom>Review Order</Custom>
          </Badge>
          </IconButton>
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;
