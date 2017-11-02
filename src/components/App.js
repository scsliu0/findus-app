import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import HomePage from './HomePage';
import SearchPage from './SearchPage'

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/searchpage'} component={SearchPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App
