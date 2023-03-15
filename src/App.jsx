import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import { Container } from '@mui/system'
import { Home, Landing } from './views'
function App() {

  return (
    <Container>
      <div className="App">
        <Home/>
        {/* <Landing/> */}
      </div>
        <Footer/>
    </Container>
  )
}

export default App