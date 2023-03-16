import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { createTheme, ThemeProvider }from '@mui/material';
=======
import { createTheme, ThemeProvider } from '@mui/material/styles';
>>>>>>> dc98fc932284d2b8cfc33ee082dc6451893e91a8
import { Provider } from 'react-redux';
import store from './redux/store/Store';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFF01',  //amarillo
      contrastText: 'black', // color de texto secundario
    },
    secondary: {
      main: '#fafafa',  //blanco
      contrastText: 'black', // color de texto secundario
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