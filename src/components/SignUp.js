import React from 'react';
import Menubar from './Menubar';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

const checkStyle = {
  block: {
    maxWidth: 250,
    left: '120px'
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

const headerStyle={
    position: 'absolute',
    left: '44%',
    top: '15%',
    fontSize: '35px'
}
const butStyle={
    height: 30,
    margin: '5px',
    position: 'relative'
}

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          nameValue: 'Enter Name',
          contactValue: 'Enter Contact Number',
          locationValue: 'Enter Location'
        }
        this.goToApp = this.goToApp.bind(this);
    }


    goToApp(event){
        event.preventDefault();
        const timestamp = Date.now();
        this.context.router.transitionTo('/user/'+timestamp);
    }

    handleNameChange = (event) => {
        this.setState({
          nameValue: event.target.value
        });
        console.log(this.state.nameValue);
      };

    handleNumberChange = (event) => {
      this.setState({
        contactValue: event.target.value
      });
      console.log(this.state.contactValue);
    };

    handleLocationChange = (event) => {
        this.setState({
          locationValue: event.target.value
        });
        console.log(this.state.locationValue);
    };

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
                <Menubar />
                <div className="Info">
                    <Subheader style={headerStyle}>Create User</Subheader>
                    <Paper style={paperStyle}>
                        <div style={{margin: '30px'}} className="Info">
                            <TextField value={this.state.nameValue} onChange={this.handleNameChange}/> <br />
                            <TextField value={this.state.contactValue} onChange={this.handleNumberChange}/> <br />
                            <TextField value={this.state.locationValue} onChange={this.handleLocationChange}/> <br />
                        </div>
                        <Divider />
                        <Subheader style={{textAlign: 'center', marginTop: '10px'}}>Interests</Subheader>
                            <div>
                                <Checkbox
                                    onChange={this.handleCheckBoxChange}
                                    label="Football"
                                    style={checkStyle.block}
                                />
                                <Checkbox
                                    onChange={this.handleCheckBoxChange}
                                    label="Cricket"
                                    style={checkStyle.block}
                                />
                                <Checkbox
                                    onChange={this.handleCheckBoxChange}
                                    label="Hockey"
                                    style={checkStyle.block}
                                />
                                <Checkbox
                                    onChange={this.handleCheckBoxChange}
                                    label="Dota2"
                                    style={checkStyle.block}
                                />
                                <Checkbox
                                    onChange={this.handleCheckBoxChange}
                                    label="Cloud Computing CS4311"
                                    style={checkStyle.block}
                                />
                        </div><br />
                    <RaisedButton label="Create" style={butStyle} secondary={true} onClick={(e) => this.goToApp(e)} />
                    </Paper>
                </div>
            </div>
        )
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;
