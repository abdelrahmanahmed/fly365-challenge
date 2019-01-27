import React from 'react';
import ReactDOM from 'react-dom';
/*************************************** Providers ***************************************/
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Provider } from 'react-redux';
/*************************************** Components ***************************************/
import Home from './components/home.component';
/*************************************** Stores ***************************************/
import store from './store/store';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));