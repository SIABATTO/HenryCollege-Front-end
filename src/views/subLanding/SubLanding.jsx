import { Box } from "@mui/system";
import React from "react";
import imageGirl from "../../assets/images/LandingGirl.jpg";
import Footer from "../../components/footer/Footer";
import styles from "./SubLanding.module.css";
import SearchBar from "../../components/searchBar/SearchBar";

function SubLanding() {
  return (
    <Box>
      <Box sx={{ bgcolor: 'common.black', color: 'white' }}>
        <Box className={styles.container}>
          <Box className={styles.h}>
            <h1>Actualizate de las nuevas tecnologías</h1>
            <h2>Cursos a precios asequibles</h2>
            <p>
              Mantente actualizado y sigue aprendiendo para alcanzar tus
              objetivos profesionales, es por eso que te invitamos a ver
              nuestros cursos cortos.
            </p>
          </Box>
          <Box>
            <img style={{ width: "100%" }} src={imageGirl} alt="logo" />
          </Box>
        </Box>
      </Box>
      <SearchBar />
      <Footer />
    </Box>
  );
}

export default SubLanding;
