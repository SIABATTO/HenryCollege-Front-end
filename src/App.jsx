import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navBar/NavBar'
import { ThemeProvider,createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#080808',
    },
  },
})

function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
    </div>
  )
}

export default App
