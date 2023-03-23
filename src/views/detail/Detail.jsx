import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CustomizedRating from "../../components/Rating/Rating";

export default function Detail() {
  const courses = [
    {
      name: "Curso HTML & CSS y Fundamentos CSS",
      tags: "HTML",
      level: "Basico",
      duration: "2",
      price: "50",
      description:
        "En este curso te enseñamos los fundamentos de CSS, el lenguaje que define la presentación del contenido en la web.",
      videoSrc: "https://www.youtube.com/embed/K3xmRF8ab1o",
      imageSrc: "https://i.ytimg.com/vi/K3xmRF8ab1o/maxresdefault.jpg",
      teacher: [
        {
          firstName: "Ramon",
          lastName: "Valdez",
          email: "jgkhgkh@on.com",
          phone: "312659896",
        },
      ],
    },
  ];

  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "100%", height: "100%" }}>
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/SNSzN7dT_zA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {courses[0].name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Profesor:{" "}
            {`${courses[0].teacher[0].firstName} ${courses[0].teacher[0].lastName}`}
          </Typography>
        </CardContent>

        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            Nivel : {courses[0].level}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Duración : {courses[0].duration}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Costo : {courses[0].price}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Tema : {courses[0].tags}
          </Typography>

          <CustomizedRating />
        </CardContent>
      </Box>
    </Card>
  );
}
