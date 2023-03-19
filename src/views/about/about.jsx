// import { Link } from "react-router-dom";
// import styles from "./about.module.css";
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Box,
// } from "@mui/material";
// import { Rowing } from "@mui/icons-material";

// const team = [
//   {
//     name: "Brenda Belen",

//     link: "https://www.linkedin.com/in/brenda-belen-8772aa211/",

//     imageUrl:
//       "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
//   },
//   {
//     name: "Catalina Hernandez",

//     link: "https://www.linkedin.com/in/catalina-hernandez-mejia/",

//     imageUrl:
//       "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
//   },
//   {
//     name: "Alejo Jubany",

//     link: "https://www.linkedin.com/in/alejo-jubany-7a707519a/",

//     imageUrl:
//       "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
//   },

// {
//   name: "Andres Siabatto",

//   link: "https://www.linkedin.com/in/andres-siabatto-garcia-92149a162",

//   imageUrl:
//     "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
// },

// {
//   name: "Emmanuel Nuñez",

//   link: "https://www.linkedin.com/in/emmanuel-nu%C3%B1ez-b6070a23a/",

//   imageUrl:
//     "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
// },
// {
//   name: "David Duarte",

//   link: "https://www.linkedin.com/in/david-duarte-5756031b9/",

//   imageUrl:
//     "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
// },
// {
//   name: "Alejandra Betancour",

//   link: "https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/",

//   imageUrl:
//     "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
// },

// ];

// export default function About() {

//   return (
    
//     <Box>
//       <Typography sx={{ color: "black" }} paddingTop="10rem" variant="subtitle1" gutterBottom>
//         Henry College es una aplicación creada por un equipo de ocho miembros
//         con experiencia en desarrollo de software, hemos diseñado una interfaz
//         de usuario. Ésta aplicación proporciona cursos cortos gratuitos y pagos
//       </Typography>
      
//          {team.map(({name, link, imageUrl})=>{
//           return(
//             <div key={name}>
          
//       <Card
//         sx={{
//           width:150,
//           mt: 20,
//           ml: 5,
//           transition: "0.2s",
//           "&:hover": {
//             transform: "scale(1.05)",
//           },
//         }}
//         display='flex'
        
//       >
//         <CardActionArea>
//           <img src={imageUrl} />
//           <CardContent>
//             <Typography sx={{ color: "black" }}>{name}</Typography>

//             <a href={link}target="_blank" rel="noopener noreferrer">
//               <Typography sx={{ color: "black" }} >linkedin</Typography>
//             </a>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//       </div>
//          )})}
//     </Box>
    
//   );
// }
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// export default function TitlebarImageList() {
//   return (
//     <ImageList sx={{ width: 400, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
// ];

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}