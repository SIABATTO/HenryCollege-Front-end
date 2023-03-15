import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Pagination from './components/paged/Paged'
import { Route, Routes } from "react-router-dom";
import { Home, Landing } from './views'
import NavBar from './components/navBar/NavBar'

function App() {

  return (

      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/Courses" element={<Home/>} />
        </Routes>
      </div>
  )
}

export default App