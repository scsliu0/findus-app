import React from 'react';
import Menubar from './Menubar'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import logo from '../img/findUs.png';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle={
    height: 650,
    width: 1200,
    position: 'fixed',
    top: '12%',
    left: '12%',
    align: 'center',
    display: 'inline-block'
}

const loginStyle={
    position: 'absolute',
    top: '52%',
    left: '40%'
}

const butStyle={
    margin: '5px',
    position: 'relative',
    left: '70px'
}

const logoDiv={
    position:'absolute',
    top: '10%',
    left: '38%',
    height: '50px',
    width: '50px'
}

class HomePage extends React.Component {
    render(){
        return(
            <div className="HomePage">
                <Menubar />
                <Paper style={paperStyle} zDepth={3}>
                    <div style={logoDiv} className="logo">
                        <img src={logo}/>
                    </div>
                    <div style={loginStyle} className="loginInfo">
                        <TextField hintText="Username or email"/><br />
                        <TextField hintText="password"/><br /><br />
                        <RaisedButton label="Login" primary={true} style={butStyle} /><br /><br />
                        <RaisedButton label="Sign Up" secondary={true} style={butStyle} />
                    </div>
                </Paper>
                <div className="loginInfo">
                </div>
            </div>
        )
    }
}

export default HomePage
