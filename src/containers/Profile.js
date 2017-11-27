import React from 'react';
import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';

class Profile extends React.Component {

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
                margin: '0px 40px 40px 40px'
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
          },
          title: {
              fontWeight: 'bold',
              fontSize: '30px'
          }
        };

        return(
            <div className="Profile">


                <div style={styles.container}>
                    <Subheader style={styles.title}>Profile</Subheader>
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

export default Profile;
