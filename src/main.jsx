import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#ffc107',  //amarillo
//     },
//     secondary: {
//       main: '#fafafa',  //blanco
//       contrastText: 'white', // color de texto secundario
     
//     },
//     background: {
//       paper: '#080808', //negro
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
          <App />
        {/* </ThemeProvider> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)