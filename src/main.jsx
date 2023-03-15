import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffc107',  //amarillo
    },
    secondary: {
      main: '#fafafa',  //blanco
      contrastText: 'white', // color de texto secundario
     
    },
    background: {
      paper: '#080808', //negro
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  // </Provider>,
)