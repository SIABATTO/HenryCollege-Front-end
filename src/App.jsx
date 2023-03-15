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
    </div>
  )
}

export default App