import { Container } from '@mui/system'
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import { Home, Landing } from './views'

function App() {

  return (
    <div>
      <div className="App">
        <Home/>
        <Landing/>
      </div>
        <Footer/>
<<<<<<< HEAD
        <Pagination/>
    </Container>
=======
    </div>
>>>>>>> 7d4d2d13015c624da1df79b9c477dfa701b471dd
  )
}

export default App