import { Link } from "react-router-dom";
import styles from "./about.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Rowing } from "@mui/icons-material";

const team = [
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

];

export default function About() {

  return (
    
    <Box>
      <Typography sx={{ color: "black" }} paddingTop="10rem" variant="subtitle1" gutterBottom>
        Henry College es una aplicación creada por un equipo de ocho miembros
        con experiencia en desarrollo de software, hemos diseñado una interfaz
        de usuario. Ésta aplicación proporciona cursos cortos gratuitos y pagos
      </Typography>
      
         {team.map(({name, link, imageUrl})=>{
          return(
            <div key={name}>
          
      <Card
        sx={{
          width:500,
          mt: 20,
          ml: 5,
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        display='flex'
        
      >
        <CardActionArea>
          <img src={imageUrl} />
          <CardContent>
            <Typography sx={{ color: "black" }}>{name}</Typography>

            <a href={link}target="_blank" rel="noopener noreferrer">
              <Typography sx={{ color: "black" }} >linkedin</Typography>
            </a>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
         )})}
    </Box>
    
  );
}
