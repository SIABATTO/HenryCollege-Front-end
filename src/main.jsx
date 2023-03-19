import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFF01', //amarillo
      contrastText: 'black', // color de texto secundario
    },
    secondary: {
      main: '#fafafa', //blanco
      contrastText: 'black', // color de texto secundario
    },
    tertiary: {
      main: '#000000', //negro
      contrastText: 'white', // color de texto secundario
    },
    background: {
      paper: '#fafafa', //negro
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)