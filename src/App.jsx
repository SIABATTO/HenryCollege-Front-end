import { useState } from 'react'
import './App.css'
import Pagination from './components/paged/Paged'
import Footer from './components/footer/Footer'
import { Container } from '@mui/system'
import { Landing } from './views'
function App() {

  return (
    <Container>
      <div className="App">
        <Landing/>
      </div>
    </Container>
  )
}

export default App