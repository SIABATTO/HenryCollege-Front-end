import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import imageLogo from "../../assets/images/ISOLOGO_HENRY_BLACK.png";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Typography color="black" component="div" sx={{ flexGrow: 1 }}>
              | College
            </Typography>
          </Link>
        </Box>

        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to={"/"}>
            <Button sx={{ mr: 2 }} color="warning">
              Henry
            </Button>
          </Link>

          <Link to={"/henrycollege/courses"}>
            <Button sx={{ mr: 2 }} color="warning">
              Cursos
            </Button>
          </Link>
          <Button sx={{ mr: 2 }} color="inherit">
            Nosotros
          </Button>
          <Button
            sx={{ mr: 2, bgcolor: "#ffff00", color: "#212121" }}
            variant="contained"
          >
            Crear Cuenta
          </Button>

          <Link to={"/henrycollege/courses/iniciarsesion"}>
            <Button
              sx={{ mr: 2, bgcolor: "#212121", color: "#fffde7" }}
              variant="contained"
            >
              Iniciar sesión
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
