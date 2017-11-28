import React from 'react';
import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';

import {base} from '../base'
import {CircularProgress, List, ListItem, Paper} from "material-ui";

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
    },
    paper:{
        height: 'auto',
        width: '50%',
        marginLeft: 25

    }
};

class Profile extends React.Component {

    constructor(){
        super();

        this.state={
            name: null,
            contactNum: null,
            location: null,
            loading: true,
            uid: null,
        }
    }


    componentDidMount(){
        this.fetchUserInfo();
    }

    fetchUserInfo = () => {
        base.fetch('users/'+ this.props.profileId, {
            context: this,
            then(data) {
                if (data === null) {
                    console.log("null data")
                } else {
                    this.setState({
                        name: data.name,
                        contactNum: data.contactNum,
                        uid: this.props.uid,
                        location: data.location,
                        loading: false
                    });
                }
            },

        })
    };
    handleSave = (event) => {
        event.preventDefault();
        base.update('users/'+this.props.uid, {
            data: {
                name: this.state.name,
                contactNum: this.state.contactNum,
                location: this.state.location,
                uid: this.state.uid
            },
            then(err){
                if(!err){
                    console.log("Info saved to database!");
                }
            }
        });
    };

    handleChange = (event, value) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: value
        })
    };



    render(){

        if(this.state.loading === true) {
            return(
                <div style={{textAlign: "center", position: "absolute", top:"20%", left:"40%"}}>
                    <h3>Loading Profile</h3>
                    <CircularProgress size={100} thickness={5} color={"#11C1F7"}/>
                </div>
            )
        }
        if(this.props.uid===this.props.profileId){
            return (
            <div>

                <div style={styles.container}>
                    <Subheader style={styles.title}>Your Profile</Subheader>

                </div>

                <form style={styles.form}>
                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        fullWidth={true}
                        onChange={this.handleChange}
                        value={this.state.name}
                        name={"name"}
                    />

                    <TextField
                        hintText="Interests"
                        floatingLabelText="Interests(seperated by a comma)"
                        fullWidth={true}
                        onChange={this.handleChange}
                        name={"interests"}
                    />

                    <TextField
                        hintText="Contact Number"
                        floatingLabelText="Contact Number"
                        fullWidth={true}
                        onChange={this.handleChange}
                        value={this.state.contactNum}
                        name={"contactNum"}
                    />

                    <TextField
                        hintText="Location"
                        floatingLabelText="Location"
                        fullWidth={true}
                        onChange={this.handleChange}
                        value={this.state.location}
                        name={"location"}
                    />


                    <div style={styles.buttons}>
                        <RaisedButton label="Save"
                                      style={styles.saveButton}
                                      type="submit"
                                      primary={true}
                                      onClick={this.handleSave}
                        />
                    </div>
                </form>
            </div>
            )
        }

        return(
            <div className="Profile">

                        <div style={styles.container}>
                            <Subheader style={styles.title}>{this.state.name}'s Profile</Subheader>
                        </div>
                        <Paper style={styles.paper}>
                            <List>
                                <Subheader>Name</Subheader>
                                <ListItem
                                    primaryText={this.state.name}
                                />
                                <Subheader>Contact #</Subheader>
                                <ListItem
                                    primaryText={this.state.contactNum}
                                />
                                <Subheader>Location</Subheader>
                                <ListItem
                                    primaryText={this.state.location}
                                />
                                <hr/>
                                <ListItem
                                    primaryText={'Interests'}
                                    initiallyOpen={true}
                                    nestedItems={[
                                        <ListItem
                                        primaryText={'Hockey'}
                                        />
                                    ]}
                                />
                            </List>
                        </Paper>
                    </div>



            )
    }
}

export default Profile;
