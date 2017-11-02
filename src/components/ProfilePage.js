import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

const avatarStyle={
    position: 'absolute',
    left: '12%',
    marginTop: 50,
    top: '20%',
    margin: '40px'
}

const checkStyle = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

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
const butStyle={
    height: 30,
    margin: '5px',
    position: 'relative'
}

class ProfilePage extends React.Component {

    state = {
      checked: false,
    }

    updateCheck() {
      this.setState((oldState) => {
        return {
          checked: !oldState.checked,
        };
      });
    }

    render(){
        return(
            <div className="profile">
                <Avatar
                          size={200}
                          style={avatarStyle}
                >
                    A
                </Avatar>
                <div className="Info">
                    <Paper style={paperStyle}>
                        <div style={{margin: '30px'}} className="Info">
                            <TextField hintText="Name"/> <RaisedButton label="Save" style={butStyle} primary={true} /><br />
                            <TextField hintText="Contact No"/><RaisedButton label="Save" style={butStyle} primary={true} /><br />
                            <TextField hintText="Location"/><RaisedButton label="Save" style={butStyle} primary={true} /><br />
                        </div>
                        <Divider />
                        <Subheader style={{textAlign: 'left', marginLeft: '60px', marginTop: '10px'}}>Interests</Subheader>
                            <Checkbox
                                      label="Simple"
                                      style={checkStyle}
                            />
                            <Checkbox
                                      label="Simple"
                                      style={checkStyle}
                            />
                    </Paper>
                </div>
            </div>
        )
    }
}

export default ProfilePage;
