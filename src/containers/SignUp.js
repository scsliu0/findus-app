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
              margin: '80px 20px 20px 15px'
            },

            form:{
                margin: '40px'
            },

            toggleDiv: {
              maxWidth: 300,
              marginTop: 40,
              marginBottom: 5
            },
            toggleLabel: {
              color: grey400,
              fontWeight: 100
            },
            buttons: {
              marginTop: 30,
              float: 'right'
            },
            saveButton: {
              marginLeft: 5
            }
        };

        return(
            <div className="SignUp">
                <Header styles={styles.header}/>

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
