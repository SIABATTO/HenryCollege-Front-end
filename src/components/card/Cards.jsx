import React from "react";
import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Cards({ name, image, level, tags }) {
  const buttonSx = {
    fontSize: "12px",
    bgcolor: "#FFFF01",
    "&:hover": {
      bgcolor: "#FFFF33",
    },
  };

  return (
    <Box
      margin={2}
      display="inline-flex"
      flexDirection="row"
      justifycontent="center"
      alignItems="center"
    >
      <Link to={"/henrycollege/detalle"}>
        <Card
          sx={{
            mr: 4,
            fontSize: 8,
            maxWidth: 250,
            height: 220,
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: "50%" }}
              component="img"
              image={image}
              display="flex"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifycontent="center"
              alignItems="center"
              height={170}
              width={250}
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  sx={{ fontSize: "18px" }}
                  variant="h6"
                >
                  {name}
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: "12px" }}>
                  Tema: {tags}
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: "12px" }}>
                  Nivel: {level}
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>

          <Box
            display="flex"
            flexDirection="column"
            justifycontent="center"
            alignItems="center"
          >
            <CardActions>
              <Button
                width={200}
                sx={{ fontSize: "12px", bgcolor: "#FFFF01" }}
                color="tertiary"
              >
                Ver más
              </Button>
              <Button
                width={200}
                sx={{
                  fontSize: "12px",
                  bgcolor: "#000000",
                  "&:hover": {
                    bgcolor: "#F0F0F0",
                    color: "#000000",
                  },
                }}
                color="secondary"
              >
                Inscribirse
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Link>
    </Box>
  );
}
