import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavBarLanding = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <img
            style={{ width: "120px" }}
            src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png"
            alt="logo"
          />
          <Typography variant="h6" sx={{ marginLeft: "3%" }}>
            <Link to={"/courses"}>
              <Button sx={{ mr: 2 }} color="inherit">
              Henry College
              </Button>
            </Link>            
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarLanding;
