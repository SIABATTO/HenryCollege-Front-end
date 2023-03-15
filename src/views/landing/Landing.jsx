import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import imageGirl from "../../assets/images/LandingGirl.jpg";
import Footer from "../../components/footer/Footer";
import NavBarLanding from "../../components/navBarLanding/NavBarLanding";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <Box>
      <Link to={`/`}>
        <NavBarLanding/>
        <Box className={styles.container}>
          <Box className={styles.h}>
            <h1>Invertimos en tu educación</h1>
            <h2>Comienza a estudiar Desarrollo Full Stack o Data Science</h2>
            <p>Despega tu carrera en tecnología. Estudia a remoto y de manera intensiva. ¿Y lo mejor? Solo nos pagas cuando consigues un nuevo trabajo.</p>
          </Box>
          <Box>
            <img style={{ width : '100%'}} src={imageGirl} alt="logo" />
          </Box>
        </Box>
        <Footer/>
      </Link>
    </Box>
  );
}

export default Landing;