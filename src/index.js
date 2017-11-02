import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App'

render(
    <BrowserRouter>
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
    </BrowserRouter>,
    document.querySelector('#main')
);
