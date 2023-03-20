import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const avatar = [
  {
        name: "Brenda Belen",
        link: "https://www.linkedin.com/in/brenda-belen-8772aa211/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "Catalina Hernandez",
        link: "https://www.linkedin.com/in/catalina-hernandez-mejia/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "Alejo Jubany",
        link: "https://www.linkedin.com/in/alejo-jubany-7a707519a/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "Andres Siabatto",
        link: "https://www.linkedin.com/in/andres-siabatto-garcia-92149a162",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      
      {
        name: "Emmanuel Nuñez",
        link: "https://www.linkedin.com/in/emmanuel-nu%C3%B1ez-b6070a23a/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "David Duarte",
        link: "https://www.linkedin.com/in/david-duarte-5756031b9/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "Alejandra Betancour",
        link: "https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
      {
        name: "Jerrson ",
        link: "https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/",
        imageUrl:
          "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
      },
]

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  return (
    <>
    <Typography variant="h4" gutterBottom>Equipo Henry College</Typography>
    <Grid container spacing={2} >
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                gap: 6,
                height: 250
              }}
            >
              {avatar.map((elevation) => (
                <Item key={elevation} elevation={elevation} sx={{width : 200}}>
                  <Avatar src="/static/images/avatar/2.jpg" />
                  <Typography>{elevation.name}</Typography>
                  <a href={elevation.link}target="_blank" rel="noopener noreferrer">
                    <Typography sx={{ color: "blue" }} >Linkedin</Typography>
                  </a>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </>
  );
}