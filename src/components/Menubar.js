import React from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Menubar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {open: false};
    }

    render(){
        return(
            <div className="HomePage">
                <AppBar
                    title="FindUs"
                    onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                />
                <Drawer
                          docked={false}
                          width={200}
                          open={this.state.open}
                          onRequestChange={(open) => this.setState({open})}
                        >
                        <MenuItem>FindUs</MenuItem>
                        <Divider />
                        <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                        <MenuItem onClick={this.handleClose}>About Us</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Menubar
