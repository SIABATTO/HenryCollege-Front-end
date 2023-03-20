// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';

// export default function Detail() {
//   const courses = [
//     {
//       name: "Curso HTML & CSS y Fundamentos CSS",
//       tags: "HTML",
//       level: "Basico",
//       duration : "2",
//       price: "50",
//       description: "En este curso te enseñamos los fundamentos de CSS, el lenguaje que define la presentación del contenido en la web.",
//       videoSrc: "https://www.youtube.com/embed/K3xmRF8ab1o",
//       imageSrc: "https://i.ytimg.com/vi/K3xmRF8ab1o/maxresdefault.jpg",
//       teacher : [
//         {
//           firstName: "ramon",
//           lastName: "valdez",
//           email: "jgkhgkh@on.com",
//           phone: "312659896"
//         }
//       ]
//     }
//   ]

//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardMedia
//           component="video"
//           controls
//           height="200em"
//           width="80%"
//           src={courses[0].videoSrc}
//         />
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             {courses[0].name}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             {courses[0].teacher[0].firstName}
//           </Typography>
//         </CardContent>
//       </Box>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h6">
//             Nivel : {courses[0].level}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Duration : {courses[0].duration}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Price : {courses[0].price}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Otros : {courses[0].tags}
//           </Typography>
//         </CardContent>
//     </Card>
//   );
// }
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

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
          firstName: "ramon",
          lastName: "valdez",
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
        <Box sx={{ width: "100%", height: "200px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SNSzN7dT_zA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {courses[0].name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {courses[0].teacher[0].firstName}
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h6">
          Nivel : {courses[0].level}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Duration : {courses[0].duration}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Price : {courses[0].price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Otros : {courses[0].tags}
        </Typography>
      </CardContent>
        
    </Card>
  );
}
