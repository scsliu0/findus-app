import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';

import NotFound from './containers/NotFound';
import SignUp from './containers/SignUp';
import App from './containers/App';
import ConnectionsPage from './containers/ConnectionsPage';
import ProfilePage from './containers/ProfilePage';
import RequestsPage from './containers/RequestsPage';
import SearchPage from './containers/SearchPage';
import Header from './components/Header';

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Match exactly pattern="/signup" component={SignUp}/>
                <Match exactly pattern="/connections" component={ConnectionsPage}/>
                <Match exactly pattern="/profile" component={ProfilePage}/>
                <Match exactly pattern="/requests" component={RequestsPage}/>
                <Match exactly pattern="/search" component={SearchPage}/>
                <Match exactly pattern="/test" component={Header}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
  <MuiThemeProvider muiTheme={ThemeDefault}><Root /></MuiThemeProvider>,
  document.getElementById('main')
);
