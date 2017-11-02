import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Menubar from './Menubar';
import ProfilePage from './ProfilePage';
import SearchPage from './SearchPage';
import RequestsPage from './RequestsPage';
import base from '../base';

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

    constructor(){
        super();
        this.getUser = this.getUser.bind(this);
        //initialState
        this.state={
            users: {}
        };
    }

    componentWillmount(){
        const address= this.props.params.userId+'/users';
        console.log({address});
        this.userRef = base.syncState({address}, {
            context: this,
            state: 'users'
        });
    }

    componentWillUnMount(){
        base.removeBinding(this.ref);
    }

    getUser(user){
        const users = {...this.state.users};
        users['users']=user;
        this.setState({ users });
    }


    render(){
        return(
            <div className="App">
                <Menubar />
                    <Paper style={paperStyle} zDepth={3}>
                        <div className="tabular">
                            <Tabs>
                                <Tab  label="Profile">
                                    <ProfilePage getUser={this.getUser} />
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
