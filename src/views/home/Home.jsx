import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import cardsContainer from "../../components/cardContainer/cardCointainer";
import SearchBar from "../../components/searchBar/SearchBar";
import CardsContainer from "../../components/cardContainer/CardCointainer";
import { addCurses } from "../../redux/slices/Slices";
import { useDispatch, useSelector } from "react-redux";
// import Card from '@mui/material/Card';
// import CardContent from "@mui/material";

function Home() { 
  
  const dispatch = useDispatch()
  const [curse, setCurse] = useState([])
  
  const handlerClick = () => {
    dispatch(addCurses({
          "id": 49,
          "curse_name": "Senior Sales Associate",
          "type": "Kellby",
          "level": 96,
          "duration": "6:25 AM",
          "price": "$8.27",
          "start_date": "1/8/2023",
          "finish_date": "6/20/2022",
          "description": "Other hyperphenylalaninemias",
          "feedback": "Administration of botulism antitoxin"
        }))
      }
  const curses = useSelector(state=>state.curses)
  console.log(curses)

  return (
    <Box>
      <SearchBar/>
      <button onClick={()=> dispatch(handlerClick)}>Add Curse</button>   
      
        {/* <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.              
            </Typography>
          </CardContent>        
      </Card>
         */}
      <CardsContainer/>
      <Paged/>
      <Footer/>
    </Box>
  );
}

export default Home;
