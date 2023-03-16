import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import CardsContainer from "../../components/cardContainer/CardContainer";
import SearchBar from "../../components/searchBar/SearchBar";

  return (
    <Box>
      <SearchBar/>
      <CardsContainer/>
      <Paged/>
      <Footer/>
    </Box>
  );


export default Home;
