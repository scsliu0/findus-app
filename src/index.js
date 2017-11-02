import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App'
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import RequestsPage from './components/RequestsPage';

render(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.getElementById('main')
);
