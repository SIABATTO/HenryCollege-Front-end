import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import CardsContainer from "../../components/cardContainer/CardContainer";
// import SearchBar from "../../components/searchBar/SearchBar";

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
