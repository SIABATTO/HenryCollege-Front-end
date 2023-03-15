import imageLogo from '../../assets/images/henryBlanco.png'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
  } from "@mui/material";
  
  export default function MyCard() {
    return (
      <Card
        sx={{
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
            <h2>Database Fundamentals Course</h2>
            <p>
            Bienvenidos conceptos básicos y contexto histórico de las Bases de Datos.
            </p>
          </CardContent>
        </CardActionArea>
  
        <CardActions>
          <Button variant="contained">Add</Button>
          <Button>Remove</Button>
        </CardActions>
      </Card>
    );
  }
  