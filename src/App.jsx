import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from '@mui/system'
import Cards from "@mui/material"
import { Landing } from './views'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Cards/>
 
    <div className="App">
      
      <Landing/>

    </div>
    </Container>
  )
}

export default App
