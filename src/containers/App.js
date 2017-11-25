//Main App page
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import logo from '../img/findUs.png';
import TextField from 'material-ui/TextField';

class App extends React.Component {
    render(){
        const styles = {
          loginContainer: {
            minWidth: 320,
            maxWidth: 400,
            height: 'auto',
            position: 'absolute',
            top: '20%',
            left: 0,
            right: 0,
            margin: 'auto'
          },
          paper: {
            padding: 20,
            overflow: 'auto'
          },
          buttonsDiv: {
            textAlign: 'center',
            padding: 10
          },
          flatButton: {
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
            padding: 7,
            borderRadius: 2,
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
              paddingLeft: 50
          }
        };

        return(
            <div className="App">
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
                            />
                            <TextField
                              hintText="Password"
                              floatingLabelText="Password"
                              fullWidth={true}
                              type="password"
                            />
                            <RaisedButton
                            label="Login"
                            primary={true}
                            style={styles.loginBtn}/>
                        </form>
                    </Paper>

                    <div style={styles.buttonsDiv}>
                      <FlatButton
                        label="Register"
                        href="/"
                        style={styles.flatButton}
                      />

                      <div style={styles.buttonsDiv}>
                        <div style={{...styles.btn, ...styles.btnFacebook}}>
                          <i className="fa fa-facebook fa-lg"/>
                          <span style={styles.btnSpan}>Log in with Facebook</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
