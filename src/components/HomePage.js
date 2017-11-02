import React from 'react';
import Menubar from './Menubar'
import Paper from 'material-ui/Paper';
import logo from '../img/findUs.png';
import RaisedButton from 'material-ui/RaisedButton';
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

const loginStyle={
    position: 'absolute',
    top: '52%',
    left: '40%'
}

/*const signUpStyle={
    position: 'absolute',
    top: '61%',
    left: '42.5%'
}*/

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
        this.goToSignUp = this.goToSignUp.bind(this);
        //this.authenticate = this.authenticate.bind(this);
        //this.authHandler = this.authHandler.bind(this);
    }

    goToSignUp(event){
        event.preventDefault();
        console.log('Going to User');
        this.context.router.transitionTo('/signup');
    }

    /*authenticate(provider){
        console.log('Trying to login with '+provider);
        base.auth().signInWithPopup(provider).then(() => {
            console.log('authData');
        });
    }*/

    goToApp(event){
        event.preventDefault();
        //console.log('Going to Sign Up');
        //this.authenticate('facebook');
        const timestamp = Date.now();
        this.context.router.transitionTo('/user/'+timestamp);
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
                    {/*<div style={signUpStyle} className="signUpInfo">
                        <RaisedButton onClick={this.goToSignUp} label="Create User" secondary={true} style={butStyle} />
                    </div>*/}
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
