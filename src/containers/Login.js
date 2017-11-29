import React from 'react'
import {FlatButton, Paper, RaisedButton, Snackbar, TextField} from "material-ui";
import {grey500, white} from 'material-ui/styles/colors';
import logo from '../img/findUs.png';


import {base, facebookProvider, googleProvider} from "../base";

const styles = {
    loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '5%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    paper: {
        padding: 20,
        overflow: 'hidden'
    },
    buttonsDiv: {
        textAlign: 'center',
        padding: 10
    },
    registerButton: {
        color: grey500
    },
    checkRemember: {
        style: {
            float: 'left',
            maxWidth: 180,
            paddingTop: 5
        },
        labelStyle: {
            color: grey500
        },
        iconStyle: {
            color: grey500,
            borderColor: grey500,
            fill: grey500
        }
    },
    loginBtn: {
        float: 'right'
    },
    btn: {
        background: '#4f81e9',
        color: white,
        margin: 2,
        fontSize: 13
    },
    btnFacebook: {
        background: '#4f81e9'
    },
    btnGoogle: {
        background: '#e14441'
    },
    btnSpan: {
        marginLeft: 5
    },
    logoDiv: {
        align: 'center',
        paddingLeft: '13%'

    }
};

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: null,
            password: null,
            loginFail: false,
            loginFailText: ""
            //redirect: false
        }
    }

    authWithFacebook = () => {
        base.auth().signInWithPopup(facebookProvider)
            .then((result, error) => {
                if(error){
                    console.log(error)
                } else {

                    base.fetch('users/'+ result.user.uid, {
                        context: this,
                        then(data) {
                            if (data === null) {
                                base.post('users/'+result.user.uid, {
                                    data: {
                                        name: result.user.displayName,
                                        contactNum: "",
                                        location: "",
                                        email: result.user.email,
                                        provider: "facebook.com",
                                        interests: {}
                                    },
                                    then(err){
                                        if(!err){
                                            console.log("New user saved to database!");
                                        }
                                    }
                                });
                            }
                            console.log(result.user.uid + " signed in with Facebook");

                            this.context.router.transitionTo('/user/' + result.user.uid + '/profile');
                        }
                    });
                }
            })
    };

    authWithGoogle = () => {
        base.auth().signInWithPopup(googleProvider)
            .then((result, error) => {
                if (error) {
                    console.log(error)
                } else {

                    base.fetch('users/' + result.user.uid, {
                        context: this,
                        then(data) {
                            if (data === null) {
                                base.post('users/' + result.user.uid, {
                                    data: {
                                        name: result.user.displayName,
                                        contactNum: "",
                                        location: "",
                                        email: result.user.email,
                                        provider: "google.com",
                                        interests: {}
                                    },
                                    then(err) {
                                        if (!err) {
                                            console.log("New user saved to database!");
                                        }
                                    }
                                });
                            }
                            console.log(result.user.uid + " signed in with Google");
                            this.context.router.transitionTo('/user/' + result.user.uid + '/profile');
                        }
                    });

                }
            })
    };

    authWithEmailPassword = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        base.auth().fetchProvidersForEmail(data.email)
            .then((providers) =>{
                if(providers.length===0) {
                    //create user
                    return base.auth().createUserWithEmailAndPassword(data.email,data.password)
                        .then((result) =>{
                        console.log(result);
                                        base.fetch('users/' + result.uid, {
                                            context: this,
                                            then(data) {
                                                if (data === null) {
                                                    base.post('users/' + result.uid, {
                                                        data: {
                                                            name: "",
                                                            contactNum: "",
                                                            location: "",
                                                            email: result.email,
                                                            provider: "findus.com",
                                                            interests: {}
                                                        },
                                                        then(err) {
                                                            if (!err) {
                                                                console.log("New user saved to database!");
                                                            }
                                                        }
                                                    });
                                                }
                                                this.context.router.transitionTo('/user/' + result.uid + '/profile');
                                            }
                                        });

                        })

                } else if (providers.indexOf("password") === -1) {
                    //they used google or facebook
                    this.loginForm.reset();
                    this.setState({
                        loginFail: true,
                        loginFailText: "Account already created with that email using Facebook or Google"
                    });
                    console.log("Account already created");
                } else {
                    //they have created an account with email/password. Log them in here
                    return base.auth().signInWithEmailAndPassword(data.email, data.password)
                        .then((result) => {
                            this.context.router.transitionTo('/user/'+result.uid+'/profile');
                        })
                }
            })
            .catch((error)=>{
                console.log(error);
                if(error.code === "auth/wrong-password"){
                    this.setState({
                        loginFail: true,
                        loginFailText: "Invalid email or password"
                    });
                }
            })
    };

    handleChange = (event, value) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: value
        })
    };

    goToSignUp = () => {
        this.context.router.transitionTo('/signup');
    };

    render() {
        return(
            <div>
                <div style={styles.loginContainer}>
                    <Paper style={styles.paper}>
                        <form>
                            <div className="logo">
                                <img style={
                                    styles.logoDiv
                                }
                                     alt="findus-logo" src={logo}/>
                            </div>
                            <TextField
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                                floatingLabelFixed={true}
                                onChange={this.handleChange}
                                type="email"
                                name={"email"}
                                className="input"
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                fullWidth={true}
                                type="password"
                                floatingLabelFixed={true}
                                onChange={this.handleChange}
                                name={"password"}
                                className="input"
                            />
                            <RaisedButton
                                label="Login"
                                primary={true}
                                style={styles.loginBtn}
                                onClick={this.authWithEmailPassword}
                            />

                        </form>
                    </Paper>

                    <div style={styles.buttonsDiv}>


                        <div style={styles.buttonsDiv}>
                            <RaisedButton style={styles.btn}
                                          onClick={()=>this.authWithFacebook()}
                                          label={"Login With Facebook"}
                                          primary={true}
                            />

                            <RaisedButton style={styles.btn}
                                        onClick={()=>this.authWithGoogle()}
                                        label={"Login With Google"}
                                          secondary={true}
                            />

                        </div>
                        <FlatButton
                            label="Register"
                            onClick={this.goToSignUp}
                            style={styles.registerButton}
                        />
                    </div>
                </div>
                <Snackbar
                    open={this.state.loginFail}
                    message={this.state.loginFailText}
                    autoHideDuration={5000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}
export default Login

Login.contextTypes = {
    router: React.PropTypes.object
};
