import React from 'react';
import {grey400, blue600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Interest from '../components/Interest';

import {base} from '../base'
import {
    Avatar, Card, CardHeader, CardText, CardTitle, CircularProgress, Divider, List,
    ListItem, Tab, Tabs
} from "material-ui";

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
        margin: '0px 40px 40px 15px'
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    saveBtn: {
        marginTop: 10,
        float: 'right'
    },
    saveInterestsBtn:{
       float: 'right',
       marginBottom:20,
       marginRight: 20
    },
    interestsBtn: {
        marginTop: 10,
        float: 'left'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '30px'
    },
    paper:{
        height: 'auto',
        width: '50%',
        marginLeft: 25

    },
    tabs:{
        background: blue600,
    },
};

class Profile extends React.Component {

    constructor(){
        super();

        this.state={
            name: null,
            contactNum: null,
            location: null,
            loading: true,
            userInterests: {},
            interests: {},
            userList: {},
            acceptedList: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.profileId === this.props.uid) {

        } else {
            this.fetchUserInfo(this.props.profileId);
        }
    }

    componentWillMount(){
        this.fetchUsers();

    }

    componentDidMount(){
        this.fetchUserInfo(this.props.profileId);
        this.fetchMasterInterests();

    }

    fetchMasterInterests =  () => {
        base.fetch('interests/', {
            context: this,
            then(data) {
                if (data === null) {
                } else {
                    this.setState({
                        interests: data
                    });
                }
            },
        })
    };
    fetchUserInfo = (id) => {
        base.fetch('users/'+ id, {
            context: this,
            then(data) {
                if (data === null) {
                } else {
                    this.setState({
                        name: data.name,
                        contactNum: data.contactNum,
                        location: data.location,
                        loading: false,
                        userInterests: data.interests,
                    });
                }
            },
        })
    };
    fetchUsers = () => {
        base.fetch('users/', {
            context: this,
            then(data) {

                if (data === null) {
                    //don't set userList or username yet, you're on the login page
                } else {
                    this.setState({
                        userList: data
                    })
                }
            },
        });
    };
    handleSave = (event) => {
        event.preventDefault();
        if(this.state.userInterests) {
            base.update('users/' + this.props.uid, {
                data: {
                    name: this.state.name,
                    contactNum: this.state.contactNum,
                    location: this.state.location,
                    interests: this.state.userInterests
                },
                then(err) {
                    if (!err) {
                        console.log("Info saved to database!");
                    }
                }
            });
        } else {
            base.update('users/' + this.props.uid, {
                data: {
                    name: this.state.name,
                    contactNum: this.state.contactNum,
                    location: this.state.location
                },
                then(err) {
                    if (!err) {
                        console.log("Info saved to database!");
                    }
                }
            });
        }
    };

    handleChange = (event, value) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: value
        });
        console.log(value);
    };

    handleExpandChange = (expanded) => {
      this.setState({expanded});
    };

    addToInterests = (key, interest) => {
       const userInterests = {...this.state.userInterests};
       userInterests[key] = interest;
       this.setState({userInterests});
    };

    removeFromInterests = (key) => {
        const userInterests = {...this.state.userInterests};
        delete userInterests[key];
        this.setState({userInterests});
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

                <Card style={styles.container}>
                    <CardHeader
                        title={"Your Profile"}
                        subtitle={"Yes, yours."}
                        avatar={<Avatar>{this.state.name.charAt(0)}</Avatar>}/>
                    <Tabs>
                        <Tab label={"Info"} style={styles.tabs}>
                            <CardText>
                                <form style={styles.form}>
                                    <TextField
                                        hintText="Name"
                                        floatingLabelText="Name"
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        name={"name"}
                                        underlineShow={false}
                                    />
                                    <Divider/>
                                    <TextField
                                        hintText="Contact Number"
                                        floatingLabelText="Contact Number"
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                        value={this.state.contactNum}
                                        name={"contactNum"}
                                        underlineShow={false}
                                    />
                                    <Divider/>
                                    <TextField
                                        hintText="Location"
                                        floatingLabelText="Location"
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                        value={this.state.location}
                                        name={"location"}
                                        underlineShow={false}
                                    />
                                    <Divider/>
                                    <div style={styles.saveBtn}>
                                        <RaisedButton label="Save"
                                                      type="submit"
                                                      primary={true}
                                                      onClick={this.handleSave}

                                        />
                                    </div>
                                </form>
                            </CardText>
                        </Tab>
                        <Tab label={"Interests"} style={styles.tabs}>
                            <CardTitle title={"Interests"} subtitle={"Select your interests"}/>
                                <List>
                                    {
                                        Object
                                            .keys(this.state.interests)
                                            .map(key => <Interest key={key} details={this.state.interests[key]} index={key} userInterests={this.state.userInterests} addToInterests={this.addToInterests} removeFromInterests={this.removeFromInterests} editable={true}/>)
                                    }
                                </List>
                                <div style={styles.saveInterestsBtn}>
                                    <RaisedButton label="Save"
                                                  type="submit"
                                                  primary={true}
                                                  onClick={this.handleSave}

                                    />
                                </div>
                        </Tab>
                        <Tab label={"Social Links"} style={styles.tabs}>
                            <h1>Social Links</h1>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
            )
        }

        return(
            <div className="Profile">

                <Card style={styles.container}>
                    <CardHeader
                        title={this.state.name + "'s Profile"}
                        subtitle={this.state.name + " is a great person!"}
                        avatar={<Avatar>{this.state.name.charAt(0)}</Avatar>}/>
                    <Tabs>
                        <Tab label={"Info"} style={styles.tabs}>
                            <List>
                                <Subheader>Name</Subheader>
                                <ListItem
                                    key={1}
                                    primaryText={this.state.name}
                                />
                                <Subheader>Contact #</Subheader>
                                <ListItem
                                    key={2}
                                    primaryText={this.state.contactNum}
                                />
                                <Subheader>Location</Subheader>
                                <ListItem
                                    key={3}
                                    primaryText={this.state.location}
                                />
                                <hr/>
                            </List>
                        </Tab>
                        <Tab label={"Interests"} style={styles.tabs}>
                            <CardTitle title={this.state.name+"'s Interests"}/>
                                <List>
                                    {
                                        Object
                                            .keys(this.state.interests)
                                            .map(key => <Interest key={key} details={this.state.interests[key]} index={key} userInterests={this.state.userInterests} addToInterests={this.addToInterests} removeFromInterests={this.removeFromInterests} editable={false}/>)
                                    }
                                </List>
                        </Tab>
                        <Tab label={"Social Links"} style={styles.tabs}>

                        </Tab>
                    </Tabs>
                </Card>
            </div>
            )
    }
}

export default Profile;
Profile.contextTypes = {
    router: React.PropTypes.object
};
