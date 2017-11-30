import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';

import NotFound from './containers/NotFound';
import SignUp from './containers/SignUp';
import App from './containers/App';
import ConnectionsPage from './containers/ConnectionsPage';
import Profile from './containers/Profile';
import Requests from './containers/Requests';
import SearchPage from './containers/SearchPage';
import Login from './containers/Login';
import Logout from './containers/Logout'

import Header from './components/Header';

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Match exactly pattern="/signup" component={SignUp}/>
                <Match exactly pattern="/user/:userId/connections" component={App}/>
                <Match exactly pattern="/user/:userId/profile" component={App}/>
                <Match exactly pattern="/user/:userId/requests" component={App}/>
                <Match exactly pattern="/user/:userId/search" component={App}/>
                <Match exactly pattern="/logout" component={Logout}/>
                <Match exactly pattern="/login" component={Login}/>

                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
  <MuiThemeProvider muiTheme={ThemeDefault}><Root /></MuiThemeProvider>,
  document.getElementById('main')
);
