import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const NavBarLanding = () => {

	return <Box sx={{ flexGrow: 1 }}>
	<AppBar position="fixed" color="secondary">
	  <Toolbar>	
		<img style={{ width : '120px'}} src='https://assets.soyhenry.com/logos/LOGO-HENRY-04_w.png' alt="logo" />
		<Typography variant="h6" sx={{marginLeft : '3%'}}>
		  Carreras			
		</Typography>		
	  </Toolbar>
	</AppBar>
  </Box>
};

export default NavBarLanding;
