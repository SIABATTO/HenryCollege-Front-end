import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import NavBar from './components/navBar/NavBar'
import { About, Detail, Form, Home, Landing, SubLanding, UserDashboard, FormRegister } from './views'
import React from "react"

function App() {

  const location = useLocation();

  return (

      <div className="App">
        {location.pathname !== "/" && <NavBar />}
        
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/dashboard" element={<UserDashboard/>} />
          <Route exact path="/courses" element={<SubLanding/>} />
          <Route exact path="/henrycollege" element={<SubLanding/>} />
          <Route exact path="/henrycollege/courses" element={<Home/>} />
          <Route exact path="/henrycollege/registrarse" element={<FormRegister/>} />
          <Route exact path="/henrycollege/iniciarsesion" element={<Form/>} />
          <Route exact path="/henrycollege/nosotros" element={<About/>} />          
          <Route exact path="/henrycollege/detalle/:id" element={<Detail/>} />          
        </Routes> 

        
      </div>
  )
}

export default App