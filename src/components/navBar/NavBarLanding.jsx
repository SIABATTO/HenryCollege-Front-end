import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Menu  from '@mui/material/Menu';
import  MenuList from '@mui/material/MenuList';
import  MenuItem from '@mui/material/MenuItem';
import React,{ useState } from 'react';

const NavBarLanding = () => {

	const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

	return <Box sx={{ flexGrow: 1 }}>
	<AppBar position="fixed" sx={{ bgcolor : '#212121'}}>
	  <Toolbar>
		<IconButton
		  size="large"
		  edge="start"
		  color="inherit"
		  aria-label="menu"
		  sx={{ mr: 2 }}
		>
		</IconButton>
		
		<img style={{ width : '120px'}} src='https://assets.soyhenry.com/logos/LOGO-HENRY-04_w.png' alt="logo" />
		<Typography variant="h6" sx={{marginLeft : '3%'}}>
		  Carreras
		  <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
      </IconButton>
			<Menu
				id="menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuList>
					<MenuItem onClick={handleClose}>Opción 1</MenuItem>
					<MenuItem onClick={handleClose}>Opción 2</MenuItem>
					<MenuItem onClick={handleClose}>Opción 3</MenuItem>
				</MenuList>
			</Menu>
		</Typography>		
	  </Toolbar>
	</AppBar>
  </Box>
};

export default NavBarLanding;
