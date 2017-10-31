import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';

class App extends React.Component {
    render(){
        return(
            <div className="App">
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
            </div>
        )
    }
}

export default App
