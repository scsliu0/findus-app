import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const avatarStyle={
    position: 'absolute',
    left: '12%',
    marginTop: 50,
    top: '20%',
    margin: '40px'
}

const paperStyle={
    position: 'absolute',
    height: 500,
    width: 500,
    marginTop: 50,
    top: '20%',
    left: '35%',
    textAlign: 'center',
    display: 'inline-block',
}

class ProfilePage extends React.Component {

    constructor(){
        super();
        this.state ={
            nameValue: 'Enter Name',
            contactValue: 'Enter Contact Number',
            locationValue: 'Enter Location',
            interestValue: 'Enter Interests'
        }
    }

    handleNameChange = (event) => {
        this.setState({
          nameValue: event.target.value
        });
      };

    handleNumberChange = (event) => {
      this.setState({
        contactValue: event.target.value
      });
    };

    handleLocationChange = (event) => {
        this.setState({
          locationValue: event.target.value
        });
    };

    handleInterestChange = (event) => {
        this.setState({
          interestValue: event.target.value
        });
    };

    updateUser(event){
        event.preventDefault();
        const user={
            name: this.state.nameValue,
            contact: this.state.contactValue,
            location: this.state.locationValue,
            interest: this.state.interestValue
        }
        console.log(user);
        this.props.getUser(user);
    }

    render(){
        return(
            <div className="profile">
                <Avatar
                          size={200}
                          style={avatarStyle}
                >
                    ?
                </Avatar>
                <div className="Info">
                    <Paper style={paperStyle}>
                        <div style={{margin: '30px'}} className="Info">
                            <TextField floatingLabelStyle={{left: '0%', marginBottom: '20px'}}floatingLabelFixed={true} floatingLabelText='Name' value={this.state.nameValue} onChange={this.handleNameChange}/> <br />
                            <TextField floatingLabelStyle={{left: '0%', marginBottom: '20px'}}floatingLabelFixed={true} floatingLabelText='Contact Number' value={this.state.contactValue} onChange={this.handleNumberChange}/> <br />
                            <TextField floatingLabelStyle={{left: '0%', marginBottom: '20px'}}floatingLabelFixed={true} floatingLabelText='Location' value={this.state.locationValue} onChange={this.handleLocationChange}/> <br />
                            <TextField floatingLabelStyle={{left: '0%', marginBottom: '20px'}}floatingLabelFixed={true} floatingLabelText='Interests' multiLine={true} value={this.state.interestValue} onChange={this.handleInterestChange}/> <br />
                            <RaisedButton onClick={(e) => this.updateUser(e)} style={{margin: '20px'}}label="Save" primary={true} />
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default ProfilePage;
