import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const NavBarLanding = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          {/* <MenuIcon /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img style={{ width : '45px'}} src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png" alt="logo" />
            College
          </Typography>
          <Button sx={{ mr: 2 }} color="inherit">Cursos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBarLanding