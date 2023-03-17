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
        <Link
            to={"/henrycollege"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img
              style={{ width: "45px" }}
              src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png"
              alt="logo"
            />
          </Link>

          <Link
            to={"/henrycollege"}
           
          >
            <Typography color="black">
              | College
            </Typography>
          </Link>

          <Link to={'/'} color="inherit">
            <Button sx={{mr: 2, color:'black', bgcolor:'#f5f5f5'}}color='inherit' >Henry</Button>
          </Link>
          <Link to={"/henrycollege/courses"}color="inherit">
             <Button sx={{mr: 2, color:'black', bgcolor:'#f5f5f5'}} color="inherit">
              Cursos
            </Button>
          </Link>
          <Button sx={{mr: 2 }}color="inherit">Nosotros</Button>
          <Link to={'/henrycollege/register'}>
            <Button sx={{mr: 2 , bgcolor:'#ffff00',color:'#212121'}} variant="contained">Crear Cuenta</Button>
          </Link>
          <Link to={"/henrycollege/iniciarsesion"}>
            <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}} variant="contained">Iniciar sesión</Button>
          </Link>
        </Toolbar>
      </AppBar>
  )
}
export default NavBar;
