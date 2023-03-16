import AppBar from "@mui/material/AppBar";
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
// import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarLanding = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img
            style={{ width: "120px" }}
            src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png"
            alt="logo"
          />
          <Typography variant="h6" sx={{ marginLeft: "3%" }}>
            <Link to={"/courses"}>
              <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}} color="secondary">
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