import React from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const paperStyle={
        height: 650,
        width: 1200,
        position: 'fixed',
        top: '12%',
        left: '12%',
        align: 'center',
        display: 'inline-block'
}

class HomePage extends React.Component {
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
                        <MenuItem onClick={this.handleClose}>Login</MenuItem>
                        <MenuItem onClick={this.handleClose}>About Us</MenuItem>
                </Drawer>
                <Paper style={paperStyle} zDepth={3}/>
                <TextField hintText="Username or email"/><br />
                <TextField hintText="password"/>
            </div>
        )
    }
}

export default HomePage
