import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Pagination from './components/paged/Paged'
import { Landing } from './views'
function App() {

  return (
    <Container>
      <div className="App">
        <Landing/>
      </div>
        <Footer/>
    </Container>
  )
}

export default App