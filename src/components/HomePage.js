import React from 'react';
import AppBar from 'material-ui/AppBar';

class HomePage extends React.Component {
    render(){
        return(
            <div className="HomePage">
                <AppBar
                    title="FindUs"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        )
    }
}

export default HomePage
