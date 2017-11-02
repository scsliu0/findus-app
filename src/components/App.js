import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import Paper from 'material-ui/Paper';

import Menubar from './Menubar';
import ProfilePage from './ProfilePage';
import SearchPage from './SearchPage';
import RequestsPage from './RequestsPage';

const paperStyle={
    height: 650,
    width: 1200,
    position: 'fixed',
    top: '12%',
    left: '12%',
    align: 'center',
    display: 'inline-block'
}

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Menubar />
                    <Paper style={paperStyle} zDepth={3}>
                        <div className="tabular">
                            <Tabs>
                                <Tab  label="Profile">
                                    <ProfilePage />
                                </Tab>
                                <Tab label="Search">
                                    <SearchPage />
                                </Tab>
                                <Tab label="Requests">
                                    <RequestsPage />
                                </Tab>
                            </Tabs>
                        </div>
                    </Paper>
                <div className="Tabular">

                </div>
            </div>
        )
    }
}

export default App
