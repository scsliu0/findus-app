import React from 'react';
import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Header from '../components/Header';
import Subheader from 'material-ui/Subheader';

class SignUp extends React.Component {
    render(){
        const styles = {
            container: {
              margin: '20px 20px 0px 15px'
            },

            form:{
                margin: '0px 20px 20px 40px'
            },

            buttons: {
              marginTop: 30,
              float: 'right'
            },
            saveButton: {
              marginLeft: 5
            },
            title: {
                fontSize: '32px',
                fontWeight: 'bold'
            }
        };

        return(
            <div className="SignUp">

                <div style={styles.container}>
                  <Subheader style={styles.title}>Sign Up</Subheader>
                </div>
                    <div className="SignUp">
                        <form style={styles.form}>
                            <TextField
                            hintText="Name"
                            floatingLabelText="Name"
                            fullWidth={true}
                            />

                            <TextField
                            hintText="E-Mail"
                            floatingLabelText="E-Mail"
                            fullWidth={true}
                            />

                            <TextField
                              hintText="Password"
                              floatingLabelText="Password"
                              fullWidth={true}
                              type="password"
                            />

                            <TextField
                            hintText="Interests"
                            floatingLabelText="Interests(seperated by a comma)"
                            fullWidth={true}
                            />

                            <div style={styles.buttons}>
                                <RaisedButton label="Cancel"/>

                                <RaisedButton label="Save"
                                            style={styles.saveButton}
                                            type="submit"
                                            primary={true}/>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;
