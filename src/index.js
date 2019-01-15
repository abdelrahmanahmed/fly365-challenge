import React from 'react';
import ReactDOM from 'react-dom';
/*************************************** Providers ***************************************/
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
/*************************************** Components ***************************************/
import Home from './components/home';

ReactDOM.render(
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
  , document.querySelector('.container'));