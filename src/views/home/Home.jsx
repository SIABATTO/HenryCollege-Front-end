import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import cardsContainer from "../../components/cardContainer/cardCointainer";
import SearchBar from "../../components/searchBar/SearchBar";

function Home() {
  return (
    <Box>
      <SearchBar/>
      <cardsContainer/>
      <Paged/>
      <Footer/>
    </Box>
  );
}

export default Home;
