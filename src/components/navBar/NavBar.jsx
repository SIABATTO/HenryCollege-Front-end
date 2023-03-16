import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
      <AppBar position="fixed" color="secondary">
        <Toolbar> 
          <img style={{ width : '45px'}} src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png" alt="logo" />
          <Typography variant="h6" sx={{ flexGrow: 1, mr: 35}}>
            College
          </Typography>
          <Link to={'/'} color="inherit">
            <Button sx={{mr: 2, color:'black', bgcolor:'#f5f5f5'}}color='inherit' >Henry</Button>
          </Link>
          <Button sx={{mr: 2 }}color="inherit">Nosotros</Button>
          <Button sx={{mr: 2 , bgcolor:'#ffff00',color:'#212121'}} variant="contained">Crear Cuenta</Button>
          <Link to={"/courses/iniciarsesion"}>
            <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}} variant="contained">Iniciar sesión</Button>
          </Link>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar