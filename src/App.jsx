import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Pagination from './components/paged/Paged'
import { Route, Routes, useLocation } from "react-router-dom";
import { Detail, Form, Home, Landing, SubLanding } from './views'
import NavBar from './components/navBar/NavBar'

function App() {

  const location = useLocation();

  return (

      <div className="App">
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/henrycollege" element={<SubLanding/>} />
          <Route exact path="/henrycollege/courses" element={<Home/>} />
          <Route exact path="/henrycollege/courses/iniciarsesion" element={<Form/>} />
        </Routes>
      </div>
  )
}

export default App