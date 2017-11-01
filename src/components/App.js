import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import Menubar from './Menubar';


class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Menubar />
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
