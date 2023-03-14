import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navBar/NavBar'
import { ThemeProvider,createTheme } from '@mui/material'
import NavBarLanding from './components/NavBarLanding/NavBarLanding'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      paper: '#fff',
    },
  },
})

function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      {/* <NavBar/> */}
      <NavBarLanding/>
    </ThemeProvider>
    </div>
  )
}

export default App
