import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from '@mui/system'
<<<<<<< HEAD

import MyCard from './components/card/Cards'


=======
import Cards from "@mui/material"
import { Landing } from './views'
>>>>>>> 45ac3b356a44d4ad7b44dfb5fbb7f84e47680f11
function App() {
  const [count, setCount] = useState(0)

  return (
  
 
    <div className="App">
<<<<<<< HEAD
        <Container>
      <MyCard/>
   
      </Container>
=======
      
      <Landing/>

>>>>>>> 45ac3b356a44d4ad7b44dfb5fbb7f84e47680f11
    </div>
  
  )
}

export default App
