import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';


const NavBar = () => {
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
          <img style={{ width : '60px'}} src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fd31uz8lwfmyn8g.cloudfront.net%2FAssets%2Flogo-henry-white-lg.png&imgrefurl=http%3A%2F%2Fdata.prep.soyhenry.com%2Fclase_uno%2F&tbnid=DvCp1wVT-cFatM&vet=12ahUKEwjN4pOgpd79AhV3tZUCHeRsAwkQMygCegUIARDCAQ..i&docid=3YIr7mkuaV73HM&w=437&h=170&itg=1&q=logo%20henry%20programacion&ved=2ahUKEwjN4pOgpd79AhV3tZUCHeRsAwkQMygCegUIARDCAQ" alt="logo" />
            College
          </Typography>
          <Button sx={{ mr: 2 }} color="warning">Henry</Button>
          {/* <Link to={"/courses"}>
            <Button sx={{ mr: 2 }} color="inherit">Cursos</Button>
          </Link> */}
          <Button sx={{ mr: 2 }} color="inherit">FAQs</Button>
          <Button sx={{ mr: 2 }} color="inherit">Nosotros</Button>
          <Button sx={{ mr: 2 ,bgcolor:'#ffff00',color:'#212121'}} variant="contained">Crear Cuenta</Button>
          <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}} variant="contained">Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar