import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { Link } from 'react-router-dom';
  
  export default function Cards({  name, image,Subject,type }) {
    return (
      <Link to={"/henrycollege/detalle"}>
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
              <Typography>{type}</Typography>
            </CardContent>
            
          </CardActionArea>
    
          <CardActions >
            <Button sx={{ maxWidth: 50, ml: '10%' ,bgcolor:'#FFFF01',color:'#fffde7', fontSize: 10}}>Add</Button>
            <Button sx={{ maxWidth: 50, ml: '10%' ,bgcolor:'#212121',color:'#fffde7', fontSize: 10}}>Remove</Button>
          </CardActions>
        </Card>
      </Link>
    );
  }