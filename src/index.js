import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App'

render(
    <MuiThemeProvider>
        <SearchPage/>
    </MuiThemeProvider>,
    document.querySelector('#main')
);
