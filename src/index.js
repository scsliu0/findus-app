import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App'
import HomePage from './components/HomePage';

render(
  <MuiThemeProvider><HomePage /></MuiThemeProvider>,
  document.getElementById('main')
);
