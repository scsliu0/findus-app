import React, { Component } from 'react';
import Checkbox from './Checkbox';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const tableStyle={
    margin: '10px',
    height: 500,
    width: 1000,
    position: 'absolute',
    left: '8%'
};

const styles = {
    chip: {
        marginLeft:7,
        marginRight:7,

    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

var users = [
    {
        userName: "Blake",
        userInterests: ["Hockey", "Gaming", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Shane",
        userInterests: ["Cricket", "Gaming", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Luke",
        userInterests: ["Warhammer", "Gaming", "Hiking","Runescape", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Kayla",
        userInterests: ["Reading", "Exercise", "Hiking", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Chris",
        userInterests: ["Dancing", "Gaming", "Dropping out", "Soccer", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Dakota",
        userInterests: ["Cooking", "Gaming", "Yelling", "Lacrosse", "Basketball"],
        userLocation: [0,0]
    },
    {
        userName: "Kirk",
        userInterests: ["Cars", "Gaming", "Partying", "Runescape", "Netflix and Chill"],
        userLocation: [0,0]
    },
    {
        userName: "Kyle",
        userInterests: ["Music", "Gaming", "Korea", "Korean Women", "Baseball"],
        userLocation: [0,0]
    },
    {
        userName: "Peter",
        userInterests: ["Hockey", "Marijuana", "Teenagers", "Cheating", "Baseball"],
        userLocation: [0,0]
    }
];

const interests = [
    'Hockey',
    'Dancing',
    'Exercise',
    'Gaming',
    'Cricket',
    'Dropping out',
    'Soccer',
    'Hiking',
    'Baseball',
    'Warhammer',
    'Reading',
];


function checkIntersection(arr1, arr2){
    let found = arr1.some(r=>arr2.indexOf(r) >= 0);
    return found;
}

var usersToDisplay = [];

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users,
            usersToDisplay
        };
    }


    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
        this.state;
    };

    toggleCheckbox = label => {
        if(this.selectedCheckboxes.has(label)){
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    handleFormChange = formSubmitEvent => {

        for(const checkbox of this.selectedCheckboxes){
            console.log(checkbox, "is selected.");
        }
        console.log(this.selectedCheckboxes);

        //Turn checkbox set into an array
        let selectedArr = [...this.selectedCheckboxes];
        //Reset usersToDisplay
        this.state.usersToDisplay =[];
        for(var k in this.state.users){
            //console.log(this.state.users[k].userInterests);
            if(checkIntersection(selectedArr,this.state.users[k].userInterests)){
                console.log("Matched with: " + this.state.users[k].userName);

                this.state.usersToDisplay.push(this.state.users[k]);

            }
        }
        this.setState({
            usersToDisplay: this.state.usersToDisplay
        });
        console.log("Users to display: ");
        console.log(this.state.usersToDisplay);


    };



    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
            style={styles.checkbox}
        />
    );

    createCheckboxes = () => (
        interests.map(this.createCheckbox)
    );

    render(){
        return(
            <div className={'SearchPage'}>
                <div className={"container"}>
                    <div className={"page-header"}>
                        <h1><b>Search</b></h1>
                    </div>
                    <div className={"col-sm-12"}>
                        <h2><b>Interests</b></h2>
                        <form className={"list-group"} onChange={this.handleFormChange}>
                            {this.createCheckboxes()}
                        </form>
                    </div>
                    <hr/>
                    <h4>
                        Matched Users: <span className={"badge"}>{this.state.usersToDisplay.length}</span>
                    </h4>
                    <Table>
                        <TableHeader adjustforCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Interests</TableHeaderColumn>
                                <TableHeaderColumn>Request</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            { this.state.usersToDisplay.map((user, index) =>
                                <TableRow key={index}>
                                    <TableRowColumn>
                                        <b>{user.userName}</b>
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {this.state.usersToDisplay[index].userInterests.map((interest, index) =>
                                            <p key={index}>{interest}</p>
                                        )}
                                    </TableRowColumn>
                                    <TableRowColumn><FlatButton label="contact" /></TableRowColumn>
                                </TableRow>
                            )}


                        </TableBody>
                    </Table>
                    <ul className={"list-group"}>

                    </ul>
                </div>
            </div>
            )
    }
}

export default SearchPage;
