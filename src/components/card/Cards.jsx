import imageLogo from '../../assets/images/henryBlanco.png'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
  } from "@mui/material";
  
  export default function MyCard({  name, image,Subject,type }) {
    return (
      <Card
        sx={{ 
          mt:5,
          ml:5,
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia sx={{mt:20,  width:"100%"}}
            image="https://assets.soyhenry.com/logoOG.png"
            height='100%'
            display='flex'
            width= {100}

          />
          <CardContent>
            <h2>{ name }</h2>
            <h3>{type}</h3>
            <p>{Subject}</p>
          </CardContent>
          
        </CardActionArea>
  
        <CardActions >
          <Button variant="contained">Add</Button>
          <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}}>Remove</Button>
        </CardActions>
      </Card>
    );
  }