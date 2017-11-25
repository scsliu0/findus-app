import React from 'react';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import PageBase from '../components/PageBase';

class SignUp extends React.Component {
    render(){
        const styles = {
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
            <PageBase title="Sign Up">
                <div className="SignUp">
                    <form>
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
            </PageBase>
        )
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;
