import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import Header from './Header'

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class HomePage extends React.Component {



    render(){

        return(
            <div className="HomePage">

                <div className="Bar">
                    <AppBar
                        title="FindUs"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </div>
                <div className="Tabular">
                    <Tabs>
                        <Tab
                            label="Profile"
                        />
                        <Tab
                            label="Search"
                        />
                        <Tab
                            label={<Badge badgeContent={4} secondary={true} badgeStyle={{top: 10, right: 1}}>Requests</Badge>}
                        />
                    </Tabs>
                </div>
                <Header/>
                <h1>Home</h1>
            </div>
        )
    }
}


export default HomePage;
