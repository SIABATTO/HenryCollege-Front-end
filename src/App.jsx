import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
<<<<<<< HEAD
import Pagination from './components/paged/Paged'
import Footer from './components/footer/Footer'
=======
import { Container } from '@mui/system'
import Cards from "@mui/material"
import { Landing } from './views'
>>>>>>> ddf2e80a4ce6a046dc134e96ff9c18c2790cf23d
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Cards/>
 
    <div className="App">
<<<<<<< HEAD
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Footer/>
        <Pagination/>
      </div>
=======
      
      <Landing/>

>>>>>>> ddf2e80a4ce6a046dc134e96ff9c18c2790cf23d
    </div>
    </Container>
  )
}

export default App
