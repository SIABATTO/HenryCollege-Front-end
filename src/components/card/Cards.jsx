import imageLogo from '../../assets/images/henryBlanco.png'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  
  export default function MyCard({  name, image,level,tags }) {
    return (
      <Card
        sx={{ 
          mr: 4,
          maxWidth: 180,
          height: 220,
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: '20%' }}
            component='img'
            image={image}            
            display='flex'

          />
          <CardContent>
            <Typography>{ name }</Typography>
            <Typography>{tags}</Typography>
            <Typography>Nivel: {level}</Typography>
          </CardContent>
          
        </CardActionArea>
  
        <CardActions >
          <Button sx={{ maxWidth: 50, ml: '10%' ,bgcolor:'#FFFF01',color:'#fffde7', fontSize: 10}}>Ver más</Button>
          <Button sx={{ maxWidth: 50, ml: '10%' ,bgcolor:'#212121',color:'#fffde7', fontSize: 10}}>Inscribirse</Button>
        </CardActions>
      </Card>
    );
  }