import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import NavBar from './components/navBar/NavBar'
import { About, Form, Home, Landing, SubLanding } from './views'
import FormRegister from './views/formRegister/FormRegister'

function App() {

  const location = useLocation();

  return (

      <div className="App">
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/courses" element={<SubLanding/>} />
          <Route exact path="/henrycollege" element={<SubLanding/>} />
          <Route exact path="/henrycollege/courses" element={<Home/>} />
          <Route exact path="/henrycollege/register" element={<FormRegister/>} />
          <Route exact path="/henrycollege/iniciarsesion" element={<Form/>} />
          <Route exact path="/henrycollege/nosotros" element={<About/>} />          
        </Routes>
      </div>
  )
}

export default App