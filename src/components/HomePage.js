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
    left: '15px'
}

const logoDiv={
    position:'absolute',
    top: '10%',
    left: '38%',
    height: '50px',
    width: '50px'
}



class HomePage extends React.Component {

    constructor(){
        super();
        this.goToApp = this.goToApp.bind(this);
    }

    goToApp(event){
        event.preventDefault();
        console.log('Going to User');
        this.context.router.transitionTo('/user/123');
    }

    render(){
        return(
            <div className="HomePage">
                <Menubar />
                <Paper style={paperStyle} zDepth={3}>
                    <div style={logoDiv} className="logo">
                        <img alt="findus-logo" src={logo}/>
                    </div>
                    <div style={loginStyle} className="loginInfo">
                        <RaisedButton onClick={this.goToApp} label="Login with Facebook" primary={true} style={butStyle} />
                    </div>
                </Paper>
                <div className="loginInfo">
                </div>
            </div>
        )
    }
}

HomePage.contextTypes = {
    router: React.PropTypes.object
}

export default HomePage
