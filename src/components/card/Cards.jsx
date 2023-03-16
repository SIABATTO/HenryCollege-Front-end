import imageLogo from '../../assets/images/henryCard.png';
import {
    Button,
    Container,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
  } from "@mui/material";
  
  export default function MyCard({  name, image,Subject,type }) {
    return (
      <Container
        sx={{ mt: 20,
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={"https://assets.soyhenry.com/logoOG.png"}
            height='100%'
            display='flex'
            flexDirection= 'column'
          />
          <CardContent>
            <h2>{ name }</h2>
            <h3>{type}</h3>
            <p>{Subject}</p>
          </CardContent>
          
        </CardActionArea>
  
        <CardActions >
          <Button variant="contained">Add</Button>
<<<<<<< HEAD
          <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}}>Remove</Button>
=======
          <Button color="error">Remove</Button>
>>>>>>> ad85007621214edeb40cb05e602cc54139e77bd1
        </CardActions>
      </Container>
    );
  }
  