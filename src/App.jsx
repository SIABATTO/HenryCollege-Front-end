import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Pagination from './components/paged/Paged'
import { Route, Routes } from "react-router-dom";
import { Form, Home, Landing, } from './views'
import NavBar from './components/navBar/NavBar'
import About from './views/about/about'

function App() {

  return (

      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/courses" element={<Home/>} />
          <Route exact path="/courses/iniciarsesion" element={<Form/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
  )
}

export default App