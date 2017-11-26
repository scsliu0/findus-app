import React from 'react';
import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Header from '../components/Header';

class ProfilePage extends React.Component {

    render(){
        const styles = {
            toggleDiv: {
              maxWidth: 300,
              marginTop: 40,
              marginBottom: 5
            },
            container: {
              margin: '80px 20px 20px 15px'
            },
            form:{
                margin: '40px'
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
            <div className="ProfilePage">
                <Header styles={styles.header}/>

                <div style={styles.container}>
                  {this.props.children}
                </div>
                    <div className="Profile">
                        <form style={styles.form}>
                            <TextField
                            hintText="Name"
                            floatingLabelText="Name"
                            fullWidth={true}
                            />

                            <TextField
                            hintText="Interests"
                            floatingLabelText="Interests(seperated by a comma)"
                            fullWidth={true}
                            />

                            <TextField
                            hintText="Contact Number"
                            floatingLabelText="Contact Number"
                            fullWidth={true}
                            />

                            <TextField
                            disabled={true}
                            hintText="Location"
                            floatingLabelText="Location"
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

export default ProfilePage;
