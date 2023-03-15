import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import CardsContainer from "../../components/cardContainer/CardCointainer";

function Home() {
  return (
    <Box>
      <CardsContainer/>
      <Paged/>
      <Footer/>
    </Box>
  );
}

export default Home;
