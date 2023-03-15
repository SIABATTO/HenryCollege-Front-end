import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from '@mui/system'

import MyCard from './components/card/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
  
 
    <div className="App">
        <Container>
      <MyCard/>
   
      </Container>
    </div>
  
  )
}

export default App
