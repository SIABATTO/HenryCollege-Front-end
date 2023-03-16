import imageLogo from '../../assets/images/henryCard.png';
import {
    Button,
    Container,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
  } from "@mui/material";
  
  export default function MyCard() {
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
            src={imageLogo}
            height='100px'
          
          />
          <CardContent>
            <h2>Database Fundamentals Course</h2>
            <p>
            Bienvenidos conceptos básicos y contexto histórico de las Bases de Datos.
            </p>
          </CardContent>
        </CardActionArea>
  
        <CardActions>
          <Button variant="contained">Add</Button>
          <Button color="error">Remove</Button>
        </CardActions>
      </Container>
    );
  }
  