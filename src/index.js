import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';
import App from './components/App';
import NotFound from './components/NotFound';
const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={HomePage}/>
                <Match exactly pattern="/user/:userId" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
  <MuiThemeProvider><Root /></MuiThemeProvider>,
  document.getElementById('main')
);
